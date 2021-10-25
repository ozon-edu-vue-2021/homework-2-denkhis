<template>
  <div class="directory__node pointer">
    <app-icon
        :name='iconName'
        class="node-icon"
    />
    <span>{{ nodeName }}</span>
  </div>
</template>

<script>
import AppIcon from "@/components/icons/AppIcon";

export default {
  name: "File",
  components: {
    AppIcon
  },
  props: {
    nodeName: String,
    nodeType: String,
    hasChildren: Boolean,
    showChildren: Boolean
  },
  computed: {
    iconName () {
      if (this.nodeType === 'directory') {
        return this.showChildren ? 'folderOpen' : 'folderClosed'
      } else {
        return this.nodeType
      }
    }
  }
}
</script>

<style scoped>

</style>