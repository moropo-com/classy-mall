const {
  sleep,
  msleep,
  imagePrepend,
  tapElementByXPathWait,
  tapElementByXPathAndSendText,
  tapElementByXPathAndSendTextWait,
  waitForElement,
  takeScreenshot,
} = require("./commonFunctions");

// CHANGE ANY OF THE BELOW TO FIT YOUR TEST CASES
var wd = require("wd");
var os = require("os");
var driver = wd.promiseChainRemote({
  host: "localhost",
  port: 4723,
});

var assert = require("assert");

// SCREENSHOT_PATH is set on AWS device farm, and should not be set locally
// By performing this check, we can run the tests locally as well as on AWS
const capabilities =
  process.env && process.env.SCREENSHOT_PATH
    ? defaultAppiumCapabilities.awsDeviceFarm.android
    : {
        appPackage: "na.are.arenaapp",
        appActivity: ".MainActivity",
        ...defaultAppiumCapabilities.android,
      };

const handleButtonPress = async function () {
  await tapElementByXPathWait({ driver, elementId: "shop-list-button" });
  await takeScreenshot({
    driver,
    sleepBefore: 1,
    sleepAfter: 0.5,
    screenshotFilename: "after-shop-button-pressed",
    sleepBefore: 1,
  });
};

describe("Simple App Flow", function () {
  before(function () {
    console.log("***** TEST RUN STARTING FOR ANDROID *****");
    const driverInit = driver.init(capabilities);
    return driverInit;
  });

  it("Can press the Shop List button", async function () {
    await handleButtonPress();
  });

  after(function () {
    console.log("***** TEST RUN ENDING FOR ANDROID *****");
    driver.quit();
  });
});
