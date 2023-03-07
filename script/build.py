# Copyright (c) 2022 Terwer Authors. All Rights Reserved.
# @author terwer on 2023/3/7
# ========================================================

import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    scriptutils.rm_folder("./lib")
    os.system("pnpm prettier")
    os.system("pnpm lint")
    os.system("vite build")
    print("build finished.")
