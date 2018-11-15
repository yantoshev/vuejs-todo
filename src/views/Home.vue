<template>
  <el-main>
    <el-row :gutter="0">
        <el-col :span="12" :offset="6" class="todo">
            <Todo/>
        </el-col>
    </el-row>
  </el-main>
</template>

<script>
import Todo from '@/components/Todo'

export default {
  name: 'Home',
  components: {
    Todo
  },
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
