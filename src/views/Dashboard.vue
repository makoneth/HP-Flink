<template>
  <div>
    <Table class="mt-5" :api="api"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'

export default {
  name: 'Dashboard',
  components: {
    Table,
  },
  data() {
    return {
      api: 'https://hp-api.herokuapp.com/api/characters',
    }
  },
}
</script>