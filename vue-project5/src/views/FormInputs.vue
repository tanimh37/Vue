<template>
  <div>
    <div ref="infoShow" id="display">....</div>
    <div>{{ fullname }}</div>
    <div>{{ gender }}</div>
    <div>{{ district }}</div>
    <div>{{ language }}</div>
    <div>{{ location }}</div>

    <form @submit.prevent="FormSubmit">
      Name: <br />
      <input type="text" v-model="fullname" name="fullname" /> <br />

      Gender: <br />
      Male: <br />
      <input type="radio" v-model="gender" name="gender" value="male" /> <br />
      Female: <br />
      <input type="radio" v-model="gender" name="gender" value="female" />
      <br />
      District: <br />
      <select name="district" v-model="district" id="">
        <option disabled selected>Select One</option>
        <option>Dhaka</option>
        <option>Sylet</option>
        <option>Khulna</option>
        <option>New Khali</option>
        <option>Faridpur</option>
      </select>
      <br />

      Interested Language: <br />
      <input type="checkbox" name="php" v-model="language" value="php" />PHP
      <br />
      <input
        type="checkbox"
        name="java"
        v-model="language"
        value="java"
      />JAVASCRIPT <br />
      <input type="checkbox" name="vue" v-model="language" value="vue" />VUE JS
      <br />
      Address: <br />
      <textarea name="location" v-model="location"></textarea> <br />
      <input type="submit" name="submit" value="SUBMIT" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      gender: "",
      district: "",
      language: [],
      location: "",
      info: "",
    };
  },
  methods: {
    FormSubmit() {
      this.info += "fullname:" + this.fullname;
      this.info += "<br>Gender:" + this.gender;
      this.info += "<br>District:" + this.district;
      this.info += "<br>language:" + this.language;
      this.info += "<br>Location:" + this.location;

      this.$refs.infoShow.innerHTML = this.info;
    },
  },
};
</script>

<style scoped>
#display {
  background-color: rgb(8, 255, 251);
}
</style>
