<template>
  <div id="e3" style="max-width:400px; margin:auto;" class="grey lighten-3">
    <v-container fluid style="min-height:0;" grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
            <v-card target="_blank" :href="url" :color="color" class="white--text">
              Vuetify v-card 컴포넌트는 href와 color속성이 있습니다.
              <v-container fluid gird-list-lg>
                <v-flex xs7>
                  <div>
                    <div class="headline">{{title}}</div>
                    <div>{{artistName}}</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-img :src="image" height="100px" contain></v-img>
                </v-flex>
              </v-container>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Card",
  props : ['title', 'image', 'artistName', 'url', 'color'],
}
</script>

<style scoped>

</style>
