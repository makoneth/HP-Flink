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
      api: '',
      isStaff: '',
    }
  },
  created() {
    this.isStaff = this.$store.getters.getUserInfo.staff;
    let student = 'https://hp-api.herokuapp.com/api/characters/students';
    let staff = 'https://hp-api.herokuapp.com/api/characters';
    this.isStaff ? this.api = staff : this.api = student;
  },
}
</script>