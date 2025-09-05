module.exports = {
  rules: {
    off: "off",
  },
  // ...其他配置
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 启用JSX解析
    },
    sourceType: "module", // 支持 ES 模块
    ecmaVersion: 2020,
  },
  plugins: [
    // 如果需要可以添加相关插件
    // "react"
  ],
};
