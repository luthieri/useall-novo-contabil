const chromedriver = require('chromedriver');
const path = require('path');
const downloadsPath = path.resolve(__dirname, './Testes\\Downloads');

module.exports = {
  src_folders: 'Testes',
  page_objects_path: 'page_objects',
  globals_path: "globals.js",
  
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        accpetSslCerts: true,
        chromeOptions: {
            args: ['start-maximized', 'no-sandbox', 'disable-gpu']
            // 'window-position=-1500,0'
            //'window-size=1920,1080', 
        },
      },
      custom_commands_path: [
        "node_modules/@useall/usealltestframework/js/coreCommands",
        "node_modules/@useall/usealltestframework/js/msgCommands"
    ],
      screenshots: {
          enabled: false,
          path: 'report/screenshots'
      }
    }
  }
};
