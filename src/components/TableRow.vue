<template>
  <div class="row">
    <div class="table-cell row__date">
       <p>{{unit.date}}</p>
    </div>
    <div class="table-cell row__name">
      <p>{{unit.name}}</p>
    </div>
    <div class="table-cell row__date">
      <p>{{unit.count}}</p>
    </div>
    <div class="table-cell row__date">
      <p>{{unit.distance}}</p>
    </div>
  </div>
</template>

<script>
//import {mapActions, mapGetters} from 'vuex'
export default {
  props: {
    unit: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  justify-content: flex-start;
  margin: 8px 16px;
}

.row:nth-child(even) {
  background-color: rgb(233, 233, 233);
}
.row:nth-child(odd) {
  background-color: rgb(255, 255, 255);
}

.row:hover {
  background-color: aliceblue;
  cursor: pointer;
} 

.row div {
  display: flex;
  flex: 25%;
  justify-content: flex-start;
  border-right: 1px solid black;
  width: 100%;
  text-align: center;
}
.table-cell p {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}
.row p:last-child {
  border: none;
}
</style>
