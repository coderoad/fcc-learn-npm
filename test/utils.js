const {
  promises: { readFile }
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
