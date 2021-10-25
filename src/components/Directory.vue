<template>
  <div>
    <node-item
        :node-name="node.name"
        :node-type="node.type"
        :has-children="hasChildren"
        :show-children="showChildren"
        @click.native="toggleChildren"
    />
    <span v-if="showLoader">loader</span>
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
      toggleChildren () {
        this.showChildren = !this.showChildren
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