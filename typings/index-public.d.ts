import log from "loglevel"
import { Logger } from "loglevel"

/**
 * 自定义日志工厂
 *
 * @public
 * @author terwer
 * @since 1.0.7
 */
export declare class CustomLogFactory extends LogFactory {
  constructor(level?: LogLevelEnum, sign?: string)
  getLogger(loggerName?: string): log.Logger
}

/**
 * 默认日志工厂
 *
 * @public
 * @author terwer
 * @since 1.0.7
 */
export declare class DefaultLogFactory extends LogFactory {
  private callerName
  getLogger(): log.Logger
}

/**
 * 日志记录工厂
 *
 * @public
 * @author terwer
 * @since 1.0.0
 */
export declare abstract class LogFactory {
  private log
  /**
   * 默认日志级别
   *
   * @param level - 可选，未设置默认INFO
   * @param sign - 可选前缀，默认zhi
   */
  constructor(level?: LogLevelEnum, sign?: string)
  protected getLogger(loggerName: string): Logger
}

export { Logger }

/**
 * 日志级别
 *
 * @author terwer
 * @since 1.0.7
 * @public
 */
export declare enum LogLevelEnum {
  LOG_LEVEL_DEBUG = "DEBUG",
  LOG_LEVEL_INFO = "INFO",
  LOG_LEVEL_WARN = "WARN",
  LOG_LEVEL_ERROR = "ERROR",
}

/**
 * 日志工具类
 *
 * @public
 * @author terwer
 * @since 1.0.7
 */
declare class LogUtil {
  /**
   * 默认日志工厂
   */
  static defaultLogFactory(): DefaultLogFactory
  static defaultLogger(): Logger
  /**
   * 自定义日志工厂
   */
  static customLogFactory(level?: LogLevelEnum, sign?: string): CustomLogFactory
}
export default LogUtil

export {}
