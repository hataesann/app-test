# Express Typescript Template

## 依存パッケージ

> dependencies

<table>
  <thead>
    <tr>
      <th>ライブラリ名</th>
      <th>簡単な説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cross-env</td>
      <td>npmスクリプト実行時に任意の環境変数を設定できる。</td>
    </tr>
    <tr>
      <td>express</td>
      <td>サーバサイドのフレームワーク</td>
    </tr>
    <tr>
      <td>express-async-errors</td>
      <td>Expressでasync/awaitを使用する際にtry catchを書かなくてもよしなにやってくれるようなライブラリ</td>
    </tr>
    <tr>
      <td>express-validator</td>
      <td>リクエストデータをバリデーションする機能を提供するライブラリ</td>
    </tr>
  </tbody>
</table>

<br>

> devDependencies

<table>
  <thead>
    <tr>
      <th>題</th>
      <th>ライブラリ名</th>
      <th>簡単な説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>typescript関連</td>
      <td>
        typescript</br>
        ts-node, ts-node-dev</br>
        @types/node, @types/express
      </td>
      <td>タイプスクリプト</td>
    </tr>
    <tr>
      <td>eslint関連</td>
      <td>
        eslint, eslint-plugin-import</br>
        @typescript-eslint/eslint-plugin</br>
        @typescript-eslint/parser
      </td>
      <td>静的解析検証ツール</td>
    </tr>
    <tr>
      <td>prettier関連</td>
      <td>
        prettier, eslint-config-prettier
      </td>
      <td>コードフォーマッタでソースコードの自動整形</td>
    </tr>
    <tr>
      <td>jest関連</td>
      <td>
        jest, ts-jest, supertest</br>
        @types/jest, @types/supertest
      </td>
      <td> JavaScript テスティングフレームワーク</td>
    </tr>
    <tr>
      <td>del</td>
      <td>del-cli</td>
      <td>ファイルを削除するライブラリ. ビルド時に古いファイルを削除する用途</td>
    </tr>
  </tbody>
</table>

<br>

## Script

```
// ファイルを削除
"clean": "del ./build/*",

// ビルド処理
"build": "npm run clean && tsc -p tsconfig.build.json",

// 開発時 起動
"start:dev": "cross-env NODE_ENV=development ts-node-dev src/index.ts",

// ビルドされたプログラムを起動
"start": "cross-env NODE_ENV=production node build/index.js",

// 静的解析検証ツール実行
"lint": "eslint ./src/**/*.ts",

// 静的解析検証ツールのエラー修正とコードのフォーマット
"format": "eslint ./src/**/*.ts --fix && prettier --write \"./src/**/*.{js,ts}\""

// テスト起動
"test": "jest --watch --no-cache"
```
