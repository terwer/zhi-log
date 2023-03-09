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

import loglevel from "loglevel"
import prefix from "loglevel-plugin-prefix"
import LogLevelEnum from "~/src/logConstants"
import DefaultLogger from "~/src/logger"
import callsites from "callsites"
import EnvHelper from "~/src/envHelper"

/**
 * 日志工具类
 *
 * @author terwer
 * @since 1.0.0
 */
class Log {
  private consoleLogger = "console"

  constructor(level?: LogLevelEnum, sign?: string) {
    // 级别
    let customLevel = undefined
    if (level) {
      customLevel = level
    } else {
      customLevel = EnvHelper.getEnvLevel()
    }
    customLevel = customLevel ?? LogLevelEnum.LOG_LEVEL_INFO
    loglevel.setLevel(customLevel)

    // 颜色
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
    prefix.apply(loglevel, {
      format(level, name, timestamp) {
        const defaultSign = sign ?? EnvHelper.getEnvLogger() ?? "zhi"
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
  public getLogger = (loggerName?: string): DefaultLogger => {
    let loggerFrom
    // 显示优先
    if (loggerName) {
      loggerFrom = loggerName
    } else {
      const cs = callsites()
      const baseNames = <string[]>[]
      for (let i = 0; i < cs.length; i++) {
        const c = cs[i]
        const fname = c.getFileName() ?? "none"

        if (
          !fname.includes(".ts") &&
          !fname.includes(".vue") &&
          !fname.includes(".tsx")
        ) {
          continue
        }
        if (i > 5) {
          break
        }

        const baseName =
          fname + "-" + c.getLineNumber() + ":" + c.getColumnNumber()
        baseNames.push(baseName)
      }

      if (cs.length === 0) {
        loggerFrom = undefined
      } else {
        loggerFrom = baseNames.join(" -> ")
      }
    }

    loggerFrom = loggerFrom ?? this.consoleLogger
    return loglevel.getLogger(loggerFrom) as DefaultLogger
  }
}

export default Log
