<template>
  <div id="app">
    <directory :node="tree"/>
  </div>
</template>

<script>
import Directory from "@/components/Directory"
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
