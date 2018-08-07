<template>
  <div>
    <Form :model="inputValue" :label-width="200" :style="inputStyle">
      <FormItem label="To Do">
        <Input
          v-model="inputValue.input" placeholder="Enter what do you want to do..."/>
      </FormItem>
    </Form>
    <button @click="handle">提交</button>
    <ol>
      <li v-for="(item, id) in items" :key="id">
        <list :msg="item.val"></list>
      </li>
    </ol>
  </div>
</template>

<script>
import List from './list'
export default {
  name: 'todoInput',
  components: {List},
  data () {
    return {
      inputValue: {
        input: ''
      },
      items: [],
      inputStyle: {
        width: '80%',
        margin: '100px 0 auto'
      }
    }
  },
  methods: {
    handle: function () {
      this.items.push({val: this.inputValue.input})
      this.inputValue.input = ''
    }
  }
}
</script>

<style scoped>

</style>
