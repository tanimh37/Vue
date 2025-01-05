<template>
  <div>
    <button>Click Here</button>
    <h1 ref="h1cont"></h1>
  </div>
  <div>
    <hr>
    <p ref="msg">Today is first Sunday of Current Year</p>
    <button @click="copyPaste">Click Here</button>
    <h1 ref="msgShow">.................</h1>
  </div>
</template>

<script>
export default {
  methods: {
    showData() {
      this.refs.h1cont.innerHTML = "Hello Bangladeash";
    },

    copyPaste(){

    }
  },
};
</script>

<style></style>
