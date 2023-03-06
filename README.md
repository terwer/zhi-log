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

// [zhi] [20:43:36] INFO test : This is info log
// [zhi] [20:43:36] ERROR test : This is error log
```

You can set a custom log level

```js
const logFactory = new LogFactory("DEBUG")
const logger = logFactory.getLogger("test")
logger.debug("This is debug log")
logger.info("This is info log")
logger.error("This is error log")

// [zhi] [20:43:59] DEBUG test : This is debug log
// [zhi] [20:43:59] INFO test : This is info log
// [zhi] [20:43:59] ERROR test : This is error log
```

You can also set a custom prefix sign

```js
const logFactory = new LogFactory("DEBUG", "my-log")
const logger = logFactory.getLogger("test")
logger.debug("This is debug log")
logger.info("This is info log")
logger.error("This is error log")

// [my-log] [20:46:06] DEBUG test : This is debug log
// [my-log] [20:46:06] INFO test : This is info log
// [my-log] [20:46:06] ERROR test : This is error log
```