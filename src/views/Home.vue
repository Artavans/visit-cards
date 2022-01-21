<template>
  <div class="app">
    <admin-panel v-if="isHomePageVisible"></admin-panel>

    <edit-card v-if="isCardEditVisible"></edit-card>

    <add-card v-if="isCardAddVisible"></add-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AdminPanel from './../components/admin-panel/AdminPanel'
import EditCard from './../components/edit-card/EditCard'
import AddCard from './../components/add-card/AddCard'

export default {
  name: 'App',

  components: {
    AdminPanel,
    EditCard,
    AddCard,
  },

  computed: {
    ...mapState([
      'views',
      'cards',
    ]),

    isHomePageVisible () {
      const { views } = this

      return views.isHomePageVisible
    },

    isCardEditVisible () {
      const { views } = this

      return views.isCardEditVisible
    },

    isCardAddVisible () {
      const { views } = this

      return views.isCardAddVisible
    },
  },

  mounted () {
    this.setSelectedCard(this.cards[0])
  },

  methods: {
    ...mapMutations([
      'setSelectedCard',
    ]),
  },
}
</script>

<style lang="scss">
.app {
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  background-position: center center;
  margin: 0 auto;
  overflow: hidden;

  &__card {
    width: 100%;
  }
}
</style>
