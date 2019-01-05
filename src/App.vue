<template>
<div id='app'>
  <img src="./assets/logo.png">
  <router-view />
  <Helloss></Helloss>
  <mini v-for='content in contents' v-bind:content='content'></mini>
  <div>{{test}}</div>
  <button v-on:click='click()'>button</button>
  <div v-if='seen'>{{compute()}}</div>
</div>
</template>

<script>
import Helloss from './components/HelloWorld'
import Mini from '@/components/mini'
export default {

  data() {
    return {
      test: 'nihaoya',
      seen: true,
      contents: [{
          id: 1,
          text: '呵呵哒'
        },
        {
          id: 2,
          text: '你妹的'
        },
      ],


    }
  },
  components: {
    Helloss,
    Mini,
  },
  methods: {
    click: function() {
      alert('hello');
    },
    compute: function() {
      let result = 8 * 9
      return result;
    },



  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e58;
  margin-top: 60px;
}
</style>
