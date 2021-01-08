basic setup

```
1. load cdns
2. set the file structure
3. npm init
4. npm i -g babel-cli
5. npm i babel-preset-env babel-preset-react
6. babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

```

## Webpack

### TLDR;

다음과 같이 환경설정 하면 일단 하고픈대로 다 사용 가능

.babelrc

```JSON
{
  "presets": ["env", "react"],
  "plugins": ["transform-class-properties"]
}

```

package.json

```JSON
{
  "name": "react-mead",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "serve": "live-server public/",
    "build": "webpack",
    "dev-server": "webpack serve"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/1005hoon/react-mead.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/1005hoon/react-mead/issues"
  },
  "homepage": "https://github.com/1005hoon/react-mead#readme",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "live-server": "^1.2.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "validator": "^13.5.2",
    "webpack": "^5.11.1",
    "webpack-cli": "^4.3.1",
    "webpack-dev-server": "^3.11.1"
  }
}


```

webpack.config.js

```js
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
```

### avoid global module

일단 프로젝트를 다른 사람들과 함께 작업하거나 open source화 시키는 경우, global module을 사용하게 되면 각각 사용자마다 사용하는 모듈 버전이 다 다를 수 있고, 그렇게 되면 예기치 못한 에러가 발생할 수 있다.

그런 문제를 해결하기 위해 `npm uninstall -g ...` 를 써서 글로벌 디펜던시를 없애고, 그냥 `npm install .. ` 을 사용해서 프로젝트 패키지에 저장을 시켜준다.

그런 다음 `package.json` 에 scripts 를 지정해 우리가 사용하는 dependency를 프로그램 실행 시 사용하도록 한다.

```
"scripts": {
  "serve": "live-server public/",
  "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
}
```

이렇게 하면 npm run build를 하면 자기가 알아서 babel을 실행시켜 변경 내용을 실시간으로 저장하고, npm run serve로 라이브서버를 실행시킬 수 있다.

### 웹팩 사용하기

`npm i webpack` 을 입력해서 웹팩을 설치해주고, 다음과 같이 커맨드를 설정해주자

```
"scripts": {
  "serve": "live-server public/",
  "build": "webpack",
  "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
},
```

루트 디렉토리에 app.js를 만들고, webpack.config.js 파일을 만들어주자.

#### webpack.config.js 파일

<!-- entry와 output을 지정해주어야 함 -->

```javascript
const path = require("path");

module.exports = {
  // 어떤 파일을 읽어오는지 설정
  entry: "./src/app.js",
  // output
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};
```

이렇게 설정하고 나면, 내가 사용할 패키지들을 npm i 해서 설치 하고, src 안에 있는 app에서 import 해서 사용 가능!

그리고 react를 사용하고싶다면, webpack에서 babel도 실행을 하도록 해야하는데, 이 기능을 설정하기 위해 다음과같이 파일 설정을 바꾸어 주자
package.json

```bash
# 버전 중요함!!
{
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "live-server": "^1.2.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "validator": "^13.5.2",
    "webpack": "^5.11.1"
  },
  "devDependencies": {
    "webpack-cli": "^4.3.1"
  }
}
```

webpack.config.js

```javascript
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
    ],
  },
  devtool: "eval-source-map",
};
```

.babelrc

```json
{
  "presets": ["env", "react"]
}
```

### Webpack Dev Server

개발을 좀 더 빠르게 해보기 위해 설정하는 dev server
`npm i webpack-dev-server@2.5.1` 설치 후 script를 다음과 같이 추가해주자.

webpack.config.js

```
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
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};

```

package.json

```
{
  "name": "react-mead",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "serve": "live-server public/",
    "build": "webpack",
    "dev-server": "webpack serve"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/1005hoon/react-mead.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/1005hoon/react-mead/issues"
  },
  "homepage": "https://github.com/1005hoon/react-mead#readme",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "live-server": "^1.2.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "validator": "^13.5.2",
    "webpack": "^5.11.1",
    "webpack-cli": "^4.3.1",
    "webpack-dev-server": "^3.11.1"
  }
}

```

에라이 뭔가 겁나 많이 바뀌어서 설정 이렇게 해야 서버 돌아간다

퉤퉤
