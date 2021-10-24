<template>
  <div>
    <h1 @click="showChildren = !showChildren">{{node.name}}</h1>
    <div v-if="hasChildren && showChildren">
      <directory
          v-for="child in node.contents"
          :key="child.name"
          :node="child"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Directory",
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showChildren: false
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