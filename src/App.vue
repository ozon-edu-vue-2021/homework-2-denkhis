<template>
  <div id="app">
    <directory
        :node="nodeTree"
        :file-path="filePath"
        v-on="$listeners"
        parent-path=""
        @set-path="setFilePath"
    />
    <div class="file-path">{{ filePath }}</div>
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
      nodeTree,
      filePath: ''
    }),
    methods: {
      setFilePath (payload) {
        this.filePath = payload
      }
    }
  }
</script>
