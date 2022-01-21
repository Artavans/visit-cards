<template>
  <div :class="adminPanelClasses">
    <hooper
      class="admin-panel__slider"
      :settings="sliderSettings"
      ref="hooper"
      @slide="slide"
    >
      <slide
        v-for="card in cards"
        :key="card.id"
        class="admin-panel__slide"
      >
        <app-card
          :card-data="card"
          :is-editable="true"
          :is-shareble="true"
          class="admin-panel__card"
        ></app-card>
      </slide>
    </hooper>

    <div class="admin-panel__controls">
      <div class="admin-panel__descr">
        <p class="admin-panel__text">
          Пользователям, которым вы отправите эту визитку - будут доступны следующие кнопки: “Ссылка на добавление в контакты”, “Ссылка Telegram”
        </p>
      </div>

      <button
        class="admin-panel__button"
        type="button"
        @click="onEdit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        Редактировать основные данные
      </button>

      <button
        class="admin-panel__button"
        type="button"
        @click="onAdd"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        Создать новую визитку
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { Hooper, Slide } from 'hooper'
import AppCard from './../app-card/AppCard'

export default {
  name: 'AdminPanel',

  components: {
    AppCard,
    Hooper,
    Slide,
  },

  data () {
    return {
      sliderSettings: {
        itemsToShow: 1.07,
        centerMode: true
      },
    }
  },

  computed: {
    ...mapState([
      'cards',
      'slidePosition',
    ]),

    ...mapGetters([
      'currentBackgroundImageId'
    ]),

    adminPanelClasses () {
      const { currentBackgroundImageId } = this

      return [
        'admin-panel',
        `admin-panel--bg-${currentBackgroundImageId}`,
      ]
    },
  },

  mounted () {
    const slidePosition = this.slidePosition !== -1 ? this.slidePosition : 0
    this.$refs.hooper.slideTo(slidePosition)
  },

  methods: {
    ...mapMutations([
      'setSelectedCard',
      'setViewlVisibility',
    ]),

    slide (val) {
      this.setSelectedCard(this.cards[val.currentSlide])
    },

    onEdit () {
      this.setViewlVisibility({
        isHomePageVisible: false,
        isCardEditVisible: true,
      })
    },

    onAdd () {
      this.setViewlVisibility({
        isHomePageVisible: false,
        isCardAddVisible: true,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.admin-panel {
  width: 100%;
  min-height: 100vh;
  padding: 50px 0 15px;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.3s;

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

  &__slider {
    margin-bottom: 10px;
  }

  &__slide {
    height: auto;
    padding: 0 2px;
  }

  &__card {
    height: 100%;
  }

  &__controls {
    margin: 0 15px;
  }

  &__descr {
    margin: 0 0 10px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(30px);
    border-radius: 15px;
  }

  &__text {
    margin: 0;
    padding: 0;
    color: rgba(35, 35, 34, 0.8);
    font-size: 12px;
    line-height: 14px;
  }

  ::v-deep .hooper {
    height: auto;
  }

  &__button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    font-size: 12px;
    line-height: 14px;
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
