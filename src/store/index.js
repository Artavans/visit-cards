import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        avatar: null,
        name: 'Иванова Инна',
        position: 'Начальник управления развития ИТ-процессов, банк Зенит',
        description: '2 предложения о себе. Пара продающих слов, крутые термины. ITSM, CMDB, BLM, итд. Можно написать про любовь к котам, ну как обычно...',
        date: '18 мая 2021',
        event: 'конференция “Цифровая трансформация в новых условиях”',
        background_image: {
          id: 1,
          url: 'andrii-leonov-PIDH7bZNSqA-unsplash.jpg',
        },
        id: 1,
        links: [
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          }
        ],
      },
      {
        avatar: null,
        name: 'Иванова Инна',
        position: 'Начальник управления развития ИТ-процессов, банк Зенит',
        description: '2 предложения о себе. Пара продающих слов, крутые термины. ITSM, CMDB, BLM, итд. Можно написать про любовь к котам, ну как обычно...',
        date: '18 мая 2021',
        event: 'конференция “Цифровая трансформация в новых условиях”',
        background_image: {
          id: 2,
          url: 'aral-tasher-OAyXVWP5I9U-unsplash.jpg',
        },
        id: 2,
        links: [
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          }
        ],
      },
      {
        avatar: null,
        name: 'Иванова Инна',
        position: 'Начальник управления развития ИТ-процессов, банк Зенит',
        description: '2 предложения о себе. Пара продающих слов, крутые термины. ITSM, CMDB, BLM, итд. Можно написать про любовь к котам, ну как обычно...',
        date: '18 мая 2021',
        event: 'конференция “Цифровая трансформация в новых условиях”',
        background_image: {
          id: 3,
          url: 'brandon-vazquez-EqeJrBFGQd0-unsplash.jpg',
        },
        id: 3,
        links: [
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          },
          {
            name: 'Facebook',
            value: 'https://google.com',
          }
        ],
      },
      {
        avatar: null,
        name: 'Иванова Инна',
        position: 'Начальник управления развития ИТ-процессов, банк Зенит',
        description: '2 предложения о себе. Пара продающих слов, крутые термины. ITSM, CMDB, BLM, итд. Можно написать про любовь к котам, ну как обычно...',
        date: '18 мая 2021',
        event: 'конференция “Цифровая трансформация в новых условиях”',
        background_image: {
          id: 4,
          url: 'guille-pozzi-naJwfMcJ1XU-unsplash.jpg',
        },
        id: 4,
        links: [],
      },
    ],
    selectedCard: null,
    backgroundImages: [
      {
        id: 1,
        url: 'andrii-leonov-PIDH7bZNSqA-unsplash.jpg',
      },
      {
        id: 2,
        url: 'aral-tasher-OAyXVWP5I9U-unsplash.jpg'
      },
      {
        id: 3,
        url: 'brandon-vazquez-EqeJrBFGQd0-unsplash.jpg',
      },
      {
        id: 4,
        url: 'guille-pozzi-naJwfMcJ1XU-unsplash.jpg'
      },
      {
        id: 5,
        url: 'andrii-leonov-PIDH7bZNSqA-unsplash.jpg',
      },
      {
        id: 6,
        url: 'aral-tasher-OAyXVWP5I9U-unsplash.jpg'
      },
      {
        id: 7,
        url: 'brandon-vazquez-EqeJrBFGQd0-unsplash.jpg',
      },
      {
        id: 8,
        url: 'guille-pozzi-naJwfMcJ1XU-unsplash.jpg'
      },
    ],
    links: [
      'Telegram',
      'Facebook',
      'Messenger',
      'Почта',
      'Сайт',
    ],
    views: {
      isHomePageVisible: true,
      isCardEditVisible: false,
      isCardAddVisible: false,
      isCardShareVisible: false,
    },
    slidePosition: 0,
  },
  mutations: {
    addCard (state, payload) {
      state.cards.push(payload)
    },

    updateCard (state, payload) {
      const index = state.cards.findIndex(card => card.id === payload.id)

      if (index !== -1) {
        state.cards.splice(index, 1, payload)
      }
    },

    setSelectedCard (state, payload) {
      state.selectedCard = payload
    },

    setViewlVisibility (state, payload) {
      state.views = Object.assign({}, state.views, payload)
    },

    setSlidePosition (state, payload) {
      state.slidePosition = payload
    },
  },
  getters: {
    currentBackgroundImageId (state) {
      return state.selectedCard?.background_image.id
    }
  },
  actions: {
  },
  modules: {
  }
})
