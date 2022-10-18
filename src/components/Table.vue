<template>
  <div class="table">
    <div class="table__header">
      <div class="column">Дата</div>
      <div class="column">Название</div>
      <div class="column">Количество</div>
      <div class="column">Расстояние</div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="isRowsVisible">
        <TableRow
          v-for="unit in currentPage" :key="unit.id"
          :unit="unit"
        />
      </div>
    </transition>
    <Paginator :pagesCount="pagesCount" @updatePageValue="updateCurrentPage"/>
  </div>
</template>

<script>
import TableRow from '@/components/TableRow.vue'
import Paginator from '@/components/Paginator.vue'

export default {
  components: {
    TableRow,
    Paginator
  },
  data() {
    return {
      currentPageValue: 1,
      unitsPerPage: 10,
      isRowsVisible: false
    }
  },
  props: {
    units: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateCurrentPage(value) {
      this.isRowsVisible = false
      this.currentPageValue = value
      setTimeout(() => this.isRowsVisible = true, 200)
    }
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.units.length / this.unitsPerPage)
    },
    currentPage() {
      let from = (this.currentPageValue - 1) * this.unitsPerPage
      let to = from + this.unitsPerPage
      return this.units.slice(from, to)
    }
  }
}
</script>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
  font-size: 18px;
  z-index: 100;
}
.table__header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  border-bottom: 2px solid #e7e7e7;
}
.column {
  display: flex;
  flex: 25%;
  justify-content: center;
}
</style>
