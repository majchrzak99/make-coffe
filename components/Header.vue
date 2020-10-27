<template>
  <div>
    <header>
      <v-parallax v-if="IsMobile" height="300" src="/header.jpg" />
      <v-parallax v-else height="400" src="/header.jpg" />
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['IsMobile'])
  }
}
</script>
