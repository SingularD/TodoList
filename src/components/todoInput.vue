<template>
  <div>
    <Form :model="inputValue"
          :label-width="300"
          @submit.native.prevent
          :style="styleForm"
          inline>
      <FormItem label="To Do">
        <Input
          v-model="inputValue.input"
          placeholder="Enter what do you want to do..."
          style="width: 500px"/>
      </FormItem>
      <i-button type="success" @click="handle" ghost>提交</i-button>
    </Form>
    <ol>
      <li v-for="(item, id) in items" :key="id">
        <list :msg="item.val"></list>
        <i-button id="btn" @click="fade(id)">delete</i-button>
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
      styleForm: {
        width: '70%',
        marginTop: '100px'
      }
    }
  },
  methods: {
    handle: function () {
      let formData = new FormData()
      formData.append('value', this.inputValue.input)
      formData.append('message', '来自前端信息')
      this.axios.post('/api/test', formData)
        .then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
      this.items.push({val: this.inputValue.input})
      this.inputValue.input = ''
    },
    fade: function (id) {
      this.items.splice(id, 1)
    }
  }
}
</script>

<style scoped>
  li{
    margin-top: 30px;
    margin-left: 300px;
    width: 500px;
    font-size: 20px;
  }
  #btn{
    float: right;
  }
</style>
