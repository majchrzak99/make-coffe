<template>
  <div v-if="User.IsAuthenticated" class="user-menu">
    <v-icon>account_circle</v-icon>
    <div class="d-inline-block pl-1 pr-2 user-menu_name" v-text="User.Username" />
  </div>
  <div v-else>
    <v-icon>perm_identity</v-icon>
    <div class="d-inline-block pl-1 pr-2 user-menu_name">
      Zaloguj
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserMenu',
  computed: {
    ...mapGetters(['User'])
  }
}
</script>
<style scoped>
.user-menu {
  cursor: pointer;
}
.user-menu_name {
  vertical-align: middle;
}
</style>
