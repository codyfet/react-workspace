# react-workspace
Простой воркспейс для старта разработки реакт приложения.

Чтобы воспользоваться готовым workspace необходимо склонировать проект и выполнить
```
npm install

npm run start
```

Если вы хотите построить воркспейс самостоятельно, проделав руками все шаги, следуйте инструкциям:

Создать пустую папку и в ней инициализировать npm проект
```
npm init -y
```

Установить webpack, webpack-cli
```
npm install --save-dev webpack webpack-cli
```

Создать пустой js файл, который будет служить точкой входа для webpack
```
mkdir src
cd src
touch index.js
```

Настроить в package.json скрипты (production, development)
```
"scripts": {
  "start": "webpack --mode development",
  "build": "webpack --mode production"
}
```
Установить библиотеки react, react-dom
```
npm install --save react react-dom
```

Установить babel и пресеты для реакта
```
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
```

Создать webpack.config.js
```
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
```
{
    "presets": [
        "env",
        "react"
    ]
}
```

Создать корневой index.html файл в папке src
```
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
```
npm install --save-dev html-webpack-plugin
```

Установить webpack-dev-server
```
npm install --save-dev webpack-dev-server
```

Изменить скрипт в package.json
```
"start": "webpack-dev-server --mode development --open --hot"
```

Установить less и лоадеры для работы с css и less
```
npm install --save-dev style-loader css-loader less-loader less
```

Создать файл src/main.less с содержимым 
```
body {
    background: #00bcd4;
}
```

Поменять webpack.config.js (настроить плагины и лоадеры)
```
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [htmlPlugin]
}
```

Пример Hello world приложения на реакт. Содержимое файла src/index.js
```
import React from "react";
import ReactDOM from "react-dom";

import "./main.less";

class HelloWorld extends React.Component {
    render () {
        return <div>Hellow, world!</div>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
```

UPDATE: Для того, чтобы в es6 классах можно было писать методы через стрелочные функции необходимо установить плагин для бабеля
```
npm install --save-dev babel-plugin-transform-class-properties
```

И обновить файл с настройками .babelrc
```
{
    "presets": [
        "env",
        "react"
    ],
    "plugins": ["transform-class-properties"]
}
```

После того, как эти шаги были выполнены, необходимо выполнить команду
```
npm run start
```
