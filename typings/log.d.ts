declare module "dist/log" {
  import { Logger } from "loglevel"
  import LogLevelEnum from "../src/logConstants"

  /**
   * 日志工具类
   *
   * @author terwer
   * @since 1.0.0
   */
  declare class Log {
    private consoleLogger
    stringToEnumValue: <T extends Record<string, string>, K extends keyof T>(
      enumObj: T,
      value: string
    ) => T[keyof T]

    constructor(level: LogLevelEnum, sign?: string)

    /**
     * 获取日志记录器
     *
     * @param loggerName 日志记录器，默认为 console
     * @author terwer
     * @since 1.0.0
     */
    getLogger: (loggerName?: string) => Logger
  }

  export default Log
}
