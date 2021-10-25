<template>
  <div id="app">
    <directory
        v-on="$listeners"
        :node="nodeTree"
        parent-path=""
        @select-node="changePath"
    />
    <div class="path">{{ path }}</div>
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
      path: ''
    }),
    methods: {
      changePath (payload) {
        this.path = payload
      }
    }
  }
</script>
