<template>
    <div>
        <AddItem />
        <TodoItem 
                v-for="(item, index) in items"
                :key="index"
                :item="item" />
        <h5 v-if="items.length === 0">No items!</h5>
    </div>
</template>

<script>
import AddItem from '@/components/AddItem'
import TodoItem from '@/components/TodoItem'

export default {
  name: 'Todo',
  components: { AddItem, TodoItem },
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

<style lang="scss">
    .todo {
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 5px;
    }
</style>
