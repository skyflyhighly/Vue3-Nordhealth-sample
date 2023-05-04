<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store";
import validate from "../utils/validation.ts";

const store = useUserStore();
const router = useRouter();

const state = reactive({
  email: "",
  password: "",
  isError: false,
  errorMessage: "",
});

const handleSignIn = () => {
  const { isError, errorMessage } = validate(state.email, state.password);

  if (isError) {
    state.isError = isError;
    state.errorMessage = errorMessage;
  } else {
    state.isError = false;
    state.errorMessage = "";
    store.$patch({ currentEmail: state.email });
    router.push("/dashboard");
  }
};
</script>

<template>
  <section class="n-grid-3 n-container-m n-margin-i-auto n-margin-bs-xxl">
    <nord-notification-group v-if="state.isError">
      <nord-notification
        :dismiss="
          () => {
            state.isError = false;
          }
        "
      >
        <h2>Error</h2>
        <p>{{ state.errorMessage }}</p>
      </nord-notification>
    </nord-notification-group>
    <section />
    <section>
      <nord-card>
        <nord-stack direction="vertical" gap="m">
          <nord-header>
            <h2 class="text-center">Sign in</h2>
          </nord-header>
          <nord-input
            id="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            :value="state.email"
            @input="(event) => (state.email = event.target.value)"
            required
            expand
          />
          <nord-input
            id="password"
            label="Password"
            type="password"
            placeholder="∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙"
            :value="state.password"
            @input="(event) => (state.password = event.target.value)"
            required
            expand
          />
          <nord-button variant="primary" expand @click="handleSignIn"
            >Sign In</nord-button
          >
        </nord-stack>
      </nord-card>
      <nord-card>
        <p class="n-padding-is-xxl">No account? <a href="/">Create one</a></p>
      </nord-card>
    </section>
  </section>
</template>
