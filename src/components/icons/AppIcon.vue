<template>
  <component :is="iconComponent"/>
</template>

<script>
import file from '@/components/icons/File'
import folderClosed from '@/components/icons/FolderClosed'
import folderOpen from '@/components/icons/FolderOpen'
import link from './Link'

const icons = {
  file,
  folderClosed,
  folderOpen,
  link
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