# Learn NPM package json

The Node Package Manager (NPM) is a command-line tool used by developers to share and control modules (or packages) of JavaScript code written for use with Node.js.

## 1. Intro

> Introduction to the package.json

When starting a new project, NPM generates a package.json file. This file lists the package dependencies for your project. Since NPM packages are regularly updated, the package.json file allows you to set specific version numbers for each dependency. This ensures that updates to a package don't break your project.

NPM saves packages in a folder named node_modules. These packages can be installed in two ways:

- globally in a root node_modules folder, accessible by all projects.
- locally within a project's own node_modules folder, accessible only to that project.

Most developers prefer to install packages local to each project to create a separation between the dependencies of different projects.

The `package.json` file is the center of any Node.js project or NPM package. It stores information about your project, similar to how the &lt;head&gt; section of an HTML document describes the content of a webpage. It consists of a single JSON object where information is stored in key-value pairs. There are only two required fields; "name" and "version", but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.
If you look at the file tree of your project, you will find the package.json file on the top level of the tree. This is the file that you will be improving in the next couple of challenges.

## 2. Author

> Package.json author

One of the most common pieces of information in this file is the `author` field. It specifies who created the project, and can consist of a string or an object with contact or other details. An object is recommended for bigger projects, but a simple string like the following example will do for this project.

```json
"author": "Jane Doe",
```

### 2.1

Add your name as the `author` of the project in the package.json file.
**Note:** Remember that you’re writing JSON, so all field names must use double-quotes (") and be separated with a comma (,).

#### HINTS

- Edit the file `package.json`
- Add a property of "author" to the object

## 3. Description

> Package.json description

The next part of a good package.json file is the `description` field; where a short, but informative description about your project belongs.
If you some day plan to publish a package to NPM, this is the string that should sell your idea to the user when they decide whether to install your package or not. However, that’s not the only use case for the description, it’s a great way to summarize what a project does. It’s just as important in any Node.js project to help other developers, future maintainers or even your future self understand the project quickly.

Regardless of what you plan for your project, a description is definitely recommended.

Here's an example:

```json
"description": "A project that does something awesome",
```

### 3.1

Add a `description` to the package.json file of your project.

**Note:** Remember to use double-quotes for field-names (") and commas (,) to separate fields.

#### HINTS

- Edit the file `package.json`
- Add a property of "description" to the object

## 4. Keywords

> Package.json keywords

The `keywords` field is where you can describe your project using related keywords.

Here's an example:

```json
"keywords": [ "descriptive", "related", "words" ],
```

As you can see, this field is structured as an array of double-quoted strings.

### 4.1

Add an array of suitable strings to the `keywords` field in the package.json file of your project.

One of the keywords should be "freecodecamp".

#### HINTS

- Edit the file `package.json`
- "keywords" should be an array including the string "freecodecamp"

## 5. License

> Package.json license

The `license` field is where you inform users of what they are allowed to do with your project.

Some common licenses for open source projects include MIT and BSD. License information is not required, and copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do. Here's an example of the license field:

```json
"license": "MIT",
```

### 5.1s

Fill the `license` field in the package.json file of your project as you find suitable.

## 6. Version

> Package.json version

A `version` is one of the required fields of your package.json file. This field describes the current version of your project. Here's an example:

```json
"version": "1.2.0",
```

### 6.1

Add a `version` to the package.json file of your project.

## 7. External Packages

> Installing dependencies from NPM

One of the biggest reasons to use a package manager, is their powerful dependency management. Instead of manually having to make sure that you get all dependencies whenever you set up a project on a new computer, NPM automatically installs everything for you. But how can NPM know exactly what your project needs? Meet the `dependencies` section of your package.json file.

In this section, packages your project requires are stored using the following format:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.17.0"
}
```

Install a package by running the NPM command line tool in a terminal with the command `install`.

```shell
npm install express
```

**Note:** Use the Use the `⌃\`` keyboard shortcut with the backtick character to open the VSCode integrated terminal.

Installed packages are created in a `node_modules` folder in your project. Avoid editing or changing the node_modules folder or its contents.

### 7.1

Install the "moment" package to the `dependencies` field of your package.json file by running the command line npm install.

**Note:** Moment is a handy library for working with time and dates.

## 8. Semantic Versioning

> Versioning packages

`Versions` of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

Knowing SemVer can be useful when you develop software that uses external dependencies (which you almost always do). One day, your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding why things that worked yesterday suddenly don’t work today. This is how Semantic Versioning works according to the official website:

```json
"package": "MAJOR.MINOR.PATCH"
```

The MAJOR version should increment when you make incompatible API changes.

The MINOR version should increment when you add functionality in a backwards-compatible manner.

The PATCH version should increment when you make backwards-compatible bug fixes.
This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

Using the NPM cli, a specific version of a package can be installed by specifying the `@` version.

```shell
npm install express@4.17.0
```

### 8.1

In the dependencies section of your package.json file, change the `version` of moment to match MAJOR version 2, MINOR version 10 and PATCH version 2

## 9. Receive Patch Updates

> Using `~` to recieve patches

In the last challenge, you told npm to only include a specific version of a package. That’s a useful way to freeze your dependencies if you need to make sure that different parts of your project stay compatible with each other. But in most use cases, you don’t want to miss bug fixes since they often include important security patches and (hopefully) don’t break things in doing so.

To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (`~`) character. Here's an example of how to allow updates to any 1.3.x version.

```json
"package": "~1.3.8"
```

### 9.1

In the package.json file, your current rule for how npm may upgrade moment is to use a specific version (2.10.2). But now, you want to allow the latest 2.10.x version.
Use the tilde (`~`) character to prefix the version of moment in your dependencies, and allow npm to update it to any new PATCH release.

**Note:** The version numbers themselves should not be changed.

## 10. Receive Minor Updates

> Using `^` to receive minor updates

Similar to how the tilde we learned about in the last challenge allows npm to install the latest PATCH for a dependency, the caret (`^`) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.

Your current version of moment should be "~2.10.2" which allows npm to install to the latest 2.10.x version. If you were to use the caret (`^`) as a version prefix instead, npm would be allowed to update to any 2.x.x version.

```json
"package": "^1.3.8"
```

This would allow updates to any 1.x.x version of the package.

### 10.1

Use the caret (`^`) to prefix the version of moment in your dependencies and allow npm to update it to any new MINOR release.

**Note:** The version numbers themselves should not be changed.

## 11. Remove a Dependency

> Removing a dependency

You have now tested a few ways you can manage dependencies of your project by using the package.json's dependencies section. You have also included external packages by adding them to the file and even told npm what types of versions you want, by using special characters such as the tilde or the caret.

But what if you want to remove an external package that you no longer need? You might already have guessed it, just remove the corresponding key-value pair for that package from your dependencies.

This same method applies to removing other fields in your package.json as well.

### 11.1

Remove the moment package from your dependencies.

**Note:** Make sure you have the right amount of commas after removing it.
