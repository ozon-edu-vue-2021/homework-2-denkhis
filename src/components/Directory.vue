<template>
  <div>
    <div>
      <app-icon name="link"/>
      <File @click.native="toggleChildren" :node-name="node.name"/>
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
import AppIcon from "@/components/icons/AppIcon";

export default {
  name: "Directory",
  components: {
    AppIcon,
    File
  },
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

<style scoped>

</style>