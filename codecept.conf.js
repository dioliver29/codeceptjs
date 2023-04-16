const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: '/*_spec.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://demoqa.com',
      show: true,
      browser: 'chromium',
      //waitForNavigation: 'networkidle0'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js"
  },
  name: 'codecept'
}