Jarvis X - The Jarvis Jr
=================

The Smart Command Line Interface for Laymans!

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g jarvisx
$ jarvisx COMMAND
running command...
$ jarvisx (--version)
jarvisx/3.0.0 win32-x64 node-v18.17.0
$ jarvisx --help [COMMAND]
USAGE
  $ jarvisx COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jarvisx fs PROMPT`](#jarvisx-fs-prompt)
* [`jarvisx code PROMPT`](#jarvisx-code-prompt)

## `jarvisx fs PROMPT`

Operations on files and folders.

```
USAGE
  $ jarvisx fs PROMPT

ARGUMENTS
  PROMPT  Ask AI to do any tasks on File System like create, read, update and delete.
```

## `jarvisx code PROMPT`

Compile and Run code files of Java, C++ and JavaScript. (The compilers should be present)

```
USAGE
  $ jarvisx code PROMPT 

ARGUMENTS
  PROMPT Prompt in plain English

DESCRIPTION
  Compile and Run code files using GPT interpreted commands.

EXAMPLES
  $ npx jarvisx code "compile a file called main.cpp"
  SUCCESS: Compiled Successfully!
```

