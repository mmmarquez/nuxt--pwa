import axios from "~/plugins/axios";

export const state = () => ({
	items: [],
	slides: []
});

export const mutations = {
	setItems(state, items) {
		state.items = items;
	},
	setSlides(state, slides) {
		state.slides = slides;
	}
};

export const actions = {
	async LOAD_ITEMS({ commit }, dataUrl) {
		const response = await axios.get(dataUrl);
		const data = response.data;
		commit("setItems", data);
	},

	async LOAD_SLIDES({ commit }, dataUrl) {
		//https://rmadesign.tv/wp-json/acf/v2/options/slides
		const response = await axios.get(dataUrl);
		const data = response.data;
		commit("setSlides", data);
	}
};
