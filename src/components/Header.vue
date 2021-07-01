<template>
  <section>
	<div id="header" v-bind:style="{ backgroundColor: headerColor ? headerColor : 'steelblue'}">
		<h1>The Great <br>
			<span id="colorDisplay">{{pickedColor}}</span>
			<br>
			Guessing Game</h1>
	</div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: {
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      headerColor(){
        return this.$store.state.headerColor
      },
      pickedColor(){
        return this.$store.state.pickedColor
      },

    },

}


</script>

<style scoped lang="css">
#header {
	transition: all 0.3s;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
  background: steelblue;
}
#colorDisplay {
	font-size: 200%;
}


</style>