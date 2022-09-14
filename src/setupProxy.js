const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/production",
    createProxyMiddleware({
      target: "https://lfg2zm2n4d.execute-api.us-west-2.amazonaws.com",
      changeOrigin: true,
    })
  );
};
