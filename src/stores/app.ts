// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    userId: null,
    userName: null,
    bearerToken: null,
  }),
  getters: {
    bearerToken(state) {
      return state.bearerToken;
    },
    userName(state) {
      return state.userName;
    }
  },
  actions: {
    setUser(userInfo: { userId: null; userName: null; bearerToken: null; }) {
      this.userId = userInfo.userId;
      this.userName = userInfo.userName;
      this.bearerToken = userInfo.bearerToken;
    }
  }
})
