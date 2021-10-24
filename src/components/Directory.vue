<template>
  <div>
    <h1 @click="show = !show">{{node.name}}</h1>
    <div v-if="hasChildren && show">
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
      show: false
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