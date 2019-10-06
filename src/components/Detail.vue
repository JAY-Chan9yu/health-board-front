<template>
  <div class="panel panel-default">
    <div class="panel-heading">Panel heading without title</div>
    <div class="panel-body">
      Panel content
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'This is detail page!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
