
const app = Vue.createApp({
	// 在这里添加数据
	data() {
		return {
			message: [1, 2, 3, 4],
		}
	},
	methods: {
		initData(index) {
			alert('哈哈哈哈' + index)
		},
	},
})
app.mount('#app')