# react-workspace
Простой воркспейс для старта разработки реакт приложения.

Чтобы воспользоваться готовым workspace необходимо склонировать проект и выполнить
```shell 
npm install

npm run start
```

Если вы хотите построить воркспейс самостоятельно, проделав руками все шаги, следуйте инструкциям:

Создать пустую папку и в ней инициализировать npm проект
```shell
npm init -y
```

Установить webpack, webpack-cli
```shell
npm install --save-dev webpack webpack-cli
```

Создать пустой js файл, который будет служить точкой входа для webpack
```shell
mkdir src
cd src
touch index.js
```

Настроить в package.json скрипты (production, development)
```js
"scripts": {
  "start": "webpack --mode development",
  "build": "webpack --mode production"
}
```
Установить библиотеки react, react-dom
```shell
npm install --save react react-dom
```

Установить babel и пресеты для реакта
```shell
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
```

Создать webpack.config.js
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }          
        ]
    }
}
```
Создать .babelrc для настройки babel
```js
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

Создать корневой index.html файл в папке src
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Application</title>    
</head>

<body>
      <div id="root"></div>
</body>

</html>
```

Установить html-webpack-plugin
```shell
npm install --save-dev html-webpack-plugin
```

Установить webpack-dev-server
```shell
npm install --save-dev webpack-dev-server
```

Изменить скрипт в package.json
```js
"start": "webpack-dev-server --mode development --open --hot"
```

Установить less и лоадеры для работы с css и less
```shell
npm install --save-dev style-loader css-loader less-loader less
```

Создать файл src/styles.less с содержимым 
```css
body {
    background: white;
    text-align: center;

    span {
        font-size: 50px;
    }
}


```

Поменять webpack.config.js (настроить плагины и лоадеры)
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.less', '.js', '.jsx']
    },
    plugins: [htmlPlugin]
};
```

Пример Hello world приложения на реакт. Содержимое файла src/index.js
```js
import React from "react";
import ReactDOM from "react-dom";

import "./styles";

class HelloWorld extends React.Component {
    render () {
        return <span>Hello, world!</span>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
```

UPDATE: Для того, чтобы в es6 классах можно было писать методы через стрелочные функции необходимо установить плагин для бабеля
```shell
npm install --save-dev babel-plugin-transform-class-properties
```

И обновить файл с настройками .babelrc
```js
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": ["transform-class-properties"]
}
```

После того, как эти шаги были выполнены, необходимо выполнить команду
```shell
npm run start
```
