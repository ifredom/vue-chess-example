# chess-internatinal ( 国际象棋 )

* 移动生成

* 局面评估

* 极大极小算法

* α-β 剪枝

## How to use? ( 如何使用? )

```json
// 安装
yarn install
yarn add @chrisoakman/chessboardjs
yarn add chess.js
// 运行
yarn serve
// 打包
yarn build

yarn lint
```

> chessboard.js 依赖于 jQuery v3.4.1 (或更高).
### 走棋规则

比赛规则： 棋盘每边8个方格，白先黑后，一盘右下角一定是白色，白王在白格，黑王在黑格

* 王： 横竖斜都可以走，每次限制一步
* 后： 横竖斜都可以走，步数不限制，但不能越子
* 车： 横竖均可以走，步数不受限制
* 象： 只能斜走，格数不限，不能越子
* 马： 走“日”字
* 兵： 只能向前，每次只能一格。第一步时可以走2格或者1格

---



### 国际象棋须知

* FEN
* PNG

### 扩展阅读

* [Awesome Chess](https://github.com/hkirat/awesome-chess)
* [vue-chess](https://github.com/gustaYo/vue-chess)
* 网易的分布式游戏框架 [pomelo](https://github.com/NetEase/pomelo) 很久没更新了， [pinus](https://github.com/node-pinus/pinus)是它的 Ts版本,目前在更新
* [moleserver 游戏服务框架](https://gitee.com/akinggw/moleserver)
* [中国象棋](https://github.com/itlwei/Chess)
* [一步一步js简单AI](https://segmentfault.com/a/1190000009143078)
* [实战 Flutter 象棋从零到上架](https://blog.csdn.net/tosmart/category_10400600.html)
* [stockfish.js](https://github.com/nmrugg/stockfish.js)
