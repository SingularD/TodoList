<template>
  <div>
    <input type="text" v-model="inputVal"/>
    <input type="button" value="submit" v-on:click="show"/>
    <ol>
      <li v-for="item in items" :key="item.id">{{item.val}}</li>
    </ol>
    <router-link :to="{ name: 'Test' }"><button>jump</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputVal: '',
      items: []
    }
  },
  methods: {
    show: function () {
      this.items.push({val: this.inputVal})
      this.inputVal = ''
    }
  }
}
</script>
