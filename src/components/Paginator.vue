<template>
  <nav class="paginator-container" aria-label="">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" @click="prevPage">Previous</a></li>
    <li v-for="page in pages" :key="page" :class="`page-item ${page === currentPage ? 'active':''}`" @click="change(page)">
      <a class="page-link" href="#">{{page}}</a>
    </li>
    <li class="page-item"><a class="page-link" href="#" @click="nextPage">Next</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      default: 2
    },
  },
  methods: {
    change(page) {
      this.currentPage = page
      this.$emit('updatePageValue', this.currentPage)
    },
    nextPage() {
      this.currentPage++
      this.$emit('updatePageValue', this.currentPage)
    },
    prevPage() {
      this.currentPage--
      this.$emit('updatePageValue', this.currentPage)
    }
  },
  data(){
    return {
      currentPage: 1
    }
  },
  computed: {
  }
} 
</script>

<style>
.paginator-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>