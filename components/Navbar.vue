<template>
  <div class="sticky">
    <v-app-bar>
      <div class="navbar">
        <div class="logo">
          Tu będzie logo
        </div>
        <div v-if="!IsMobile">
          <nuxt-link
            v-for="item in NavItems"
            :key="item.RouterTarget"
            :to="{name:item.RouterTarget}"
            class="link"
            v-text="item.Text"
          />
        </div>
        <UserMenu v-if="!IsMobile" />
        <v-icon v-if="IsMobile" class="navbar-icon--large" @click="ToggleMobileMenu()">
          menu
        </v-icon>
      </div>
      <div v-if="IsMobileMenuVisible && IsMobile" class="navbar__menu-list">
        <div class="sticky">
          <v-app-bar>
            <UserMenu />
            <v-spacer />
            <v-icon @click="ToggleMobileMenu()">
              close
            </v-icon>
          </v-app-bar>
          <v-list nav rounded>
            <v-list-item v-for="item in NavItems" :key="item.RouterTarget" color="#fff">
              <v-icon class="navbar-icon--medium">
                {{ item.icon }}
              </v-icon>
              <nuxt-link
                :to="{name:item.RouterTarget}"
                class="link"
                @click.native="ToggleMobileMenu()"
              >
                {{ item.Text }}
              </nuxt-link>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    UserMenu: () => import('@/components/core/UserMenu.vue')
  },
  data () {
    return {
      IsMobileMenuVisible: false,
      NavItems: [
        { RouterTarget: 'Home', Text: 'Strona główna', icon: 'home' },
        { RouterTarget: 'Types', Text: 'Rodzaje', icon: 'list' },
        {
          RouterTarget: 'Articles',
          Text: 'Artykuły',
          icon: 'featured_play_list'
        },
        { RouterTarget: 'Contact', Text: 'Kontakt', icon: 'contact_mail' }
      ]
    }
  },
  computed: {
    ...mapGetters(['IsMobile'])
  },
  methods: {
    ToggleMobileMenu () {
      this.IsMobileMenuVisible = !this.IsMobileMenuVisible
    }
  }
}
</script>

<style scoped>
.test {
  background-color: red;
}
.link {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

.sticky {
  position: sticky;
  top: 0;
  position: -webkit-sticky;
}

.navbar {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  line-height: 3rem;
  font-family: "Open-Sans";
  width: 100%;
}

@media screen and (max-width: 760px) {
  .navbar-icon--large {
    font-size: 2.5rem;
  }
  .navbar-icon--medium {
    font-size: 2rem;
  }
  .navbar__menu-list {
    position: fixed;
    left: 0px;
    width: 100vw;
    background-color: #fff;
    min-height: 100vh;
    top: -300px;
  }
  .link {
    padding: 0rem 0.5rem;
  }
}
@media screen and (min-width: 760px) {
  .link {
    padding: 0rem 1.5rem;
  }
  .router-link-exact-active {
    border-bottom: 1px solid black;
  }
}
</style>
