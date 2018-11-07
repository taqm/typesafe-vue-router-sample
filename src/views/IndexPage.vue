<template>
  <form @submit.prevent="onSubmit">
    <input v-model="keyword" required>
    <input type="submit" value="送信">
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { RouteNames } from '@/router/route.types';

export default Vue.extend({
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    onSubmit() {
      this.$router.pushTo(RouteNames.LIST, {
        query: {
          keyword: this.keyword,
        },
      });
    },
  },
});

</script>
