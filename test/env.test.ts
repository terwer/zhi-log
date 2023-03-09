import { describe, it } from "vitest"
import EnvUtil from "zhi-env"
import { EnvConstants } from "zhi-env"

describe("test env", () => {
  it("test envUtil env", () => {
    const envUtil = new EnvUtil(import.meta.env)

    console.log(envUtil.getEnv(EnvConstants.VITE_DEBUG_MODE_KEY))
    console.log(envUtil.getEnv("VITE_LOG_LEVEL"))
    console.log(envUtil.getEnv("VITE_DEFAULT_LOGGER"))
    console.log(envUtil.isDev())
    console.log(envUtil.isNodeDev())
  })
})
