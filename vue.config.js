var path = require("path");

module.exports = { 
  lintOnSave: false,
  configureWebpack: config => {
    for (let i = 0; i < 4; i++) {
      let sassLoaderRule = config.module.rules.find(rule =>
        rule.test.toString().includes("scss")
      ).oneOf[i].use;
      sassLoaderRule[0].options.sourceMap = true;
      sassLoaderRule[1].options.sourceMap = true;
      sassLoaderRule[2].options.sourceMap = true;
      sassLoaderRule.splice(2, 0, {
        loader: "resolve-url-loader",
        options: { sourceMap: true }
      });
      // console.log(sassLoaderRule)
      // console.log(JSON.stringify(config))
    }
  }
};
