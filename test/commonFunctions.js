/**
 *
 *
 * This file is to be used only for functions which are common across multiple apps
 *
 * Examples include:
 *  - The sleep function
 *  - Finding the app binary
 *  - Creating the filename for a screenshot
 *  - Tapping on an element once it's visible
 *
 * Any test-specific code or functions should be added to it's relevant test file
 *
 *
 */

const fs = require("fs");
const path = require("path");
// const findUp = require("find-up");
const minimist = require("minimist");
const asserters = require("wd/lib/asserters");
const chalk = require("chalk");

// const findBinaryAtPath = (processArgv) => {
//   // SCREENSHOT_PATH is set on AWS device farm, and should not be set locally
//   // By performing this check, we can run the tests locally as well as on AWS
//   if (!process.env.SCREENSHOT_PATH) {
//     const argv = minimist(processArgv.slice(2));

//     if (!argv.BINARY_PATH) {
//       throw new Error(
//         `BINARY_PATH not provided. Please ensure you add this to the 'test-android:<app>' command in package.json scripts (e.g. --BINARY_PATH="arena-social-network-app/app-release.apk".`
//       );
//     }

//     const binaryLocation = findUp.sync(`apps/${argv.BINARY_PATH}`, {
//       type: argv.DEVICE_PLATFORM === "ios" ? "directory" : "file",
//     });
//     if (!fs.existsSync(binaryLocation)) {
//       throw new Error(
//         `App binary could not be found at ${binaryLocation}. Please ensure the path is correct.`
//       );
//     }
//     console.log(chalk.blueBright(`Using binary found at ${binaryLocation}`));
//     return binaryLocation;
//   }
//   return null;
// };

// const defaultAppiumCapabilities = {
//   awsDeviceFarm: {
//     android: {
//       automationName: "UiAutomator2",
//       autoGrantPermissions: true,
//       fullReset: true,
//       resetKeyboard: true,
//       unicodeKeyboard: true,
//     },
//     ios: {
//       automationName: "XCUITest",
//       autoGrantPermissions: true,
//       autoAcceptAlerts: true,
//       resetKeyboard: true,
//       unicodeKeyboard: true,
//       udid: "auto",
//     },
//   },
//   android: {
//     platformName: "android",
//     fullReset: false,
//     deviceName: "auto", //"emulator-5554 (11)",
//     automationName: "UiAutomator2",
//     app: findBinaryAtPath(process.argv),
//     resetKeyboard: true,
//     unicodeKeyboard: true,
//     autoGrantPermissions: true,
//   },
//   ios: {
//     platformName: "iOS",
//     fullReset: true,
//     deviceName: "iPhone 11",
//     platformVersion: "14.1",
//     automationName: "XCUITest",
//     app: findBinaryAtPath(process.argv),
//     resetKeyboard: true,
//     unicodeKeyboard: true,
//     autoGrantPermissions: true,
//     autoAcceptAlerts: true,
//   },
// };

const msleep = (n) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
};
const sleep = (n) => {
  console.log(`Sleeping for ${n} seconds`);
  msleep(n * 1000);
};

var screenshotPathSetMessageShown = false;
var imageCounter = 0;
const imagePrepend = (imageName) => {
  imageCounter = imageCounter + 1;
  const localScreenshotsPath = findUp.sync("screenshots", {
    type: "directory",
  });
  if (!localScreenshotsPath) {
    console.log(
      `Screenshots path was not found. Returned '${localScreenshotsPath}'`
    );
  }
  const SCREENSHOT_PATH =
    process.env && process.env.SCREENSHOT_PATH
      ? process.env.SCREENSHOT_PATH
      : localScreenshotsPath;
  if (screenshotPathSetMessageShown === false) {
    console.log(`Screenshot path set to ${SCREENSHOT_PATH}`);
  }
  screenshotPathSetMessageShown = true;
  const ssPath = path.join(SCREENSHOT_PATH, `${imageCounter}-${imageName}`);
  console.log(`Saving screenshot: ${ssPath}.png`);
  return ssPath;
};

const tapAtLocation = async ({ driver, x = 0, y = 0 }) => {
  await driver.touchPerform([
    { action: "press", options: { x, y } },
    { action: "release" },
  ]);
};

const tapElementByXPathWait = async ({
  elementId,
  driver,
  sleepBefore,
  sleepAfter,
  maximumWaitForDisplay = 10000,
}) => {
  if (sleepBefore && typeof sleepBefore === "number") {
    sleep(sleepBefore);
  }
  const element = await driver.waitForElementByXPath(
    elementId,
    asserters.isDisplayed,
    maximumWaitForDisplay
  );
  await element.click();
  if (sleepAfter && typeof sleepAfter === "number") {
    sleep(sleepAfter);
  }
};

const tapElementByAccessibilityIdWait = async ({
  elementId,
  driver,
  sleepBefore,
  sleepAfter,
  maximumWaitForDisplay = 10000,
}) => {
  if (sleepBefore && typeof sleepBefore === "number") {
    sleep(sleepBefore);
  }
  const element = await driver.elementByAccessibilityId(elementId);
  await element.click();
  if (sleepAfter && typeof sleepAfter === "number") {
    sleep(sleepAfter);
  }
};

const tapElementByXPath = ({ elementId, driver, sleepBefore, sleepAfter }) => {
  if (sleepBefore && typeof sleepBefore === "number") {
    sleep(sleepBefore);
  }
  const element = driver.waitForElementByXPath(elementId);
  element.click();
  if (sleepAfter && typeof sleepAfter === "number") {
    sleep(sleepAfter);
  }
};

const tapElementByXPathAndSendTextWait = async ({
  elementId,
  text = "",
  driver,
  sleepBefore,
  sleepAfter,
  maximumWaitForDisplay = 10000,
}) => {
  if (sleepBefore && typeof sleepBefore === "number") {
    sleep(sleepBefore);
  }
  const element = await driver.waitForElementByXPath(
    elementId,
    asserters.isDisplayed,
    maximumWaitForDisplay
  );
  await element.click();
  await element.sendKeys(text);
  if (sleepAfter && typeof sleepAfter === "number") {
    sleep(sleepAfter);
  }
};

const tapElementByXPathAndSendText = ({
  elementId,
  text = "",
  driver,
  sleepBefore,
  sleepAfter,
}) => {
  if (sleepBefore && typeof sleepBefore === "number") {
    sleep(sleepBefore);
  }
  const element = driver.waitForElementByXPath(elementId);
  element.click();
  element.sendKeys(text);
  if (sleepAfter && typeof sleepAfter === "number") {
    sleep(sleepAfter);
  }
};

const tapElementByResourceIdWait = async ({
  resourceId,
  driver,
  sleepBefore,
  sleepAfter,
}) => {
  if (sleepBefore && typeof sleepBefore === "number") {
    sleep(sleepBefore);
  }

  const element = await driver.elements("id", resourceId);
  if (element && element[0]) {
    element[0].click();
  } else {
    const error = `Could not tap element by resource id "${resourceId}"`;
    console.log(`${error}.  Available elements:`);
    console.log(element);
    throw new Error(error);
  }

  if (sleepAfter && typeof sleepAfter === "number") {
    sleep(sleepAfter);
  }
};

const getDeviceInfo = async ({ driver }) => {
  const devInfo = await driver.execute("mobile:deviceInfo", {
    property: "manufacturer",
  });
  return devInfo;
};

const waitForElement = async ({
  driver,
  elementId,
  sleepBefore,
  maximumWaitForDisplay = 10000,
}) => {
  if (sleepBefore && typeof sleepBefore === "number") {
    sleep(sleepBefore);
  }
  const element = await driver.waitForElementByXPath(
    elementId,
    asserters.isDisplayed,
    maximumWaitForDisplay
  );
  return element;
};

const takeScreenshot = async ({
  driver,
  sleepBefore,
  sleepAfter,
  screenshotFilename = Math.random().toFixed(5),
}) => {
  if (sleepBefore) {
    sleep(sleepBefore);
  }
  await driver.saveScreenshot(imagePrepend(screenshotFilename));
  if (sleepAfter) {
    sleep(sleepAfter);
  }
};

module.exports = {
  sleep,
  msleep,
  imagePrepend,
  getDeviceInfo,
  tapAtLocation,
  tapElementByAccessibilityIdWait,
  tapElementByXPathWait,
  tapElementByXPath,
  tapElementByXPathAndSendTextWait,
  tapElementByXPathAndSendText,
  tapElementByResourceIdWait,
  waitForElement,
  takeScreenshot,
};
