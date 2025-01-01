<template>
  <div>
    <Button @click="callData">Click here</Button>
    <h1 v-if="mydata"><pre>{{ mydata }}</pre></h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      mydata: null,
    };
  },
  methods: {
    async callData() {
      let response = await axios.get("src/assets/myData.json");
      this.mydata = response;
    },
  },
};
</script>

<style>

</style>
