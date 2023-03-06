import { describe, it } from "vitest"
import LogFactory from "~/src/log"

describe("test log", () => {
  it("test default log", function () {
    const logFactory = new LogFactory()
    const logger = logFactory.getLogger("test")
    logger.debug("This is debug log")
    logger.info("This is info log")
    logger.error("This is error log")
  })

  it("test custom log", function () {
    const logFactory = new LogFactory("DEBUG")
    const logger = logFactory.getLogger("test")
    logger.debug("This is debug log")
    logger.info("This is info log")
    logger.error("This is error log")
  })
})
