<template>
  <div class="chess-history-view">
    <ul class="white-history">
      <p>white</p>
      <li
        v-for="(item, index) in whiteHistory"
        :key="'item-' + index"
        v-text="item"
      ></li>
    </ul>
    <ul class="black-history">
      <p>black</p>
      <li
        v-for="(item, index) in blackHistory"
        :key="index + 'item'"
        v-text="item"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChessHistoryView",
  components: {},
  props: {
    history: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      whiteHistory: [],
      blackHistory: [],
    };
  },
  methods: {
    fileterHistory() {
      this.whiteHistory = this.history.filter((item, index) => index % 2 === 0);
      this.blackHistory = this.history.filter((item, index) => index % 2 !== 0);
    },
  },
  watch: {
    history(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.fileterHistory();
    },
  },
};
</script>

<style scoped lang="scss">
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.chess-history-view {
  display: flex;
  justify-content: flex-start;
}
.white-history {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  background-color: rosybrown;
}
.black-history {
  display: flex;
  flex-direction: column;
  background-color: burlywood;
}
</style>
