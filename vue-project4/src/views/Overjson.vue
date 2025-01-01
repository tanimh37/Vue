<template>
  <div>
    <Button @click="callData">Click here</Button>
    <h1 v-if="mydata"><pre>{{ mydata }}</pre></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: null,
    };
  },
  methods: {
    async callData() {
      let response = await fetch("src/assets/myData.json");
      this.mydata =  response.text();
    },
  },
};
</script>

<style>

</style>
