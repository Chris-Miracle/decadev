<template>
  <div class="hello">
    <p class="msg">{{ msg }}</p>
  </div>
  <div class="search-panel">
    <FormSearch/>
  </div>
</template>

<script>
import FormSearch from '../components/FormSearch.vue';
export default {
  name: 'Welcome',
  components:{
    FormSearch
  },
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

.msg{
  margin-bottom: 40px;
}
</style>
