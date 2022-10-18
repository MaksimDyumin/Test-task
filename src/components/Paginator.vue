<template>
  <nav class="paginator-container" aria-label="Page navigation example">
  <ul class="pagination paginator-container_list">
    <li class="page-item"><a class="page-link" href="#" @click="prevPage">Previous</a></li>
    <li v-for="page in pagesCount" :key="page" :class="`page-item ${page === currentPage ? 'active':''}`" @click="change(page)">
      <a class="page-link" href="#">{{page}}</a>
    </li>
    <li class="page-item"><a class="page-link" href="#" @click="nextPage">Next</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  props: {
    pagesCount: {
      type: Number,
      default: 1
    },
  },
  methods: {
    change(page) {
      this.currentPage = page
      this.$emit('updatePageValue', this.currentPage)
    },
    nextPage() {
      if(this.currentPage < this.pagesCount)
      {
        this.currentPage++
        this.$emit('updatePageValue', this.currentPage)
      }
    },
    prevPage() {
      if(this.currentPage > 1){
        this.currentPage--
        this.$emit('updatePageValue', this.currentPage)
      } 
    }
  },
  watch: {
    pagesCount() {
      this.change(1)
    },

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
  display: flex;
  justify-content: center;
  max-width: 900px;
}
</style>