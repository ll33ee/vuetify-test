<template>
  <div id="contenedor-main-panel">
    <main-header
      :menu="menu">
    </main-header>
    <v-container>
      <router-view></router-view>
    </v-container>

  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue';

export default {
  name: 'MainPanel',
  components: {
    MainHeader,
  },
  data() {
    return {
      menu: [
        {
          text: 'Page 1',
          route: 'page1',
          icon: 'home',
        },
        // {
        //   text: 'Page 2',
        //   route: 'page2',
        //   icon: 'home',
        // },
      ],
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  sockets: {},
};
</script>

<style lang="scss">
</style>
