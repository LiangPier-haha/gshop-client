<template>
	<div id="app">
		<Header></Header>
		<router-view></router-view>
		<Footer v-show="!$route.meta.isHiedFooter"></Footer>
	</div>
</template>

<script>
	import Header from './components/Header/Header'
	import Footer from './components/Footer/Footer'
	// import {reqBaseCategroy,reqLogin} from './api/index'
	// import  from './store/store'
    export default {
        name: "App",
		async mounted() {
            // const result = await reqBaseCategroy()
			// console.log('result',result.data)
			// const result2 = await reqLogin('13700000000',111111)
			// console.log('result2',result2.data)
		},
		components:{
            Header,
			Footer
		}
    }
</script>

<style scoped>

</style>