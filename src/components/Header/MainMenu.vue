<template>
  <div id="main-menu">
    <v-navigation-drawer
      width="300px"
      v-model="mostrar"
      fixed
      temporary>
      <v-list>
        <v-subheader>Menu</v-subheader>
        <template v-for="m in menu">
          <template v-if="m.children && m.children.length > 0">
            <v-list-group
              no-action
              :key="'__' + m.text">
              <template v-slot:activator>
                <v-list-item-action>
                  <v-row justify="center">
                    <v-icon small>{{ m.icon }}</v-icon>
                  </v-row>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ m.text }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <template v-for="(child, i) in m.children">
                <template>
                  <v-list-item
                  v-if="child.params"
                    :key="i"
                    :to="{
                      name: child.route,
                      params:{
                        id: child.params.id,
                        nombre: child.params.nombre,
                      }
                    }">
                    <v-list-item-title v-text="child.text"></v-list-item-title>
                    <v-list-item-action>
                      <v-icon v-text="child.icon"></v-icon>
                    </v-list-item-action>
                  </v-list-item>
                  <v-list-item
                    v-else
                    :key="i"
                    :to="{
                      name: child.route,
                      params:{
                        id: m.params ? m.params.id : 'x',
                        nombre: m.params ? m.params.nombre : 'xx',
                      }
                    }">
                    <v-list-item-title v-text="child.text"></v-list-item-title>
                    <v-list-item-action>
                      <v-icon v-text="child.icon"></v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </template>
            </v-list-group>
          </template>
          <template v-else>
            <template>
              <v-list-item
                :key="'__' + m.text"
                :to="{
                  name: m.route,
                  params:{
                    id: m.params ? m.params.id : 'xxx',
                    nombre: m.params ? m.params.nombre : 'xxxx',
                  }
                }">
                  <v-list-item-action>
                    <v-row justify="center">
                      <v-icon small>{{ m.icon }}</v-icon>
                    </v-row>
                  </v-list-item-action>
                  <v-list-item-content>{{ m.text }}</v-list-item-content>
              </v-list-item>
            </template>
          </template>
        </template>
      </v-list>
      <v-divider></v-divider>
      <div class="px-4 py-2 grey--text text--darken-1">
        <small>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </small>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'MenuPrincipal',
  props: {
    menu: {
      type: Array,
      required: true,
    },
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
  watch: {
    drawer(nuevoValor) {
      this.mostrar = nuevoValor;
    },
    mostrar(nuevoValor) {
      this.$emit('mostrarDrawer', nuevoValor);
    },
  },
};
</script>

<style lang="scss">
</style>
