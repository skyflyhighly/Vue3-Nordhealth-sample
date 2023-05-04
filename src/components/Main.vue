<script setup>
import { useMainStore } from "../store";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const store = useMainStore();
const router = useRouter();

const handleSignOut = () => {
  store.$patch({ currentEmail: "" });
  router.push("/");
};

onMounted(() => {
  if (store.currentEmail === "") router.push("/");
});
</script>

<template>
  <!-- eslint-disable -->
  <nord-layout class="n-reset">
    <nord-navigation slot="nav">
      <nord-button slot="header" expand>
        <nord-avatar slot="start" name="Nordhealth" variant="square"
          >N</nord-avatar
        >
        Nordhealth
        <nord-icon
          slot="end"
          class="n-margin-i-s"
          name="interface-dropdown-small"
        ></nord-icon>
      </nord-button>

      <nord-dropdown expand slot="footer">
        <nord-button slot="toggle" expand>
          <nord-avatar
            slot="start"
            aria-hidden="true"
            :name="store.currentEmail"
          ></nord-avatar>
          {{ store.currentEmail }}
        </nord-button>
        <nord-dropdown-item @click="handleSignOut">
          Sign out
          <nord-icon slot="end" name="interface-logout"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
    </nord-navigation>
    <nord-header slot="header">
      <h1 class="n-typescale-l">Dashboard</h1>
    </nord-header>
    <nord-stack gap="l">
      <nord-card>
        <h2 slot="header">Signin Successful!</h2>
        <nord-banner variant="success">
          <nord-stack direction="vertical" gap="s">
            <p>Welcome, {{ store.currentEmail }}</p>
            <p>Today is {{ new Date().toUTCString() }}</p>
          </nord-stack>
        </nord-banner>
      </nord-card>
    </nord-stack>
  </nord-layout>
  <nord-command-menu></nord-command-menu>
</template>
