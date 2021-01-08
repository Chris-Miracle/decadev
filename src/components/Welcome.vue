<template>
  <div class="hello">
    {{ msg }}
  </div>
  <div class="search-panel">
    
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  color: #ffffff;
}

</style>
