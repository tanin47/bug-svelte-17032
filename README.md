1. `fake-component` is a fake component that emulates a published NPM package
2. `test-project` is a project that depends on `fake-component`. Notice `package.json` contains `"fake-component": "file:../fake-component",`

To reproduce the bug:

Switch to `fake-component`:

1. Run `npm install`
2. Run `npm run build`
3. Open `./test/index.html`. You should see that the FakeComponent is rendered successfully.

Switch to `test-project`:

1. Run `npm install`
2. Run `./node_modules/.bin/rollup -c`
3. Open `./test/index.html`. You will see that the component isn't rendered with the below error:

```
main-rollup.js:4904 Uncaught TypeError: Cannot read properties of undefined (reading 'call')
    at get_first_child (main-rollup.js:4904:29)
    at main-rollup.js:8147:46
    at FakeComponent (main-rollup.js:9458:18)
    at App (main-rollup.js:9492:3)
    at main-rollup.js:3836:18
    at main-rollup.js:1794:42
    at update_reaction$1 (main-rollup.js:2626:17)
    at update_effect$1 (main-rollup.js:2798:19)
    at create_effect$1 (main-rollup.js:3033:5)
    at branch$1 (main-rollup.js:3155:10)
```
