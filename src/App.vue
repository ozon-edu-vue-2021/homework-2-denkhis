<template>
  <div id="app">
    <directory
        :node="nodeTree"
        parent-path=""
    />
    <div class="path">{{ filePath }}</div>
  </div>
</template>

<script>
  import Directory from '@/components/Directory'
  import nodeTree from '../public/static/node_modules.json'

  export default {
    name: 'App',
    components: {
      Directory
    },
    computed: {
      filePath () {
        return this.$store.state.filePath
      }
    },
    data: () => ({
      nodeTree
    })
  }
</script>
