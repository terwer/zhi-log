/**
 * @packageDocumentation
 * This is the documentation for my package.
 */

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
  /**
   * 获取默认的日志记录器
   *
   * @param loggerName - 日志记录器名称
   */
  getLogger(loggerName?: string): DefaultLogger
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
  /**
   * 获取日志记录器
   */
  getLogger(): DefaultLogger
}

/**
 * 默认日志记录器
 *
 * @author terwer
 * @since 1.0.7
 */
export declare interface DefaultLogger extends Logger {
  /**
   * 日志颜色
   */
  colors?: string[]
  /**
   * Output trace message to console.
   * This will also include a full stack trace
   *
   * @param msg - any data to log to the console
   */
  trace(...msg: any[]): void
  /**
   * Output debug message to console including appropriate icons
   *
   * @param msg - any data to log to the console
   */
  debug(...msg: any[]): void
  /**
   * Output debug message to console including appropriate icons
   *
   * @param msg - any data to log to the console
   */
  log(...msg: any[]): void
  /**
   * Output info message to console including appropriate icons
   *
   * @param msg - any data to log to the console
   */
  info(...msg: any[]): void
  /**
   * Output warn message to console including appropriate icons
   *
   * @param msg - any data to log to the console
   */
  warn(...msg: any[]): void
  /**
   * Output error message to console including appropriate icons
   *
   * @param msg - any data to log to the console
   */
  error(...msg: any[]): void
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
  /**
   * 获取日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @protected
   */
  protected getLogger(loggerName: string): DefaultLogger
}

/**
 * 日志级别
 *
 * @author terwer
 * @since 1.0.7
 * @public
 */
export declare enum LogLevelEnum {
  /**
   * DEBUG
   */
  LOG_LEVEL_DEBUG = "DEBUG",
  /**
   * INFO
   */
  LOG_LEVEL_INFO = "INFO",
  /**
   * WARN
   */
  LOG_LEVEL_WARN = "WARN",
  /**
   * ERROR
   */
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
  /**
   * 默认日志记录器
   */
  static defaultLogger(): DefaultLogger
  /**
   * 自定义日志工厂
   */
  static customLogFactory(level?: LogLevelEnum, sign?: string): CustomLogFactory
}
export default LogUtil

export {}
