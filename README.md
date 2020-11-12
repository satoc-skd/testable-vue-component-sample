# SampleProject

## 開発環境
Node.js v14.15.0

## ToDo
最新版（2020.11.11時点ではv1.1.1）のVue Test Utilsでは、以下のメソッドを使うと警告が飛んできます。
- wrapper.setMethods()
- wrapper.find()

出典
- https://vue-test-utils.vuejs.org/ja/api/wrapper/setMethods.html
- https://vue-test-utils.vuejs.org/ja/api/wrapper/find.html

躓き的な要因となりうる為、警告が出ない方法に適宜置換していきます。


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
