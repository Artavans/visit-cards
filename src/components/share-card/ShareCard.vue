<template>
  <div
    :class="shareCardClasses"
    @submit.prevent="onSubmit"
  >
    <app-card
      :card-data="selectedCard"
      :is-shareble="true"
      class="share-card__card"
    ></app-card>

    <img
      class="share-card__image"
      src="./../../assets/qr.png"
      alt="qr"
    >
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import AppCard from './../app-card/AppCard'

export default {
  name: 'ShareCard',

  components: {
    AppCard,
  },

  computed: {
    ...mapState([
      'selectedCard',
      'cards',
    ]),

    shareCardClasses () {
      const { selectedCard } = this

      return [
        'share-card',
        `share-card--bg-${selectedCard.background_image.id}`,
      ]
    },
  },

  methods: {
    ...mapMutations([
      'setViewlVisibility',
      'updateCard',
      'setSlidePosition',
    ]),

    onSubmit () {
      const card = Object.assign(this.selectedCard, this.form)
      const cardIndex = this.cards.findIndex(card => card.id === this.selectedCard.id)

      this.updateCard(card)
      this.setSlidePosition(cardIndex)
      this.setViewlVisibility({
        isHomePageVisible: true,
        isCardEditVisible: false,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.share-card {
  height: 100vh;
  padding: 50px 15px 15px;
  background-color: #c1c1c1;
  background-size: cover;
  background-repeat: no-repeat;

  &--bg-1 {
    background-image: url('./../../assets/background/andrii-leonov-PIDH7bZNSqA-unsplash.jpg');
  }

  &--bg-2 {
    background-image: url('./../../assets/background/aral-tasher-OAyXVWP5I9U-unsplash.jpg');
  }

  &--bg-3 {
    background-image: url('./../../assets/background/brandon-vazquez-EqeJrBFGQd0-unsplash.jpg');
  }

  &--bg-4 {
    background-image: url('./../../assets/background/guille-pozzi-naJwfMcJ1XU-unsplash.jpg');
  }

  &--bg-5 {
    background-image: url('./../../assets/background/andrii-leonov-PIDH7bZNSqA-unsplash.jpg');
  }

  &--bg-6 {
    background-image: url('./../../assets/background/aral-tasher-OAyXVWP5I9U-unsplash.jpg');
  }

  &--bg-7 {
    background-image: url('./../../assets/background/brandon-vazquez-EqeJrBFGQd0-unsplash.jpg');
  }

  &--bg-8 {
    background-image: url('./../../assets/background/guille-pozzi-naJwfMcJ1XU-unsplash.jpg');
  }

  &__card {
    margin-bottom: 10px;
  }

  &__image {
    background-color: #ffffff;
    width: 100%;
  }
}
</style>
