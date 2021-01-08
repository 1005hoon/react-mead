const path = require("path");

module.exports = {
  // 어떤 파일을 읽어오는지 설정
  entry: "./src/app.js",
  // output
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  // babel 사용하도록 설정
  module: {
    rules: [
      {
        loader: "babel-loader",
        // .js로 끝나는 파일들을 babel을 사용하도록 설정
        test: /\.js/,
        // node module의 경우 이미 다 설정이 완료되었으니 바벨 실행시 제외후 실행시키도록 명령
        exclude: /node_modules/,
      },
      {
        // .css로 끝나는 모든 파일 검색
        test: /\.css$/,
        // loader를 여러개 사용하는 경우 use를 쓴다
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
