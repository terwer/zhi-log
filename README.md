# zhi-log

a simple logger for Node and Browser

![version](https://img.shields.io/github/release/terwer/zhi-log.svg?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)

## Usage

```ts
import LogUtil from "zhi-log" 

const logger = LogUtil.defaultLogger()
logger.debug("debug msg")
logger.info("info msg")
logger.error("error msg")

```

## Deps

```
├── zhi-env
├── loglevel
├── callsites
├── loglevel-plugin-prefix
```

## Useful scripts

### Build

```bash
pnpm ci
```

### Publish to npm

```bash
pnpm package
```

### Docs

```bash
pnpm vitepress:dev
```
