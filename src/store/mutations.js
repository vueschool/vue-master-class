import Vue from 'vue'

export default {
  setItem (state, {item, id, resource}) {
    item['.key'] = id
    Vue.set(state[resource].items, id, item)
  }
}
