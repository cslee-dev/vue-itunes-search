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
import axios from "axios";

export default {
  name: "id",
  components: {
    Card
  },
  computed: {
    getSearch() {
      return this.$route.params.id
    },
  },
  methods: {
    picker(index) {
      return index % 2 == 0 ? 'red' : 'blue';
    }
  },
  asyncData({params}) {
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then(function (response) {
        return {albumData: response.data.results}
      })
  }
}
</script>

<style scoped>

</style>
