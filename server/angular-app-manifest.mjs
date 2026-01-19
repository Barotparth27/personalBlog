
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://barotparth27.github.io/personalBlog/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/personalBlog"
  },
  {
    "renderMode": 2,
    "route": "/personalBlog/about"
  },
  {
    "renderMode": 2,
    "route": "/personalBlog/projects"
  },
  {
    "renderMode": 2,
    "route": "/personalBlog/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/personalBlog",
    "route": "/personalBlog/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2270, hash: '2d498da0f241143624534d7545a666f453d9370bfad1861d270581d8c65be37f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2097, hash: 'd8dab99d1c00fe25279282313b0630e76992a114342edbfc670fc01d6f03cf6a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38544, hash: '0b17d0efb53fe46cfb5144bf1db723ec3696d7674eac18d1c47d35bb45732d58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22889, hash: '6c9a4ee59ae8787aa9652237234592b234149c232574dff4fe9279ee256209ae', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22895, hash: 'a497f5f655094bcc70ac61f81aec2e1bab0cefc35f0e1c57d13f5bf79192568c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 24753, hash: '0e4b4c740c1e8e99fc564472dfa61aebe58404966e9d70de2cb69ebffd716fd2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-S4BNNVPJ.css': {size: 3966, hash: 'uEtGfee/Lks', text: () => import('./assets-chunks/styles-S4BNNVPJ_css.mjs').then(m => m.default)}
  },
};
