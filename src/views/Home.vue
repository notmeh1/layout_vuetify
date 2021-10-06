<template>
  <div>
    <v-row class="my-5">
      <v-col align="center">
        <h1>Personajes</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(character, $index) in characters" :key="$index" xl="4">
        <v-card class="mx-auto" max-width="250px" tile>
          <v-img :src="character.imagen" height="200px" />
          <v-card-title class="justify-center">
            {{ character.nombre }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    characters() {
      return this.$store.state.characterList.characters;
    },
  },
};
</script>
