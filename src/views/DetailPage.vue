<template>
  <div>
    <h1>Detail</h1>
    <h4>id = {{id}}</h4>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  computed: {
    id() {
      const id: string = this.$route.params.id;
      return id;
    },
  }
});
</script>
