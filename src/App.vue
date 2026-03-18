<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :base="currentBase"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
    />

    <ul>
      <li>
        <strong>Temperature</strong>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <strong>Base Beverage</strong>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="base.id"
              :value="base"
              v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>

      <li>
        <strong>Syrup</strong>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>

      <li>
        <strong>Creamer</strong>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="creamer.id"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import {
  temps,
  bases,
  creamers,
  syrups,
  currentTemp,
  currentBase,
  currentCreamer,
  currentSyrup,
} from "./stores/beverage";
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  margin: 0;
}

#app {
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

ul {
  list-style: none;
  margin-top: 20px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 12px;
  width: 320px;
}

li {
  margin-bottom: 16px;
}

li:last-child {
  margin-bottom: 0;
}

strong {
  display: block;
  margin-bottom: 8px;
}

label {
  display: block;
  margin-bottom: 6px;
  cursor: pointer;
}
</style>