<template>
  <div class="dashboard">
    <b-input-group size="md" class="mb-4">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input v-model="filter" type="search" placeholder="Filter by any user info"></b-form-input>
    </b-input-group>
    <b-table
      id="dashboardTable"
      :filter="filter"
      :tbody-transition-props="transProps"
      primary-key="image"
      :busy="isBusy"
      show-empty 
      empty-text="No hay registros para mostrar" 
      striped hover 
      responsive
      selectable
      :items="items" 
      :fields="fields"
      @row-selected="onRowSelected">
      <template #table-busy>
        <div class="text-center text-info my-2">
          <b-spinner type="grow" variant="info" class="align-middle mr-3"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(image)="row">
        <span class="pointer">
          <b-avatar variant="info" :src="row.item.image" class="mr-3"></b-avatar>
        </span>
      </template>
    </b-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Dashboard',
  props: {
      api: {
        type: String,
        required: true
      },
    },
  data() {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      isBusy: true,
      filter: '',
      fields: [
        {
          key: 'image',
          label: '',
          sortable: false
        },
        {
          key: 'name',
          label: 'Name',
          sortable: true
        },
        {
          key: 'house',
          label: 'House',
          sortable: true,
        },
      ],
      items: [],
      selected: [],
    }
  },
  mounted() {
    this.fetchUsers();
    this.selected = [];
  },
  computed:{
    ...mapState(['getUsersList']),
  },
  methods: {
    ...mapMutations(['setUsersList']),
    fetchUsers () {
      axios.get(this.api)
        .then( response => {
          this.setUsersList({value: response.data});
          this.items = this.$store.getters.getUsersList
          this.isBusy = false
        })
        .catch( error => {
          console.log(error)
        });
    },
    onRowSelected(items) {
      this.selected = items || [];
      console.log(this.selected[0].name)
      this.$router.push({ path: `/user/${this.selected[0].name}` }) // -> /user/123
    },
  },
}
</script>

<style lang="scss">
  table.b-table[aria-busy='true'] {
    opacity: 0.6;
  }
  table#dashboardTable .flip-list-move {
    transition: transform 1s;
  }
</style>