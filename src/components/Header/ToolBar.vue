<template>
  <div id="tool-bar">
    <v-app-bar
      app
      fixed
      dense
      color="blue-grey lighten-5">
      <v-btn
        icon
        class="mx-0 px-0"
        @click.stop="mostrar = !mostrar">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'ToolBar',
  props: {
    drawer: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {
      mostrar: this.drawer,
    };
  },
  computed: {
    xSmallDevices() {
      if (this.$vuetify.breakpoint.width < 400) return true;
      return false;
    },
  },
  watch: {
    mostrar(nuevoValor) {
      this.$emit('mostrarDrawer', nuevoValor);
    },
    drawer(nuevoValor) {
      this.mostrar = nuevoValor;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar__content, .v-toolbar__extension {
    padding: 2px 2px !important;
}
</style>
