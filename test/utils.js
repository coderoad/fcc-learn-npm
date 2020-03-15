const {
  promises: { readFile, readdir }
} = require("fs");
const { join } = require("path");

const getPackageJson = async () => {
  // load package.json file
  const pathToPackageJson = join(process.cwd(), "package.json");
  const packageJson = await readFile(pathToPackageJson, "utf8").catch(
    console.error
  );
  if (!packageJson) {
    throw new Error("Missing root package.json");
  }
  // parse as JSON
  const json = JSON.parse(packageJson);
  if (!json) {
    throw new Error("The package.json content looks invalid");
  }
  return json;
};

exports.getPackageJson = getPackageJson;

/**
 * isModuleInstalled
 * @param { name, type } params
 * "name" - the name of the dependency
 * "type" - "dependency", "devDependency", "peerDependency"
 * @returns boolean
 */
const isModuleInstalled = async ({ name, type }) => {
  // 1. load package.json file
  const json = await getPackageJson();

  // 2. verify package lists dependency by type
  let installCommand;
  let hasDependency;

  switch (type) {
    case "dependency":
      installCommand = "--save";
      hasDependency = !!json.dependencies && json.dependencies[name];
      break;
    case "devDependency":
      installCommand = "--save-dev";
      hasDependency = !!json.devDependencies && json.devDependencies[name];
      break;
    case "peerDependency":
      throw new Error("Peer dependencies unsupported");
    default:
      throw new Error("Unsupported packaged type");
  }

  if (!hasDependency) {
    throw new Error(`Run "npm install ${installCommand} ${name}"`);
  }

  // 3. verify node_module installed
  const pathToNodeModule = join(process.cwd(), "node_modules", name);
  const hasNodeModules = await readdir(pathToNodeModule).catch(() => {
    throw new Error('Missing node_modules. Run "npm install"');
  });
  if (!hasNodeModules) {
    throw new Error('Missing node_modules. Run "npm install"');
  }

  // 4. is installed
  return true;
};

exports.isModuleInstalled = isModuleInstalled;

// created because assert.doesNotThrow not working predictably with async fns
const doesNotThrow = async fn => {
  let result = true;
  try {
    await fn();
  } catch (error) {
    console.error(error);
    result = false;
  }
  return result;
};

exports.doesNotThrow = doesNotThrow;
