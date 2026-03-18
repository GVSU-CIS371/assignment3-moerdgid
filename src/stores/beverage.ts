import { ref, Ref } from "vue";

interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}

const temps: Ref<string[]> = ref(["Hot", "Cold"]);

const bases: Ref<BaseBeverageType[]> = ref([
  {
    id: "b1",
    name: "Coffee",
    color: "#6F4E37",
  },
  {
    id: "b2",
    name: "Green Tea",
    color: "#A8C686",
  },
  {
    id: "b3",
    name: "Black Tea",
    color: "#8B4513",
  },
]);

const creamers: Ref<CreamerType[]> = ref([
  {
    id: "c1",
    name: "No Creamer",
    color: "transparent",
  },
  {
    id: "c2",
    name: "Milk",
    color: "#ffffff",
  },
  {
    id: "c3",
    name: "Cream",
    color: "#ffd27f",
  },
  {
    id: "c4",
    name: "Half & Half",
    color: "#fff2a8",
  },
]);

const syrups: Ref<SyrupType[]> = ref([
  {
    id: "s1",
    name: "No Syrup",
    color: "transparent",
  },
  {
    id: "s2",
    name: "Vanilla",
    color: "#FFE4B5",
  },
  {
    id: "s3",
    name: "Caramel",
    color: "#DAA520",
  },
  {
    id: "s4",
    name: "Hazelnut",
    color: "#8B5A2B",
  },
]);

const currentTemp = ref(temps.value[1]);
const currentBase = ref<BaseBeverageType>(bases.value[0]);
const currentCreamer = ref<CreamerType>(creamers.value[0]);
const currentSyrup = ref<SyrupType>(syrups.value[0]);

export type { BaseBeverageType, CreamerType, SyrupType };
export {
  temps,
  bases,
  creamers,
  syrups,
  currentTemp,
  currentBase,
  currentCreamer,
  currentSyrup,
};