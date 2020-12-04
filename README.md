# MarianaDeSanJuanLiconaAguilar_09_12012020
**How to run the App localy**:

*clone the project*
`$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-EN.git`

*go to the cloned repo*
`$ cd Billed-app-EN`

*install npm packages (described in package.json)*
`$ npm install`

*install live-server to run a local server*
`$ npm install -g live-server`

*If you have a npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules : 1)Give admin permissions to your computer user. 2) run this command:
`$ sudo chown -R $USER /usr/local/lib/node_modules` 

*Enter your password and be happy.

*launch the App*
`$ live-server`

*then go to :*
`http://127.0.0.1:8080/`


**How to run all tests with Jest:**

`$ npm run test`

**How to run a single test:**

*install jest-cli*

`$npm i -g jest-cli`

*then*

`$jest src/__tests__/your_test_file.js`

**How to see test coverage:**

`http://127.0.0.1:8080/coverage/lcov-report/`