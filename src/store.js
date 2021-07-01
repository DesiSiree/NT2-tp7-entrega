import { createStore } from 'vuex'

export default createStore({
    state: {
        colors: [],
        isHard: true,
        pickedColor: "",
        messageDisplay: "",
        resetMessage: "New Colors",
        headerColor: ""
    },
    actions: {
        start({dispatch}){
            dispatch('fillColors');
            dispatch('pickedColor');
        },
        reset({ commit, dispatch }) {
            commit('changeMessageDisplay', "");
            commit('changeRestartMessage', "New Colors");
            dispatch('start');
        },
        changeDifficulty({ commit, dispatch }, isHard) {
            commit('changeDifficulty', isHard);
            dispatch('reset');
        },
        selectColor({ commit, state, dispatch }, indexColor) {
            if (state.colors[indexColor] == state.pickedColor){

                commit('changeMessageDisplay', "You Picked Right!");
                commit('changeHeaderColor', state.pickedColor);
                commit('changeRestartMessage', "Play Again!");
                dispatch('setAllColorsTo');
            } else {

                commit('changeMessageDisplay', "Try Again!");
                let colors = state.colors;
                colors[indexColor] = "#000000";
                commit('changeColors', colors);
            }
        },
        setAllColorsTo({state, commit }) {
            let colors = state.colors;
            for (let i = 0; i < colors.length; i++) {
                colors[i] = state.pickedColor;
            }
            commit('changeColors', colors);
        },
        fillColors({ state, getters, commit }){
            let colors = [];
            let quantity = state.isHard ? 6 : 3;
            for (let i = 0; i < quantity; i++) {
              colors.push(getters.randomColor);
            }
            commit('changeColors', colors);
        },
        pickedColor({ commit, getters, state }){
            let pickedColor = state.colors[getters.pickColor];
            commit('pickedColor', pickedColor);
        }
    },
    mutations: {
        changeDifficulty(state, isHard) {
            state.isHard = isHard;
        },
        changeColors(state, colors) {
            state.colors = colors;
        },
        changeHeaderColor(state, color){
            state.headerColor = color;
        },
        changeMessageDisplay(state, message){
            state.messageDisplay = message;
        },
        changeRestartMessage(state, message){
            state.resetMessage = message;
        },
        pickedColor(state, color) {
            state.pickedColor = color;
        }
    },
    getters: {
        randomColor:  (state, getters) => {
            return "rgb(" + getters.randomInt + ", " + getters.randomInt + ", " + getters.randomInt + ")"
        },          
        randomInt: () => {
            return Math.floor(Math.random() * 256);
        },
        pickColor: (state) => {
            return Math.floor(Math.random() * (state.isHard ? 6 : 3));
        },
    }
});