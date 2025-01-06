<template>
  <div>
    <ul>
        <li v-for="x in flowers" :key="x">{{x.name}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flowers: [
        { name: "flower1", url: "a1.jpg" },
        { name: "flower2", url: "a2.jpg" },
        { name: "flower3", url: "a3.jpg" },
        { name: "flower4", url: "a4.jpg" },
      ],
    };
  },
  provide(){
    return{
        flowers:this.flowers
    }
  }
};
</script>

<style></style>
