declare module "dist/logConstants" {
  /**
   * 日志级别
   *
   * @author terwer
   * @since 1.0.7
   */
  declare enum LogLevelEnum {
    LOG_LEVEL_DEBUG = "DEBUG",
    LOG_LEVEL_INFO = "INFO",
    LOG_LEVEL_WARN = "WARN",
    LOG_LEVEL_ERROR = "ERROR",
  }
  export default LogLevelEnum
}
