declare module "dist/logUtil" {
  import DefaultLogFactory from "../src/defaultLogFactory"
  import CustomLogFactory from "../src/customLogFactory"
  import LogLevelEnum from "../src/logConstants"

  /**
   * 日志工具类
   *
   * @author terwer
   * @since 1.0.7
   */
  declare class LogUtil {
    /**
     * 默认日志工厂
     */
    static defaultLogFactory(): DefaultLogFactory

    /**
     * 自定义日志工厂
     */
    static customLogFactory(
      level?: LogLevelEnum,
      sign?: string
    ): CustomLogFactory
  }

  export default LogUtil
}
