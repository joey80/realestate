const createProxyMiddleware = require('http-proxy-middleware');

const rewriteFn = function (path, req) {
  const id = process.env.REACT_APP_ZILLOW_ZWSID;
  const { address, citystatezip } = req.query;
  return `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${id}&address=${address}&citystatezip=${citystatezip}`;
};

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://www.zillow.com',
      changeOrigin: true,
      pathRewrite: rewriteFn,
    })
  );
};
