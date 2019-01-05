<template>
<div>
  <div id='mm'>{{minimsg}}</div>
  <div id='mn' v-bind:style="{fontSize:'24px'}">
    {{content.id}}:{{content.text}}<br>

    <!-- 方法1：v-model 绑定input的value和prop -->
    <input type='text' v-model='value' />

    <!-- 方法2：绑定value和prop之后，再通过函数把event.target.value及时更新到prop -->
    <input type='text' v-bind:value="value" v-on:input="valued" />
    <div>{{value}}</div>

  </div>
</div>
</template>

<script>
export default {
  props: {
    content: Object,
    value: {
      type: String,
      default: 'hahha'

    }
  }, //尝试了props和父级的数据关联
  data() {
    return {
      minimsg: "minimsg是测试的数据"
    }
  },
  methods: {
    valued: function($event) {
      this.value = $event.target.value;

    }
  }
}
</script>
<style>
#mm {
  color: red;

}

#mn {
  color: blue;
}
</style>
