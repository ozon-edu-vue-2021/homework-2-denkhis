<template>
  <div>
    <node-item
        :node-name="node.name"
        :node-type="node.type"
        :show-children="showChildren"
        @click.native="handleNodeClick"
    />
    <div v-if="hasChildren && showChildren">
      <directory
          v-for="(child, index) in node.contents"
          :key="`${child.name}-${index}`"
          :node="child"
          :parent-path="currentPath"
          class="directory__child"
      />
    </div>
  </div>
</template>

<script>
  import NodeItem from '@/components/NodeItem'

  export default {
    name: 'Directory',
    components: {
      NodeItem
    },
    props: {
      node: {
        type: Object,
        required: true
      },
      parentPath: String
    },
    data: () => ({
      showChildren: false,
    }),
    computed: {
      hasChildren () {
        const { contents } = this.node
        return contents && contents.length > 0
      },
      currentPath () {
        return `${this.parentPath}${this.node.name}/`
      }
    },
    methods: {
      handleNodeClick () {
        if (this.node.type !== 'directory') this.$store.commit('setFilePath', this.currentPath)
        this.showChildren = !this.showChildren
      }
    }
  }
</script>