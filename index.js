require("chromedriver");
var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser("chrome").build();

try {
  driver
    .get("https://google.com")
    .then(() => {
      driver.quit();
    })
    .catch((err) => console.log(err));
} catch (err) {
  console.log(err);
}
