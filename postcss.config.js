module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转换的单位
      viewportWidth: 3600, // 设计稿宽度
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 指定转换那些属性，*表示全部
      viewportUnit: 'rem', // 希望使用的视口单位
      fontViewportUnit: 'rem', // 字体使用的视口单位
      selectorBlackList: [], // 要忽略的选择器
      minPixelValue: 1, // 最小的转换数值
      mediaQuery: false, // 是否在媒体查询中也转换px
      replace: true, // 是否直接更换属性值
      exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或者某些特定文件
    },
  },
};
