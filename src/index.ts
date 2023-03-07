import DefaultLogFactory from "~/src/defaultLogFactory"
import CustomLogFactory from "~/src/customLogFactory"
import { LogLevelEnum } from "~/src/logConstants"

/**
 * 日志工具类
 *
 * @author terwer
 * @since 1.0.7
 */
class LogUtil {
  /**
   * 默认日志工厂
   */
  public static defaultLogFactory() {
    return new DefaultLogFactory()
  }

  /**
   * 自定义日志工厂
   */
  public static customLogFactory(level?: LogLevelEnum, sign?: string) {
    return new CustomLogFactory(level, sign)
  }
}

export default LogUtil
