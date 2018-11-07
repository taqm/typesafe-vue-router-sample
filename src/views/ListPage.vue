<template>
  <div>
    <h1>ListPage</h1>
    <h4>keyword = {{keyword}}</h4>
    <ul>
      <li v-for="id in list" :key="id" @click="onSelect(id)">
        {{id}} について
      </li>
    </ul>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
import { ListOption, RouteNames } from '../router/route.types';

export default Vue.extend({
  data() {
    return {
      list: ['AAAAA', 'BBBBB', 'CCCCC'],
    };
  },
  computed: {
    keyword() {
      const option: ListOption = this.$route as any;
      return option.query.keyword;
    },
  },
  methods: {
    onSelect(id: string) {
      this.$router.pushTo(RouteNames.DETAIL, {
        params: {
          id,
        },
      });
    },
  }
});
</script>
