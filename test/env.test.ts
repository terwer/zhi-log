import { describe, it } from "vitest"
import EnvUtil from "zhi-env"
import { EnvConstants } from "zhi-env"
import { LogConstants } from "~/src/logConstants"

describe("test env", () => {
  it("test envUtil env", () => {
    const envUtil = new EnvUtil(import.meta.env)

    console.log(envUtil.getEnv(EnvConstants.VITE_DEBUG_MODE_KEY))
    console.log(envUtil.getEnv(LogConstants.LOG_LEVEL_KEY))
    console.log(envUtil.getEnv(LogConstants.LOG_PREFIX_KEY))
    console.log(envUtil.isDev())
    console.log(envUtil.isNodeDev())
  })
})
