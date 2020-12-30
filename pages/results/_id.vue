<template>
  <div>
    <h1>{{ getSearch }}에 대한 결과</h1>
    <div v-if="albumData">
      <div v-for="(album, index) in albumData">
        <Card :title="album.collectionCensoredName"
              :image="album.artworkUrl60"
              :artistName="album.artistName"
              :url="album.artistViewUrl"
              :color="picker(index)"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import {mapState} from 'vuex'

export default {
  name: "id",
  components: {
    Card
  },
  computed: {
    getSearch() {
      return this.$route.params.id
    },
    ...mapState({albumData: 'albums'})
  },
  methods: {
    picker(index) {
      return index % 2 == 0 ? 'red' : 'blue';
    }
  },
  middleware: 'search'
}
</script>

<style scoped>

</style>
