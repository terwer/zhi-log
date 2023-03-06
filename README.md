# zhi-log

a simple logger for Node 

## Features

- 100% compatible with console
- log level support
- custom logger name
- a simple LogFactory

## Usage

Default devel is INFO

```js
const logFactory = new LogFactory()
const logger = logFactory.getLogger("test")
logger.debug("This is debug log")
logger.info("This is info log")
logger.error("This is error log")
```

You can set a custom log level

```js
const logFactory = new LogFactory("DEBUG")
const logger = logFactory.getLogger("test")
logger.debug("This is debug log")
logger.info("This is info log")
logger.error("This is error log")
```
