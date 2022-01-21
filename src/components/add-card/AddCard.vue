<template>
  <div
    class="add-card"
    @submit.prevent="onSubmit"
  >
    <form class="add-card__form">
      <fieldset class="add-card__group">

        <input
          v-model="form.name"
          class="app-input add-card__input"
          type="text"
          placeholder="Введите имя"
        >

        <input
          v-model="form.position"
          class="app-input add-card__input"
          type="text"
          placeholder="Введите должность"
        >
      </fieldset>

      <fieldset class="add-card__group">
        <textarea
          v-model="form.description"
          class="app-textarea add-card__textarea add-card__textarea--mb-20"
          placeholder="Пара слов о себе"
        ></textarea>

        <input
          v-model="form.date"
          class="app-input add-card__input app-input add-card__input--mb-20"
          type="text"
          placeholder="Дата события"
        >

        <textarea
          v-model="form.event"
          class="app-textarea app-textarea--small add-card__textarea add-card__textarea--mb-20"
          placeholder="Название конференции"
        ></textarea>

        <div class="add-card__links-section">
          <span class="add-card__section-title">
            Отметьте доступные кнопки
          </span>

          <label
            v-for="(link, index) in links"
            :key="index"
            class="add-card__link-label"
          >
            <input
              v-model="selectedLinks"
              type="checkbox"
              class="add-card__link-checkbox"
              :value="link"
            >
            <span>{{ link }}</span>
          </label>
        </div>

        <div class="add-card__background-section">
          <span class="add-card__section-title">
            Выберите фон
          </span>

          <div class="add-card__background-select">
            <label
              v-for="image in backgroundImages"
              :key="image.id"
              :class="getImageLabelClasses(image)"
            >
              <input
                v-model="selectedBackground"
                :value="image"
                type="radio"
                class="add-card__radio"
              >
              <span class="add-card__radio-overlay"></span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="app-button"
        >
          Сохранить
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AddCard',

  data () {
    return {
      form: {
        name: '',
        position: '',
        description: '',
        date: '',
        event: ''
      },
      selectedBackground: null,
      selectedLinks: [],
    }
  },

  computed: {
    ...mapState([
      'cards',
      'backgroundImages',
      'links',
    ]),
  },

  mounted () {
    this.selectedBackground = this.backgroundImages[0]
  },

  methods: {
    ...mapMutations([
      'setViewlVisibility',
      'addCard',
      'setSlidePosition',
    ]),

    onSubmit () {
      const { name, position, description, date, event } = this.form

      const links = this.selectedLinks.map(link => {
        return {
          name: link,
          value: '',
        }
      })

      const id = this.cards.length

      const card = {
        name,
        position,
        description,
        date,
        event,
        id,
        links,
        background_image: this.selectedBackground,
      }


      this.addCard(card)
      this.setViewlVisibility({
        isHomePageVisible: true,
        isCardAddVisible: false,
      })
    },

    getImageLabelClasses (image) {
      return [
        'add-card__image-label',
        `add-card__image-label--bg-${image.id}`
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.add-card {
  padding: 50px 15px 15px;
  background-color: #c1c1c1;

  &__section-title {
    display: block;
    margin-bottom: 15px;
  }

  &__card {
    margin-bottom: 10px;
  }

  &__group {
    padding: 20px 21px 27px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(30px);
    border: none;
    border-radius: 10px;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }

  &__links-section {
    margin-bottom: 20px;
  }

  &__link-label {
    display: block;

    &:not(:last-of-type) {
      margin-bottom: 15px;
    }

    span {
      padding-left: 10px;
    }
  }

  &__input {
    margin-bottom: 10px;

    &--mb-20 {
      margin-bottom: 20px;
    }
  }

  &__textarea {
    &--mb-20 {
      margin-bottom: 20px;
    }
  }

  &__background-select {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 128px;
    grid-gap: 12px;
    margin-bottom: 30px;
  }

  &__radio {
    position: absolute;
    -webkit-appearance: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .add-card__radio-overlay {
      opacity: 0.5;
    }
  }

  &__radio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    opacity: 0;
    transition: 0.3s;
  }

  &__image-label {
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    overflow: hidden;

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
  }
}
</style>
