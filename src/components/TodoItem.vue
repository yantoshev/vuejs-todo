<template>
  <li class="item" :class="{ completed: item.completed }">    
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :checked="item.completed"
        @change="completeToggleItem(item)">
      <label 
        class="form-check-label" 
        v-text="item.title">
      </label>
      <button class="btn-delete" @click="removeItem(item)">✖</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    ...mapActions([
      'removeItem',
      'completeToggleItem'
    ]),
  },
}
</script>

<style lang="scss" scoped>
  li {
    list-style-type: none;
    text-align: left;
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,.125);

    &:last-of-type {
      border-bottom: 0;
    }

    &:hover {
      background: #007bff;

      label { color: #FFF }

      .btn-delete {
        color: #FFF;
        display: block;
      }
    }
  }

  .btn-delete {
    cursor: pointer;
    display: none;
    background: none;
    border: 0;
    outline: 0;
    float: right;
  }
</style>
