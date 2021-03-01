<template>
  <v-main>
    <v-container fluid>
      <v-card>
        <v-card-title>Pagina 1</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Saepe fuga non vel, cum magnam suscipit natus quasi omnis porro
        architecto quibusdam ducimus dicta! Iure odio quo mollitia corrupti,
        dolorem nam!
        </v-card-text>
        <v-card-actions>
          <v-btn @click="incrementarA"> A++</v-btn>
          <v-btn @click="incrementarB"> B++</v-btn>
        </v-card-actions>
      </v-card>
      <v-alert
        border="top"
        color="red lighten-2"
        dark>
        A:{{a}} + B:{{b}} = {{ suma }}
      </v-alert>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Page1',
  data() {
    return {
      a: 0,
      b: 0,
    };
  },
  mounted() {},
  methods: {
    incrementarA() {
      this.a += 1;
    },
    incrementarB() {
      this.b += 1;
    },
  },
  computed: {
    suma() {
      return this.a + this.b;
    },
  },
};
</script>

<style lang="scss">
</style>
