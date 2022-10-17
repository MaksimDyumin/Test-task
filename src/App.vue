<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FilterUnits 
      @changeValue="changeValue"/>
    <Table :units="filtredUnits" />
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import FilterUnits from '@/components/FilterUnits.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Table,
    FilterUnits,
  },
  data() {
    return {
      column: 1,
      condition: 1,
      show: {},
      method: function(){return} ,
      columnName: '',
      valSort: ''
    }
  },
  async mounted() {
    await this.getUnits()
  },
  methods: {
    ...mapActions({
      getUnits: 'getUnits'
    }),
    changeValue(value) {
      this.method = value.condition.method
      this.columnName = value.column.columnName
      this.valSort = value.inputValue
    }
  },
  computed: {
    ...mapGetters({
      units: 'units'
    }),
    filtredUnits() {
      let filtredUnits = this.units.filter(unit => {
        return this.method(this.valSort, unit[this.columnName]) 
      })
      return filtredUnits
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
body{
  background: url("@/assets/bacImg.jpg") center no-repeat fixed;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
