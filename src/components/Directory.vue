<template>
  <div>
    <div>
      <File @click.native="showChildren = !showChildren" :node-name="node.name"/>
    </div>
    <div v-if="hasChildren && showChildren">
      <directory
          v-for="(child, index) in node.contents"
          :key="`${child.name}-${index}`"
          :node="child"
          class="child-directory"
      />
    </div>
  </div>
</template>

<script>
import File from "@/components/File";

export default {
  name: "Directory",
  components: {File},
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