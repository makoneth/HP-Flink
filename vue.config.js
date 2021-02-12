module.exports = {
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
      proxy: "http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234",
    },
  },
};
