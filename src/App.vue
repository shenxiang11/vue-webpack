<template>
  <div class="abc" @click="handleClick">tel!!!!{{num}}</div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    handleClick () {
      alert(a)
    }
  },
  mounted () {
    console.log('App running')
  }
}
</script>

<style lang="stylus">
body {
  background-color: red;
  .abc {
    background-color: green;
    transform: translate(-50%, -50%);
  }
}
</style>

