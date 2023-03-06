import loglevel, { Logger } from "loglevel"
import prefix from "loglevel-plugin-prefix"

// DEBUG, INFO, WARN, ERROR
const LOG_LEVEL_DEBUG = "DEBUG"
const LOG_LEVEL_INFO = "INFO"
const LOG_LEVEL_WARN = "WARN"
const LOG_LEVEL_ERROR = "ERROR"

/**
 * 日志工具类
 *
 * @author terwer
 * @since 1.0.0
 */
class Log {
  private consoleLogger = "console"

  constructor(
    level:
      | typeof LOG_LEVEL_DEBUG
      | typeof LOG_LEVEL_INFO
      | typeof LOG_LEVEL_WARN
      | typeof LOG_LEVEL_ERROR
  ) {
    // polyfill due to https://github.com/vitejs/vite/issues/7385
    const chalk = {
      gray: (src: any): string => {
        return src.toString()
      },
      green: (src: any): string => {
        return src.toString()
      },
      yellow: (src: any): string => {
        return src.toString()
      },
      red: (src: any): string => {
        return src.toString()
      },
    }

    prefix.reg(loglevel)
    if (level) {
      loglevel.setLevel(level)
    } else {
      loglevel.setLevel(LOG_LEVEL_INFO)
    }

    prefix.apply(loglevel, {
      format(level, name, timestamp) {
        const strarr = ["[zhi]"]
        strarr.push(
          chalk.gray("[") + chalk.green(timestamp).toString() + chalk.gray("]")
        )

        switch (level) {
          case LOG_LEVEL_INFO:
            strarr.push(chalk.green(level.toUpperCase().toString()))
            break
          case LOG_LEVEL_WARN:
            strarr.push(chalk.yellow(level.toUpperCase().toString()))
            break
          case LOG_LEVEL_ERROR:
            strarr.push(chalk.red(level.toUpperCase().toString()))
            break
        }

        strarr.push(chalk.green(name).toString())
        strarr.push(chalk.gray(":"))

        return strarr.join(" ")
      },
    })
  }

  /**
   * 获取日志记录器
   *
   * @param loggerName 日志记录器，默认为 console
   * @author terwer
   * @since 1.0.0
   */
  public getLogger = (loggerName?: string): Logger =>
    loglevel.getLogger(loggerName ?? this.consoleLogger)
}

/**
 * 日志记录工厂
 *
 * @author terwer
 * @since 1.0.0
 */
class LogFactory {
  private log

  /**
   * 默认日志级别
   *
   * @param level 可选，未设置默认INFO
   */
  constructor(
    level?:
      | typeof LOG_LEVEL_DEBUG
      | typeof LOG_LEVEL_INFO
      | typeof LOG_LEVEL_WARN
      | typeof LOG_LEVEL_ERROR
  ) {
    this.log = new Log(level)
  }

  public getLogger(loggerName: string): Logger {
    return this.log.getLogger(loggerName)
  }
}

export default LogFactory
