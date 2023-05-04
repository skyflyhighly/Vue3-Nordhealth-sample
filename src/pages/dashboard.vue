<script setup>
import Main from "../components/Main.vue";

defineProps({
  email: String,
});
</script>

<template>
  <Main :email="email" />
</template>
