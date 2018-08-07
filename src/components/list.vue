<template>
  <div>
    <span>{{msg}}</span>
    <button>delete</button>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['msg'],
  data () {
    return {}
  }
}
</script>

<style scoped>
div{
  width: 30%;
}
button{
  float: right;
}
</style>
