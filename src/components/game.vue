<template>
  <section>
    <Header/>

    <Navigator/>

    <Color/>
  </section>
</template>

<script lang="js">
  import { mapActions } from 'vuex'
  import Header from './Header.vue'
  import Navigator from './Navigator.vue'
  import Color from './Color.vue'

  export default  {
    name: 'src-components-game',
    props: [],
    created() {
      this.start();
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      ...mapActions(['start'])
    },
    computed: {

    },
    components: {
      Header,
      Navigator,
      Color,
    }
}


</script>

<style scoped lang="css">

</style>
