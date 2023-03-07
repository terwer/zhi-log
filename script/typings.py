# Copyright (c) 2022 Terwer Authors. All Rights Reserved.
# @author terwer on 2023/3/7
# ========================================================

import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    scriptutils.mkdir("./etc")
    scriptutils.mkdir("./typings")
    os.system("tsc -p .")
    # os.system("api-extractor run --local --diagnostics")
    os.system("api-extractor run --local")
    os.system("pnpm prettier")
    os.system("pnpm lint")
    os.system("rm ./src/*.d.ts")
    os.system("rm ./src/*.map")
    os.system("rm ./src/*.js")
    print("compile finished.")
