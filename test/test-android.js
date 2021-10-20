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
        appPackage: "uk.appsapiens.classymall",
        appActivity: ".MainActivity",
        platformName: "android",
        fullReset: false,
        deviceName: "auto", //"emulator-5554 (11)",
        automationName: "UiAutomator2",
        // skipServerInstallation: true,
        // noSign: true,
        app: "/Users/Yusuf/Downloads/classy-mall.apk",
        resetKeyboard: true,
        unicodeKeyboard: true,
        autoGrantPermissions: true,
      };

const handleButtonPress = async function () {
  // sleepBefore: 5 minutes
  await tapElementByXPathWait({
    driver,
    elementId: "shop-list-button",
  });
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
