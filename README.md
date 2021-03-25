# chess-internatinal ( 国际象棋 )

- 1. 移动版 H5，自我对弈 （√）
- 2. 人机对弈 （√）
- 3. 搭建后台服务，联网对战

[人机 AI 参考 1.](https://segmentfault.com/a/1190000009143078)
[人机 AI 参考 2.](https://jsfiddle.net/Laa0p1mh/3/)

服务器参考：项目 cankao-webchess-master

## 简易 AI 涉及算法

- 移动生成

- 局面评估 MB = Sum (Np x Vp),Np 是棋盘上这种类型的子的数目，Vp 是子的价值

- 极大极小算法

- α-β 剪枝

## How to use? ( 如何使用? )

```json
// 安装
yarn install
// 运行
yarn serve
// 打包
yarn build

yarn lint
```

> chessboard.js Depend on jQuery v3.4.1 (or higher).

## 开发须知

**README-development.md** 文件

- vue-socket.io 只能在 npm 源下载，taobao 镜像下载失败

### 走棋规则

>比赛规则： 棋盘每边 8 个方格，白先黑后，一盘右下角一定是白色，白王在白格，黑王在黑格
> king, queen, rook, bishop, knight, pawn

- 王(k)： 横竖斜都可以走，每次限制一步
- 后(q)： 横竖斜都可以走，步数不限制，但不能越子
- 车(r)： 横竖均可以走，步数不受限制
- 象(b)： 只能斜走，格数不限，不能越子
- 马(k)： 走“日”字
- 兵(p)： 只能向前，每次只能一格。第一步时可以走 2 格或者 1 格

---

### 国际象棋须知

- [FEN](https://www.xqbase.com/protocol/pgnfen2.htm) 白字大写，黑子小写
- PGN
- SAN (标准代数符号) 中传递字符串
- `王车易位`（王车易位须满足以下条件）：

* 王与要进行易位的车都未经移动。
  王与要进行易位的车之间没有其他棋子阻隔。
  王所在、经过和到达的格子皆未受到攻击（即易位时与易位后不能被照将，也不能穿越被对方控制的格子）。
  王与要进行易位的车必须位处同一横行（即不能与王前兵升变所成之车易位）。[1]
  一常见误解是王车易位的规则比以上还要严格，事实上：
  即使王之前曾被将军，但于易位时未被将军，仍可进行易位。
  车被攻击不妨碍易位。
  车可以穿越被攻击的格子（只适用于长易位）。

### 扩展阅读

- [Awesome Chess](https://github.com/hkirat/awesome-chess)
- [vue-chess](https://github.com/gustaYo/vue-chess)
- 网易的分布式游戏框架 [pomelo](https://github.com/NetEase/pomelo) 很久没更新了， [pinus](https://github.com/node-pinus/pinus)是它的 Ts 版本,目前在更新
- [moleserver 游戏服务框架](https://gitee.com/akinggw/moleserver)
- [中国象棋](https://github.com/itlwei/Chess)
- [一步一步 js 简单 AI](https://segmentfault.com/a/1190000009143078)
- [实战 Flutter 象棋从零到上架](https://blog.csdn.net/tosmart/category_10400600.html)
- [stockfish.js](https://github.com/nmrugg/stockfish.js)
- [chessground 棋盘](https://github.com/ornicar/chessground#readme)

* [局面评估](https://www.xqbase.com/computer/basic_evaluation.htm)
