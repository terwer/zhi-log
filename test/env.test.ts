import { describe, it } from "vitest"
import Env, { EnvConstants } from "zhi-env"
import { LogConstants } from "~/src/logConstants"

describe("test env", () => {
  it("test env fun", () => {
    const env = new Env(import.meta.env)

    console.log(env.getEnv(EnvConstants.VITE_DEBUG_MODE_KEY))
    console.log(env.getEnv(LogConstants.LOG_LEVEL_KEY))
    console.log(env.getEnv(LogConstants.LOG_PREFIX_KEY))
    console.log(env.isDev())
    console.log(env.isNodeDev())
  })
})
