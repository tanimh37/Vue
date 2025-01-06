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
  <div>
    <form action="">
      <input ref="inp1" @input = "inputShow" placeholder="Write here.........." >
    </form>
    <h1 ref="val1"></h1>
  </div>
</template>

<script>
export default {
  methods: {
    showData() {
      this.refs.h1cont.innerHTML = "Hello Bangladeash";
    },

    copyPaste(){
this.$refs.nameShow.innerHTML = this.$refs.msg.innerHTML;
    },

    inputShow(){
      this.$refs.nameShow.innerHTML = this.$refs.fullname.innerHTML;
    }
  },
};
</script>

<style></style>
