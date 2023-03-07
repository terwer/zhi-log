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

import loglevel, { Logger } from "loglevel"
import prefix from "loglevel-plugin-prefix"
import LogLevelEnum from "~/src/logConstants"

/**
 * 日志工具类
 *
 * @author terwer
 * @since 1.0.0
 */
class Log {
  private consoleLogger = "console"

  stringToEnumValue = <T extends Record<string, string>, K extends keyof T>(
    enumObj: T,
    value: string
  ): T[keyof T] | undefined =>
    enumObj[
      Object.keys(enumObj).filter(
        (k) => enumObj[k as K].toString() === value
      )[0] as keyof typeof enumObj
    ]

  constructor(level: LogLevelEnum, sign?: string) {
    // polyfill due to https://github.com/vitejs/vite/issues/7385
    const chalk = {
      gray: (src: any): string => {
        return src.toString()
      },
      green: (src: any): string => {
        return src.toString()
      },
      yellow: (src: any): string => {
        return src.toString()
      },
      red: (src: any): string => {
        return src.toString()
      },
    }

    prefix.reg(loglevel)
    let customLevel
    if (level) {
      customLevel = level
    } else {
      const envLevel = process.env.LOG_LEVEL
        ? this.stringToEnumValue(
            LogLevelEnum,
            process.env.LOG_LEVEL.toUpperCase()
          )
        : LogLevelEnum.LOG_LEVEL_INFO
      if (!envLevel) {
        console.warn(
          "[zhi-log] LOG_LEVEL is invalid in you .env file.Must be either debug, info, warn or error, fallback to default info level"
        )
      }
      customLevel = envLevel ?? LogLevelEnum.LOG_LEVEL_INFO
    }
    loglevel.setLevel(customLevel)

    prefix.apply(loglevel, {
      format(level, name, timestamp) {
        let defaultSign = sign ?? process.env.DEFAULT_LOGGER ?? "zhi"
        const strarr = ["[" + defaultSign + "]"]
        strarr.push(
          chalk.gray("[") + chalk.green(timestamp).toString() + chalk.gray("]")
        )

        switch (level) {
          case LogLevelEnum.LOG_LEVEL_DEBUG:
            strarr.push(chalk.gray(level.toUpperCase().toString()))
            break
          case LogLevelEnum.LOG_LEVEL_INFO:
            strarr.push(chalk.green(level.toUpperCase().toString()))
            break
          case LogLevelEnum.LOG_LEVEL_WARN:
            strarr.push(chalk.yellow(level.toUpperCase().toString()))
            break
          case LogLevelEnum.LOG_LEVEL_ERROR:
            strarr.push(chalk.red(level.toUpperCase().toString()))
            break
        }

        strarr.push(chalk.green(name).toString())
        strarr.push(chalk.gray(":"))

        return strarr.join(" ")
      },
    })
  }

  /**
   * 获取日志记录器
   *
   * @param loggerName 日志记录器，默认为 console
   * @author terwer
   * @since 1.0.0
   */
  public getLogger = (loggerName?: string): Logger =>
    loglevel.getLogger(loggerName ?? this.consoleLogger)
}

export default Log
