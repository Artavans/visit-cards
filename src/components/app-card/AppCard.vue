<template>
  <article class="app-card">
    <div class="app-card__avatar">
      <img
        class="app-card__image"
        src="./../../assets/icon-avatar.jpg"
        alt="Аватар Иванова Инна"
      >
    </div>

    <h2 class="app-card__name">
      {{ cardData.name }}
    </h2>
    <p class="app-card__position">
     {{ cardData.position }}
    </p>

    <p class="app-card__descr">
      {{ cardData.description }}
    </p>

    <div class="app-card__meeting-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="29" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>

      <p class="app-card__meeting-info">
        {{ meetingInfo }}
      </p>
    </div>

    <div :class="controlsClasses">
      <button
        v-if="isEditable"
        type="button"
        class="app-card__button app-card__button--edit"
        aria-label="Редактировать данные"
        @click="onEdit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
      </button>

      <a
        :href="shareLink"
        v-if="isShareble"
        type="button"
        class="app-card__button app-card__button--share"
        aria-label="Поделиться визиткой"
        @click="onShare"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upc-scan" viewBox="0 0 16 16">
          <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
        </svg>
      </a>
    </div>
  </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppCard',

  props: {
    cardData: {
      type: Object,
      required: true
    },

    isEditable: {
      type: Boolean,
      default: false,
    },

    isShareble: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState([
      'views',
    ]),

    meetingInfo () {
      const { cardData } = this
      const date = cardData.date ?? ''
      const event = cardData.event[0].toLowerCase() + cardData.event.slice(1) ?? ''

      return `Вы встретились ${date}, ${event}.`
    },

    shareLink () {
      const { cardData } = this

      return `/card/${cardData.id}/share`
    },

    controlsClasses () {
      const { isShareble, isEditable } = this
      
      return [
        'app-card__controls',
        { 'app-card__controls--flex-end': !isEditable && isShareble },
      ]
    },
  },

  methods: {
    ...mapMutations([
      'setSelectedCard',
      'setViewlVisibility',
    ]),

    onEdit () {
      this.setViewlVisibility({
        isHomePageVisible: false,
        isCardEditVisible: true,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-card {
  position: relative;
  padding: 24px 20px 20px;
  color: #232322;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  border-radius: 20px;

  &__avatar {
    width: 115px;
    height: 115px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__name {
    margin: 0 0 6px;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }

  &__position {
    margin: 0 0 21px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }

  &__descr {
    margin: 0 0 21px;
    font-size: 12px;
    line-height: 14px;
  }

  &__meeting-wrapper {
    display: flex;

    .bi-geo-alt-fill {
      flex-shrink: 0;
      margin-right: 10px;
    }
  }

  &__meeting-info {
    margin: 0;
    font-size: 12px;
    line-height: 14px;
  }

  &__controls {
    position: absolute;
    top: 14px;
    left: 20px;
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--flex-end {
      justify-content: flex-end;
    }
  }

  &__button {
    padding: 0;
    background-color: transparent;
    border: none;
    color: inherit;
    text-decoration: none;
  }
}
</style>