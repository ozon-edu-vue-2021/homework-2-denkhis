<template>
  <div>
    <node-item
        :node-name="node.name"
        :node-type="node.type"
        :show-children="showChildren"
        :active="isNodeActive"
        @click.native="handleNodeClick"
    />
    <div v-if="hasChildren && showChildren">
      <directory
          v-for="(child, index) in node.contents"
          :key="`${child.name}-${index}`"
          :node="child"
          :parent-path="currentFilePath"
          :file-path="filePath"
          v-on="$listeners"
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
      parentPath: String,
      filePath: String
    },
    data: () => ({
      showChildren: false,
    }),
    computed: {
      hasChildren () {
        const { contents } = this.node
        return contents && contents.length > 0
      },
      currentFilePath () {
        return `${this.parentPath} ${this.node.name} /`
      },
      isNodeActive () {
        return this.node.type !== 'directory' && this.filePath === this.currentFilePath
      }
    },
    methods: {
      handleNodeClick () {
        if (this.node.type !== 'directory') this.$emit('set-path', this.currentFilePath)
        this.showChildren = !this.showChildren
      }
    }
  }
</script>