<template>
  <div id="app">
    <directory :node="nodeTree"/>
  </div>
</template>

<script>
  import Directory from "@/components/Directory"
  import nodeTree from '../public/static/node_modules.json'

  export default {
    name: 'App',
    components: {
      Directory
    },
    data () {
      return {
        nodeTree
      }
    }
  }
</script>
