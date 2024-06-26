# vite-plugin-env-switch

vite-plugin-env-switch

![截屏2023-06-20 下午8 40 39](https://github.com/PengBoUESTC/vite-plugin-env-switch/assets/57180744/d7fe11f8-4661-462f-aa7f-01006e55f55e)

**U can switch the server env by click the btns on page, and dont need to restart your server by CMD.**

## change the server env 

- vite.config.ts
```javascript
// vite config 
export default defineConfig({
  //...
  plugins: [
    envSwitchPlugin({
      wsProtocol: 'vite-hmr', // ws protocol
      envs: ['prepare', 'development', 'production'], // env vars
      wsPath: `${wsprotocol}://${host}/${base}:${port}/`, // link
      root: __dirname, // env config root path
      eventName: 'env-check'
    }),
  ]
  //...
})
```

- inject code in index.html, depend on `envs` config, there will be some buttons to trigger ws event.
- these code will be inject by `transformIndexHtml.transform`
```html
<div class="env-btn-wrapper">
  <button class="env-btn" data-env="development">dev</button>
  <button class="env-btn" data-env="prepare">pre</button>
  <button class="env-btn" data-env="production">pro</button>
</div>
```

- get a ws socket to send event to vite server

```javascript
const ws = new WebSocket('wss://xx', 'vite-hmr')
document.querySelectorAll('.env-btn').forEach(dom => {
  const { dataset } = dom
  dom.addEventListener('click', () => handleEnv(dataset.env))
})
function handleEnv(env) {
  ws.send(JSON.stringify({ type: 'custom', event: 'env-check', data: { env } }))
}
```