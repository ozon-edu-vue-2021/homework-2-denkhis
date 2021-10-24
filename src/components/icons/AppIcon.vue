<template>
  <component :is="iconComponent"/>
</template>

<script>
import link from './Link'

const icons = {
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
  },
}
</script>