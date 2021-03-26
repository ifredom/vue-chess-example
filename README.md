# chessboard 国际象棋

- cm-chessboard
- chess.js



> Tips(注意)： 客户端 如果在yarn serve服务器下，会一直刷新，导致socket连接不上服务端，所以 客户端 执行 `yarn build`后，使用`http-server -p 8089`启动一个静态服务器，则可以正常连接到socket
## Frontend 客户端

- cm-chessboard
- chess.js

> how to use? (如何使用)

```json
cd Frontend

yarn install

yarn serve

yarn build
```

## Backend 客户端

- express
- websocket
- chess.js
- nodemon ( Real time refresh，实时刷新 )

> how to use? (如何使用)

```json

cd Backend

npm install

nodemon
```
### 可能遇到的问题

> 1. Importing Stockfish into App: Uncaught SyntaxError: Unexpected token '<'
>    > This is because stockfish is introduced with commonjs, which is problematic. Using script to introduce(这是因为 stockfish 使用 commonJS 方式引入导致的。使用 script 标签引入则没有问题)
