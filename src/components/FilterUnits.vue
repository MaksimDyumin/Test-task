<template>
  <div class="filter">
    <button class="custom-btn" @click="switchVisible">{{btnText}}</button>
    <transition name="fade">
      <div v-if="showFilter" class="filter__container">
        <div class="dropdown-container">
          <div class="dropdown dropdown-container__dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {{nameDropColumnBtn}}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li v-for="option in columnOptions" :key="option.value">
                <a class="dropdown-item" href="#" @click="chooseColumn(option)">{{option.optName}}</a>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-container__dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {{nameDropConditionBtn}}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li v-for="option in conditionOptions" :key="option.value">
                <a class="dropdown-item" href="#" @click="chooseCondition(option)">{{option.optName}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="textarea-container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Значение вашего условия</label>
            <input v-model="inputValue" @keyup.enter="emitData" type="email" class="form-control" id="exampleFormControlInput1" placeholder="цифра или название">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFilter: false,
      nameDropColumnBtn: 'Название',
      nameDropConditionBtn: 'Больше',
      inputValue: '',
      columnOptions: [
        {value: 1, optName: 'Название',   columnName: 'name'},
        {value: 2, optName: 'Количество', columnName: 'count'},
        {value: 3, optName: 'Расстояние', columnName: 'distance'},
      ],
      conditionOptions: [
        {value: 1, optName: 'Больше',   method: this.filterBigger},
        {value: 2, optName: 'Меньше',   method: this.filterLower},
        {value: 3, optName: 'Равно',    method: this.filterEqval},
        {value: 4, optName: 'Содержит', method: this.filterContain},
      ],
      сomplitedFilter: {
        column: null,
        condition: null,
        inputValue: ''
      },
    }
  },
  created() {
    this.сomplitedFilter.column = this.columnOptions[0]
    this.сomplitedFilter.condition = this.conditionOptions[0]
    this.emitData()
  },
  methods: {
    filterBigger(filterValue, columnValue) {
      return columnValue > filterValue
    },
    filterLower(filterValue, columnValue) {
      return columnValue < filterValue
    },
    filterEqval(filterValue, columnValue) {
      return columnValue === filterValue
    },
    filterContain(filterValue, columnValue) {
      let formattedVal = String(filterValue).toLowerCase()
      let formattedColVal = String(columnValue).toLowerCase()
      return formattedColVal.includes(formattedVal)
    },
    switchVisible() {
      this.showFilter = !this.showFilter
    },
    chooseColumn(option) {
      this.nameDropColumnBtn = option.optName
      this.сomplitedFilter.column = option
    },
    chooseCondition(option) {
      this.nameDropConditionBtn = option.optName
      this.сomplitedFilter.condition = option
    },
    emitData() {
      this.сomplitedFilter.inputValue = this.inputValue
      this.$emit('changeValue', this.сomplitedFilter)
    }
  },
  watch: {
    inputValue() {
      //this.сomplitedFilter.inputValue = this.inputValue
      //this.$emit('changeValue', this.inputValue)
    }
  },
  computed: {
    btnText() {
      return !this.showFilter ? 'Открыть фильтр' : 'Закрыть фильтр'
    },
  }
}
</script>

<style scoped>
.filter {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.filter__container {
  margin: 0px 25px;
}
.custom-btn {
  appearance: none;
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  width: 200px;
  margin-left: 10px;
}
.dropdown-container {
  display: flex;
  margin-top: 30px;
}
.dropdown-container__dropdown + .dropdown-container__dropdown {
  margin-left: 10px;
}
</style>