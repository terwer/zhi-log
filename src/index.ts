import LogFactory from "~/src/factory/logFactory"
import DefaultLogFactory from "~/src/factory/defaultLogFactory"
import CustomLogFactory from "~/src/factory/customLogFactory"
import { LogLevelEnum } from "~/src/logConstants"
import { Logger } from "loglevel"

/**
 * 日志工具类
 *
 * @public
 * @author terwer
 * @since 1.0.7
 */
class LogUtil {
  /**
   * 默认日志工厂
   */
  public static defaultLogFactory(): DefaultLogFactory {
    return new DefaultLogFactory()
  }

  public static defaultLogger(): Logger {
    return LogUtil.defaultLogFactory().getLogger()
  }

  /**
   * 自定义日志工厂
   */
  public static customLogFactory(level?: LogLevelEnum, sign?: string) {
    return new CustomLogFactory(level, sign)
  }
}

export default LogUtil
export { LogLevelEnum, LogFactory, CustomLogFactory, DefaultLogFactory }
export type { Logger }
