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
const logger = LogUtil.defaultLogFactory().getLogger()
logger.debug("This is debug log")
logger.info("This is info log")
logger.error("This is error log")

// [zhi] [11:26:51] INFO /Users/terwer/Documents/mydocs/zhi-log/test/log.test.ts:33:48 : This is info log
// [zhi] [11:26:51] ERROR /Users/terwer/Documents/mydocs/zhi-log/test/log.test.ts:33:48 : This is error log
```

You can set a custom log level

```js
const logger = LogUtil.customLogFactory(LogLevelEnum.LOG_LEVEL_DEBUG).getLogger("test")
logger.debug("This is debug log")
logger.info("This is info log")
logger.error("This is error log")

// [zhi] [11:28:15] DEBUG test : This is debug log
// [zhi] [11:28:15] INFO test : This is info log
// [zhi] [11:28:15] ERROR test : This is error log
```

You can also set a custom prefix sign

```js
const logger = LogUtil.customLogFactory(LogLevelEnum.LOG_LEVEL_DEBUG, "my-log").getLogger("test")
logger.debug("This is debug log")
logger.info("This is info log")
logger.error("This is error log")

// [my-log] [11:29:04] DEBUG test : This is debug log
// [my-log] [11:29:04] INFO test : This is info log
// [my-log] [11:29:04] ERROR test : This is error log
```

Also, if you config LOG_LEVEL in your project's `.env` file, it will work

```
LOG_LEVEL=DEBUG
DEFAUT_LOGGER=zhi
```