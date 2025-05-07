const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Hamker *-*
const TARGET_URL = 'http://193.149.164.168:1808';

app.use('/', createProxyMiddleware({
  target: TARGET_URL,
  changeOrigin: true,
  ws: true,
  pathRewrite: { '^/': '/' }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy running. Forwarding requests to ${TARGET_URL}`);
});
