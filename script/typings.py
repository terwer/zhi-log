# Copyright (c) 2022 Terwer Authors. All Rights Reserved.
# @author terwer on 2023/3/7
# ========================================================

import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    scriptutils.mkdir("./temp")
    scriptutils.mkdir("./etc")
    scriptutils.mkdir("./doc")
    scriptutils.mkdir("./typings")

    # os.system("api-extractor run --local --diagnostics")
    os.system("api-extractor run --local")
    os.system("api-documenter markdown -i temp -o doc")
    print("compile finished.")
