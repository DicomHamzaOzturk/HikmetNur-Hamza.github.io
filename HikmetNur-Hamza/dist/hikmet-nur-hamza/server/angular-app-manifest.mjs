
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9329, hash: '47f95f00b725a73ce0428f7b9f6d3bf496ba9c042fa6c250d4ab2972a8db0619', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9310, hash: 'a755a526579e2825f88f27de9411a9f57ee8f9774022ca5ea6971b5bfe65d01f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17229, hash: '1f6611f1e6015248cc4e3e2e121e2913d4381f98a9b381d8bc34e9126bc3e3ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SM4PE5QE.css': {size: 2285, hash: 'N57wm1444g8', text: () => import('./assets-chunks/styles-SM4PE5QE_css.mjs').then(m => m.default)}
  },
};
