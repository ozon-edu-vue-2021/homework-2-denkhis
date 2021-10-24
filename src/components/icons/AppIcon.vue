<template>
  <component :is="iconComponent"/>
</template>

<script>
import folderOpen from "@/components/icons/FolderOpen";
import link from './Link';

const icons = {
  folderOpen,
  link,
}

export default {
  name: "AppIcon",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconComponent () {
      return icons[this.name]
    }
  }
}
</script>