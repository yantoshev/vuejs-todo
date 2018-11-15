<template>
    <el-row class="todo__add">
      <el-col :span="21">
        <el-input placeholder="Write services and component" v-model="item" @keyup.enter.native="addItem"></el-input>
      </el-col>
      <el-col :offset="1" :span="2">
        <el-button class="todo-add__button--add" type="primary" @click="addItem">Add</el-button>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'AddItem',
  data () {
    return {
      item: '',
    }
  },
  methods: {
    addItem () {
      if (this.item.trim()) {
        this.$store.dispatch('addItem', this.item)
      }
      this.item = ''
    }
  },
}
</script>

<style lang="scss">
  .todo__add {
    padding: 20px 15px;
    border-bottom: 1px solid rgba(0,0,0,.125);
  }
</style>
