<template>
  <div
    :class="shareCardClasses"
    @submit.prevent="onSubmit"
  >
    <app-card
      :card-data="card"
      :is-shareble="true"
      class="share__card"
    ></app-card>

    <img
      class="share__image"
      src="./../assets/qr.png"
      alt="qr"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppCard from './../components/app-card/AppCard'

export default {
  name: 'Share',

  components: {
    AppCard,
  },
  
  data () {
    return {
      card: null,
    }
  },

  computed: {
    ...mapState([
      'cards',
    ]),

    shareCardClasses () {
      const { card } = this

      return [
        'share',
        `share--bg-${card?.background_image.id}`,
      ]
    },
  },

  mounted () {
    this.card = this.cards.find(card => card.id === Number(this.$route.params?.id))
  },
}
</script>

<style lang="scss" scoped>
.share {
  height: 100vh;
  padding: 50px 15px 15px;
  background-color: #c1c1c1;
  background-size: cover;
  background-repeat: no-repeat;

  &--bg-1 {
    background-image: url('./../assets/background/andrii-leonov-PIDH7bZNSqA-unsplash.jpg');
  }

  &--bg-2 {
    background-image: url('./../assets/background/aral-tasher-OAyXVWP5I9U-unsplash.jpg');
  }

  &--bg-3 {
    background-image: url('./../assets/background/brandon-vazquez-EqeJrBFGQd0-unsplash.jpg');
  }

  &--bg-4 {
    background-image: url('./../assets/background/guille-pozzi-naJwfMcJ1XU-unsplash.jpg');
  }

  &--bg-5 {
    background-image: url('./../assets/background/andrii-leonov-PIDH7bZNSqA-unsplash.jpg');
  }

  &--bg-6 {
    background-image: url('./../assets/background/aral-tasher-OAyXVWP5I9U-unsplash.jpg');
  }

  &--bg-7 {
    background-image: url('./../assets/background/brandon-vazquez-EqeJrBFGQd0-unsplash.jpg');
  }

  &--bg-8 {
    background-image: url('./../assets/background/guille-pozzi-naJwfMcJ1XU-unsplash.jpg');
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
