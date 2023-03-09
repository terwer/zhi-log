/**
 * @packageDocumentation
 * This is the documentation for my package.
 */

import LogFactory from "~/src/factory/logFactory"
import CustomLogFactory from "~/src/factory/customLogFactory"
import LogLevelEnum from "~/src/logConstants"
import DefaultLogger from "~/src/logger"

/**
 * 日志工具类
 *
 * @public
 * @author terwer
 * @since 1.0.7
 */
class LogUtil {
  /**
   * 默认日志记录器
   *
   * @param envMeta - 可选环境变量元数据，特别注意：如果需要使用环境变量控制日志，请务必传递 import.meta.env
   */
  public static defaultLogger(envMeta?: any): DefaultLogger {
    return LogUtil.customLogFactory(undefined, undefined, envMeta).getLogger()
  }

  /**
   * 自定义日志工厂
   */
  public static customLogFactory(
    level?: LogLevelEnum,
    sign?: string,
    envMeta?: any
  ) {
    return new CustomLogFactory(level, sign, envMeta)
  }

  /**
   * 自定义日志工厂，自定义前缀
   */
  public static customSignLogFactory(sign?: string, envMeta?: any) {
    return new CustomLogFactory(undefined, sign, envMeta)
  }
}

export default LogUtil
export { LogLevelEnum, LogFactory, CustomLogFactory }
export type { DefaultLogger }
