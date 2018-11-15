<template>
    <el-row class="todo__item">
      <el-col class="todo__checkbox" :span="21">
        <el-checkbox :checked="item.completed" :label="item.title" @change="completeToggleItem(item)"></el-checkbox>
      </el-col>
      <el-col :offset="1" :span="2">
        <el-button class="todo__button--delete" type="danger" icon="el-icon-delete" circle @click="removeItem(item)"></el-button>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    completeToggleItem(item) {
      this.$store.dispatch('completeToggleItem', item)
    },
    removeItem(item) {
      this.$store.dispatch('removeItem', item)
    }
  },
}
</script>

<style lang="scss">
  .todo__item {
    list-style-type: none;
    text-align: left;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0,0,0,.125);

    &:last-of-type {
      border-bottom: 0;
    }
    
    &:hover {
      background-color: #409EFF;

      .el-checkbox.is-checked .el-checkbox__label,
      .el-checkbox .el-checkbox__label {
        color: #FFF !important;
      }
    }
  }

  .el-button.todo__button--delete {
    display: block;
    margin: 0 auto;
  }

  .todo__checkbox {
    line-height: 40px;
  }
</style>
