<template>
  <div id="test">
    <div>
      <h1>after jump</h1>
    </div>
    <router-link :to="{ name: 'HelloWorld' }">
      <button>
        返回
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>

<style scoped>
#test{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: orangered;
}
</style>
