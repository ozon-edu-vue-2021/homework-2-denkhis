<template>
  <div id="app">
    <directory
        :node="nodeTree"
        parent-path=""
    />
    <div class="file-path">{{ selectedFilePath }}</div>
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
    data: () => ({
      nodeTree
    }),
    computed: {
      selectedFilePath () {
        return this.$store.state.selectedFilePath
      }
    }
  }
</script>
