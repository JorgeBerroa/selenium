var webdriver = require("selenium-webdriver");
var capabilities = webdriver.Capabilities.chrome();

capabilities.set("chromeOptions", {
  args: ["--no-sandbox","--disable-gpu"],
});



try {
  getGoogle();
} catch (err) {
  console.log(err);
}

async function getGoogle() {
      let driver = await new webdriver.Builder()
  .forBrowser("chrome")
  .usingServer("http://localhost:4444/wd/hub")
  .build();
  try {

    await driver.get("https://google.com");
    await driver.quit();
  } catch (error) {
    console.log(error);
  }
}
