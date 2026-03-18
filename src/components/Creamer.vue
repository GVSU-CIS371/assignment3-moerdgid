<template>
  <div
    class="froth"
    :class="{ noSyrup: !hasSyrup }"
    :style="{ backgroundColor: creamer.color }"
  >
    <div
      v-for="n in 5"
      :key="n"
      class="foam"
      :style="{ backgroundColor: creamer.color }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { CreamerType } from "../stores/beverage";

defineProps<{
  creamer: CreamerType;
  hasSyrup: boolean;
}>();
</script>

<style lang="scss" scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  animation: pour-tea 2s 2s forwards;
  border-top: 2px solid rgba(0, 0, 0, 0.08);
}

.noSyrup {
  margin-bottom: 0;
}

.foam {
  display: block;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
  opacity: 0.95;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.foam:nth-child(1) {
  top: 0px;
  left: -3px;
}

.foam:nth-child(2) {
  top: 0px;
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  top: 3px;
  left: 30px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  border-radius: 45px;
  top: 5px;
  right: -2px;
}

.foam:nth-child(5) {
  top: 2px;
  right: 10px;
}
</style>