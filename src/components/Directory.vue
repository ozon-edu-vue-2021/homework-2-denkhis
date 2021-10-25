<template>
  <div>
    <node-item
        :node-name="node.name"
        :node-type="node.type"
        @click.native="handleClick"
    />
    <div v-if="hasChildren && showChildren">
      <directory
          v-for="(child, index) in node.contents"
          :key="`${child.name}-${index}`"
          :node="child"
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
    }
  },
  data () {
    return {
      showChildren: false,
      showLoader: false
    }
  },
  methods: {
    async toggleChildren () {
      this.showChildren = !this.showChildren
    },
    handleClick () {
      this.showLoader = true
      this.toggleChildren().then(() => this.showLoader = false)
    }
  },
  computed: {
    hasChildren () {
      const { contents } = this.node
      return contents && contents.length > 0
    }
  }
}
</script>

<style scoped>

</style>