/**
 * @packageDocumentation
 * 同时支持 Node 和 浏览器 的 简洁、强大的日志框架
 */

import AbstractLogFactory from "~/src/factory/abstractLogFactory"
import CustomLogFactory from "~/src/factory/customLogFactory"
import LogLevelEnum from "~/src/logConstants"
import DefaultLogger from "~/src/defaultLogger"
import Env from "zhi-env"

/**
 * 日志工具类
 *
 * @public
 * @author terwer
 * @since 1.0.7
 */
class LogFactory {
  /**
   * 默认日志记录器
   *
   * @param stackSize 栈的深度
   * @param env - 环境变量实例
   */
  public static defaultLogger(env?: Env, stackSize?: number): DefaultLogger {
    return LogFactory.customLogFactory(undefined, undefined, env).getLogger(
      undefined,
      stackSize
    )
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

export default LogFactory
export { LogLevelEnum, AbstractLogFactory, CustomLogFactory }
export type { DefaultLogger }
