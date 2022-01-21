<template>
  <div
    class="edit-card"
    @submit.prevent="onSubmit"
  >
    <app-card
      :card-data="selectedCard"
      class="edit-card__card"
    ></app-card>

    <form class="edit-card__form">
      <fieldset class="edit-card__group">

        <input
          v-model="form.name"
          class="app-input edit-card__input"
          type="text"
          placeholder="Введите имя"
        >

        <input
          v-model="form.position"
          class="app-input edit-card__input"
          type="text"
          placeholder="Введите должность"
        >

        <textarea
          v-model="form.description"
          class="app-textarea"
        ></textarea>
      </fieldset>

      <fieldset class="edit-card__group">
        <span class="edit-card__legend">
          Кнопки
        </span>

        <input
          v-for="link in form.links"
          :key="link.name"
          v-model="link.value"
          class="app-input edit-card__input"
          type="text"
          :placeholder="link.name"
        >

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
import AppCard from './../app-card/AppCard'

export default {
  name: 'EditCard',

  components: {
    AppCard,
  },

  data () {
    return {
      form: {
        name: '',
        position: '',
        description: '',
        links: [],
      }
    }
  },

  computed: {
    ...mapState([
      'selectedCard',
      'cards',
    ]),
  },

  mounted () {
    const { name, position, description, links } = this.selectedCard

    this.form = {
      name,
      position,
      description,
      links,
    }
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
.edit-card {
  padding: 50px 15px 15px;
  background-color: #c1c1c1;

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

  &__input {
    margin-bottom: 10px;
  }

  &__legend {
    display: block;
    margin-bottom: 20px;
  }
}
</style>
