<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> &nbsp;
        <RouterLink to="/food">Food Item</RouterLink> &nbsp;
        <RouterLink to="/todo">ToDo</RouterLink> &nbsp;
        <RouterLink to="/ref">Page Call</RouterLink> &nbsp;
        <RouterLink to="/life">LifeCycle Hooks</RouterLink>&nbsp;
        <RouterLink to="/form">Form Inputs</RouterLink>&nbsp;
        <RouterLink to="/flowers">Flowers</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
