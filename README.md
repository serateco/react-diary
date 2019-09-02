## Create a new react project

```bash
$ npx create-react-app project-name
```

## after coding ended ,add your homepage to package.json 
```bash
//...
"homepage":"http://username.github.io/project-name",

```

### Add scripts to package.json 
```bash
"scripts":{
//…
"predeploy":"npm run build",
"deploy": "gh-pages -d build"
}
```

## Add gh-pages
```bash
$ yarn add --dev gh-pages
//if on remote error 
$ git remote add origin https://github.com/username/project-name.git
```


## Project build and deploy
```bash
$ yarn build
$ yarn run deploy //or npm run deploy
```

## Customize webpack configuration

More info:[Add Markdown](https://intoli.com/blog/webpack-markdown-setup/)
More info:[Row](https://www.npmjs.com/package/raw.macro)
```bash
$ npm run ejext
yarn add -D markdown-loader html-loader style-loader css-loader highlight.js
// webpack.config.js
const marked = require("marked");
const renderer = new marked.Renderer();
 
return {
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            }]
    }
}

```

