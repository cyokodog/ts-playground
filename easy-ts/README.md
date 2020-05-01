# 手軽に始められる TypeScript の設定サンプル

型を使わないで、普通に JavaScript を書く感覚で TypeScript を利用できる設定になっています。Node.js を事前にインストールしておいてください。

## はじめ方

ターミナルを起動して、次のように入力すると TypeScript、webpack を始めとしたビルド環境が構築されます。

```
npm install
```

次のように入力すると、TypeScript によるコンパイルが監視モード（ソースコードが変更される都度コンパイルされます）で実行します。

```
npm run dev
```

別のターミナルを起動（もしくはターミナルの画面を分割）して、次のように入力すると HTTP サーバが起動します。

```
npm start
```

localhost:8080 にブラウザでアクセスすると次のように、簡単なアプリケーションが動作するようになっています。

![](./demo.gif)

## 少しづつ型になれる

`tsconfig.json`に設定された次のコンパイルオプションを少しづつ`true`に変更していき、型を利用した実装になれていきましょう。

```
"noImplicitAny": false ,
"strictNullChecks": false ,
"strictFunctionTypes": false ,
"strictBindCallApply": false ,
"strictPropertyInitialization": false ,
"noImplicitThis": false ,
```
