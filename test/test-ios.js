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

const appiumConfig = {
  platformName: "iOS",
  appPackage: "uk.appsapiens.classymall",
  appActivity: "host.exp.exponent.MainActivity",
  fullReset: true,
  deviceName: "iPhone 11",
  platformVersion: "15.0",
  automationName: "XCUITest",
  app: "/Users/Yusuf/Downloads/classymall.ipa",
};

const PATH_TO_BINARY = appiumConfig.app;

const DEVICE_NAME = "iPhone 11";

var wd = require("wd");
var path = require("path");
var os = require("os");
var driver = wd.promiseChainRemote({
  host: "localhost",
  port: 4723,
});

var assert = require("assert");
const asserters = require("wd/lib/asserters");
const { Asserter } = require("wd/lib/asserters");

// SCREENSHOT_PATH is set on AWS device farm, and should not be set locally
// By performing this check, we can run the tests locally as well as on AWS
const capabilities =
  process.env && process.env.SCREENSHOT_PATH
    ? {}
    : {
        platformName: "iOS",
        appPackage: "uk.appsapiens.classymall",
        appActivity: "host.exp.exponent.MainActivity",
        fullReset: true,
        deviceName: DEVICE_NAME,
        platformVersion: "15.0",
        automationName: "XCUITest",
        app: PATH_TO_BINARY,
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
    console.log("***** TEST RUN STARTING FOR IOS *****");
    const driverInit = driver.init(capabilities);
    return driverInit;
  });

  it("Can press the Shop List button", async function () {
    await handleLogin();
  });

  after(function () {
    console.log("***** TEST RUN ENDING FOR IOS *****");
    driver.quit();
  });
});
