<template>
  <div class="chess">
    <div id="myBoard" style="width: 400px"></div>
    <div>chess页面</div>
  </div>
</template>

<script>
export default {
  components: {  },
  data() {
    return {};
  },
  mounted() {
    console.log(window);
    var board = Chessboard("myBoard");
  },
  methods: {},
};
</script>

<style lang="less" scope>
#chess-board {
  width: 400px;
}
</style>
