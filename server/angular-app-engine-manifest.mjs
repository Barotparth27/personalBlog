
export default {
  basePath: 'https://barotparth27.github.io/personalBlog',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
