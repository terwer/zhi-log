/**
 * @packageDocumentation
 * This is the documentation for my package.
 */

import LogFactory from "~/src/factory/logFactory"
import CustomLogFactory from "~/src/factory/customLogFactory"
import LogLevelEnum from "~/src/logConstants"
import DefaultLogger from "~/src/logger"
import Env from "zhi-env"

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
   * @param env - 环境变量实例
   */
  public static defaultLogger(env?: Env): DefaultLogger {
    return LogUtil.customLogFactory(undefined, undefined, env).getLogger()
  }

  /**
   * 自定义日志工厂
   */
  public static customLogFactory(
    level?: LogLevelEnum,
    sign?: string,
    env?: Env
  ) {
    return new CustomLogFactory(level, sign, env)
  }

  /**
   * 自定义日志工厂，自定义前缀
   */
  public static customSignLogFactory(sign?: string, env?: Env) {
    return new CustomLogFactory(undefined, sign, env)
  }
}

export default LogUtil
export { LogLevelEnum, LogFactory, CustomLogFactory }
export type { DefaultLogger }
