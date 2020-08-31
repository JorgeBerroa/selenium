require("chromedriver");
var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser("chrome").build();

try {
 getGoogle();
} catch (err) {
  console.log(err);
}



async function getGoogle(){
    await driver.get("https://google.com");
    await driver.quit();
}
