declare module "dist/logFactory" {
  import { Logger } from "loglevel"
  import LogLevelEnum from "../src/logConstants"

  /**
   * 日志记录工厂
   *
   * @author terwer
   * @since 1.0.0
   */
  declare abstract class LogFactory {
    private log

    /**
     * 默认日志级别
     *
     * @param level 可选，未设置默认INFO
     * @param sign 可选前缀，默认zhi
     */
    constructor(level?: LogLevelEnum, sign?: string)

    protected getLogger(loggerName: string): Logger
  }

  export default LogFactory
}
