<template>
  <div>
    <div class="Stockfish">Stockfish</div>
    <div id="board"></div>
  </div>
</template>

<script>
import { init } from "../../utils/stockfishjs-test";
export default {
  name: "Stockfish",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initMounted();
  },
  methods: {
    initMounted(fen) {
      init()
      // var wasmSupported = typeof WebAssembly === 'object' && WebAssembly.validate(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
      // stockfish.onmessage = function(event) {
      //   //NOTE: Web Workers wrap the response in an object.
      //   console.log(event.data ? event.data : event);
      // };
      // stockfish.postMessage("go depth 15");
    },
  },
};
</script>
