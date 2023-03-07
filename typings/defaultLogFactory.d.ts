declare module "dist/defaultLogFactory" {
  import LogFactory from "../src/logFactory"
  import log from "loglevel"

  /**
   * 默认日志工厂
   *
   * @author terwer
   * @since 1.0.7
   */
  declare class DefaultLogFactory extends LogFactory {
    private callerName

    getLogger(): log.Logger
  }

  export default DefaultLogFactory
}