declare module "dist/customLogFactory" {
  import LogFactory from "../src/logFactory"
  import log from "loglevel"
  import LogLevelEnum from "../src/logConstants"

  /**
   * 自定义日志工厂
   *
   * @author terwer
   * @since 1.0.7
   */
  declare class CustomLogFactory extends LogFactory {
    constructor(level?: LogLevelEnum, sign?: string)

    getLogger(loggerName?: string): log.Logger
  }

  export default CustomLogFactory
}
