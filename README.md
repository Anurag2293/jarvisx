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
jarvisx/5.0.0 win32-x64 node-v18.17.0
$ jarvisx --help [COMMAND]
USAGE
  $ jarvisx COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g jarvisx
$ jarvisx COMMAND
running command...
$ jarvisx (--version)
jarvisx/4.0.0 win32-x64 node-v18.17.0
$ jarvisx --help [COMMAND]
USAGE
  $ jarvisx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jarvisx code PROMPT`](#jarvisx-code-prompt)
* [`jarvisx do PROMPT`](#jarvisx-do-prompt)
* [`jarvisx fs PROMPT`](#jarvisx-fs-prompt)
* [`jarvisx hello PERSON`](#jarvisx-hello-person)
* [`jarvisx hello world`](#jarvisx-hello-world)
* [`jarvisx help [COMMANDS]`](#jarvisx-help-commands)
* [`jarvisx plugins`](#jarvisx-plugins)
* [`jarvisx plugins:install PLUGIN...`](#jarvisx-pluginsinstall-plugin)
* [`jarvisx plugins:inspect PLUGIN...`](#jarvisx-pluginsinspect-plugin)
* [`jarvisx plugins:install PLUGIN...`](#jarvisx-pluginsinstall-plugin-1)
* [`jarvisx plugins:link PLUGIN`](#jarvisx-pluginslink-plugin)
* [`jarvisx plugins:uninstall PLUGIN...`](#jarvisx-pluginsuninstall-plugin)
* [`jarvisx plugins:uninstall PLUGIN...`](#jarvisx-pluginsuninstall-plugin-1)
* [`jarvisx plugins:uninstall PLUGIN...`](#jarvisx-pluginsuninstall-plugin-2)
* [`jarvisx plugins update`](#jarvisx-plugins-update)

## `jarvisx code PROMPT`

```
USAGE
  $ jarvisx code PROMPT

ARGUMENTS
  PROMPT  Ask AI to do any compiling or interpreting task
```

_See code: [dist/commands/code/index.ts](https://github.com/Anurag2293/jarvisx/blob/v5.0.0/dist/commands/code/index.ts)_

## `jarvisx do PROMPT`

describe the command here

```
USAGE
  $ jarvisx do PROMPT

DESCRIPTION
  describe the command here
```

_See code: [dist/commands/do/index.ts](https://github.com/Anurag2293/jarvisx/blob/v5.0.0/dist/commands/do/index.ts)_

## `jarvisx fs PROMPT`

```
USAGE
  $ jarvisx fs PROMPT

ARGUMENTS
  PROMPT  Ask AI to do any task
```

_See code: [dist/commands/fs/index.ts](https://github.com/Anurag2293/jarvisx/blob/v5.0.0/dist/commands/fs/index.ts)_

## `jarvisx hello PERSON`

Say hello

```
USAGE
  $ jarvisx hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Anurag2293/jarvisx/blob/v5.0.0/dist/commands/hello/index.ts)_

## `jarvisx hello world`

Say hello world

```
USAGE
  $ jarvisx hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ jarvisx hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/Anurag2293/jarvisx/blob/v5.0.0/dist/commands/hello/world.ts)_

## `jarvisx help [COMMANDS]`

Display help for jarvisx.

```
USAGE
  $ jarvisx help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jarvisx.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/lib/commands/help.ts)_

## `jarvisx plugins`

List installed plugins.

```
USAGE
  $ jarvisx plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jarvisx plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/lib/commands/plugins/index.ts)_

## `jarvisx plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jarvisx plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ jarvisx plugins add

EXAMPLES
  $ jarvisx plugins:install myplugin 

  $ jarvisx plugins:install https://github.com/someuser/someplugin

  $ jarvisx plugins:install someuser/someplugin
```

## `jarvisx plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jarvisx plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jarvisx plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/lib/commands/plugins/inspect.ts)_

## `jarvisx plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jarvisx plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ jarvisx plugins add

EXAMPLES
  $ jarvisx plugins:install myplugin 

  $ jarvisx plugins:install https://github.com/someuser/someplugin

  $ jarvisx plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/lib/commands/plugins/install.ts)_

## `jarvisx plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jarvisx plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ jarvisx plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/lib/commands/plugins/link.ts)_

## `jarvisx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jarvisx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jarvisx plugins unlink
  $ jarvisx plugins remove
```

## `jarvisx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jarvisx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jarvisx plugins unlink
  $ jarvisx plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/lib/commands/plugins/uninstall.ts)_

## `jarvisx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jarvisx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jarvisx plugins unlink
  $ jarvisx plugins remove
```

## `jarvisx plugins update`

Update installed plugins.

```
USAGE
  $ jarvisx plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/lib/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`jarvisx code PROMPT`](#jarvisx-code-prompt)
* [`jarvisx fs PROMPT`](#jarvisx-fs-prompt)

## `jarvisx code PROMPT`

```
USAGE
  $ jarvisx code PROMPT

ARGUMENTS
  PROMPT  Ask AI to do any compiling or interpreting task
```

## `jarvisx fs PROMPT`

```
USAGE
  $ jarvisx fs PROMPT

ARGUMENTS
  PROMPT  Ask AI assistant to Create, Read, Update or Delete a file or folder.
```
