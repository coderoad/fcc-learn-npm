const { getPackageJson, isModuleInstalled, doesNotThrow } = require("./utils");
const assert = require("assert");

describe("package.json", () => {
  let json;
  before(async () => {
    json = await getPackageJson();
  });
  // 1.1
  it('should have a valid "author" key', () => {
    assert.ok(json.author, 'no "author" key provided');
    assert.equal(
      typeof json.author,
      "string",
      'should have an "author" value that is a string'
    );
  });
  // 1.2
  it('should have a valid "description" key', () => {
    assert.ok(json.description, '"description" is missing');
    assert.equal(
      typeof json.description,
      "string",
      'should have a "description" value that is a string'
    );
  });
  // 1.3
  it('should have a valid "keywords" key', () => {
    assert.ok(json.keywords, '"keywords" is missing');
    assert.ok(
      Array.isArray(json.keywords),
      'should have a "keywords" value that is an array'
    );
    assert.ok(
      json.keywords.includes("freecodecamp"),
      'should include "freecodecamp"'
    );
  });
  // 1.4
  it('should have a valid "license" key', () => {
    assert.ok(json.license, '"license" is missing');
    assert.equal(
      typeof json.license,
      "string",
      'should have a "license" value that is a string, e.g. "MIT"'
    );
  });
  // 1.5
  it('should have a valid "version" key', () => {
    assert.ok(json.version, '"version" is missing');
    assert.equal(
      typeof json.version,
      "string",
      'should have a "version" value that is a string'
    );
  });
  // 2.1
  it('should have "dependencies"', () => {
    assert.ok(json.dependencies, '"dependencies" is missing');
    assert.equal(
      typeof json.dependencies,
      "object",
      'should have a "dependencies" value that is an object'
    );
  });
  it('should have installed "moment"', async () => {
    assert.ok(
      await doesNotThrow(
        () => isModuleInstalled({ name: "moment", type: "dependency" }),
        '"moment" not installed'
      )
    );
  });
  // 2.2
  it('should use specific version of "moment"', () => {
    assert.equal(
      json.dependencies.moment,
      "2.10.2",
      '"moment" should use the specific version'
    );
  });
  it('should have installed specific version of "moment"', async () => {
    assert.ok(
      await doesNotThrow(
        () =>
          isModuleInstalled({
            name: "moment",
            type: "dependency",
            version: "2.10.2"
          }),
        '"moment" not installed'
      )
    );
  });
});
