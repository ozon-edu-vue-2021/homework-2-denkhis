<template>
  <div id="app">
    <directory :node="tree"/>
  </div>
</template>

<script>
import Directory from "@/components/Directory";
import tree from '../public/static/node_modules.json'

export default {
  name: 'App',
  components: {
    Directory
  },
  data () {
    return {
      tree
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.child-directory {
  margin-left: 40px;
}
</style>
