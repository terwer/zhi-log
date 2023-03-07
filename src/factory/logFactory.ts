/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

import LogLevelEnum from "~/src/logConstants"
import Log from "~/src/log"
import dotenv from "dotenv"
import DefaultLogger from "~/src/logger"

/**
 * 日志记录工厂
 *
 * @public
 * @author terwer
 * @since 1.0.0
 */
abstract class LogFactory {
  private log

  /**
   * 默认日志级别
   *
   * @param level - 可选，未设置默认INFO
   * @param sign - 可选前缀，默认zhi
   */
  constructor(level?: LogLevelEnum, sign?: string) {
    dotenv.config()
    this.log = new Log(level ?? LogLevelEnum.LOG_LEVEL_INFO, sign)
  }

  /**
   * 获取日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @protected
   */
  protected getLogger(loggerName: string): DefaultLogger {
    return this.log.getLogger(loggerName)
  }
}

export default LogFactory
