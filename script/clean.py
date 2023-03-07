# Copyright (c) 2022 Landray Authors. All Rights Reserved.
# @author terwer on 2023/3/8
# ========================================================
import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    scriptutils.rm_files("./src/**/*.d.ts")
    scriptutils.rm_files("./src/*.d.ts")

    scriptutils.rm_files("./src/**/*.map")
    scriptutils.rm_files("./src/*.map")

    scriptutils.rm_files("./src/**/*.js")
    scriptutils.rm_files("./src/*.js")
    print("cleaned.")