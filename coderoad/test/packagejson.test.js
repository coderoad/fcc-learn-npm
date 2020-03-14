const { getPackageJson } = require("./utils");
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
});
