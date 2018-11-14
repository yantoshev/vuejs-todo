<template>
    <div class="input-group">
      <input id="add-item" type="text" class="form-control" placeholder="Write services and component" v-model="item" @keyup.enter="addItem">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="addItem">Add</button>
      </div>
    </div>
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
