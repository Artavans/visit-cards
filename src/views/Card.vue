<template>
  <div class="card-view-container">
    <div
      v-if="card"
      :class="cardViewClasses">
      <app-card
        :card-data="card"
        class="card-view__card"
      ></app-card>

      <div class="card-view__links">
        <a
          v-for="link in card.links"
          :key="link.name"
          :href="link.value"
          class="card-view__link"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Ссылка на {{ link.name }}
        </a>
      </div>
    </div>
    <div
      v-else
      class="card-view"
    >
      Такой визитки не существует
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppCard from './../components/app-card/AppCard'

export default {
  name: 'Card',

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

    cardViewClasses () {
      const { card } = this

      return [
        'card-view',
        `card-view--bg-${card?.background_image.id}`,
      ]
    },
  },

  mounted () {
    this.card = this.cards.find(card => card.id === Number(this.$route.params?.id))
  },
}
</script>

<style scoped lang="scss">
.card-view-container {
  width: 100%;
  min-height: 100vh;
  background-color: #c1c1c1;
}

.card-view {
  min-height: 100vh;
  padding: 50px 15px 15px;
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

  &__link {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    color:#232322;;
    font-size: 12px;
    line-height: 14px;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.6);
    border: none;
    backdrop-filter: blur(30px);
    border-radius: 10px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .bi {
      margin-right: 20px;
    }
  }
}
</style>