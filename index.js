require("chromedriver");
var webdriver = require("selenium-webdriver");
var capabilities = webdriver.Capabilities.chrome();

capabilities.set("chromeOptions", {
  args: ["--no-sandbox","--disable-dev-shm-usage"],
});

var driver = new webdriver.Builder()
  .forBrowser("chrome")
  .withCapabilities(capabilities)
  .build();

try {
  getGoogle();
} catch (err) {
  console.log(err);
}

async function getGoogle() {
  try {
    await driver.get("https://google.com");
    await driver.quit();
  } catch (error) {
    console.log(error);
  }
}
