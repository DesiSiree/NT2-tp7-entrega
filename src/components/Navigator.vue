<template>
  <section>
    <div id="navigator">
        <button id="reset" v-on:click="reset()">{{resetMessage}}</button>
        <span id="message">{{messageDisplay}}</span>
        <button id="easy" v-bind:class="{ selected: !isHard }" v-on:click="changeDifficulty(false)">easy</button>
        <button id="hard" v-bind:class="{ selected: isHard }" v-on:click="changeDifficulty(true)">hard</button>
    </div>
  </section>
</template>

<script lang="js">
  import { mapActions } from 'vuex'

  export default  {
    name: 'src-components-navigator',
    props: {
	},
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
		...mapActions([
			'changeDifficulty', // map `this.add()` to `this.$store.dispatch('increment')`
			'reset'
		])
    },
    computed: {
		isHard() {
			return this.$store.state.isHard;
		},
		messageDisplay() {
			return this.$store.state.messageDisplay;
		},
		resetMessage() {
			return this.$store.state.resetMessage;
		}
    },

}


</script>

<style scoped lang="css">
#navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -32px;

}

#reset {
	cursor: pointer;
}

#message {
	color: #06005f;
	display: inline-block;
	width: 20%;
}

#messageBox {
	background-color: steelblue;

	
}
.selected {
	background-color: steelblue;
	color: white;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}

</style>