<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <AddItem />
        </div>
        <div class="card-body p0">
          <TodoItem 
              v-for="(item, index) in items"
              :key="index"
              :item="item" />
          <h5 v-if="items.length === 0">No items!</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddItem from '@/components/AddItem'
import TodoItem from '@/components/TodoItem'

export default {
  name: 'Home',
  components: {
    AddItem,
    TodoItem
  },
  created() {
    this.$store.dispatch('loadData')
  },
  computed: {
    items () {
      return this.$store.state.todos
    },
  }
}
</script>

<style scoped>
  .p0 {
    padding: 0px !important;
  }

  .card h5 {
    margin: 20px 0;
  }
</style>
