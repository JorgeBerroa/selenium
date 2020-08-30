var selenium = require("selenium-webdriver");

var capabilities = selenium.Capabilities.chrome();

capabilities.set("chromeOptions", {
  args: ["--headless", "--no-sandbox", "window-size=1024,768", "--disable-gpu"],
});

this.driver = new selenium.Builder()
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
