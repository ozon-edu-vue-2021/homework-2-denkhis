<template>
  <div>
    <node-item
        :node-name="node.name"
        :node-type="node.type"
        :is-show-children="isShowChildren"
        :active="isNodeActive"
        @click.native="handleNodeClick"
    />
    <div v-if="hasChildren && isShowChildren">
      <directory
          v-for="(child, index) in node.contents"
          :key="`${child.name}-${index}`"
          :node="child"
          :parent-path="currentFilePath"
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
      isShowChildren: false,
    }),
    computed: {
      hasChildren () {
        const { contents } = this.node
        return contents && contents.length > 0
      },
      selectedFilePath () {
        return this.$store.state.selectedFilePath
      },
      currentFilePath () {
        return `${this.parentPath} ${this.node.name} /`
      },
      isNodeActive () {
        return this.node.type !== 'directory' && this.selectedFilePath === this.currentFilePath
      }
    },
    methods: {
      handleNodeClick () {
        if (this.node.type !== 'directory') {
          this.$store.commit('setFilePath', this.currentFilePath)
        } else if (this.selectedFilePath.includes(this.node.name)) {
          this.$store.commit('setFilePath', '')
        }
        this.isShowChildren = !this.isShowChildren
      }
    }
  }
</script>
