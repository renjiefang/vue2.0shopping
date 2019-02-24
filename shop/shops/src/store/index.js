/**
 * @author renjiefang
 * @date  2019-01-23 22:06
 */
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

export default  new Vuex.Store({

  state: {
    cartCount: 0
  },
   mutations: {
     updateCartCount(state,cartCount) {
        state.cartCount += cartCount
     }
   }
  })
