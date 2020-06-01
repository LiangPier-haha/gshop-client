<template>
	<div>
		<TypeNav></TypeNav>
		<ListContianer></ListContianer>
		<TodayRecommend></TodayRecommend>
		<Rank></Rank>
		<Like></Like>
		<Floor></Floor>
		<Floor></Floor>
		<Brand></Brand>
	</div>
</template>

<script>
	import TypeNav from '../../components/TyprNav/TypeNav'
	import ListContianer from './ListContianer/ListContianer'
	import TodayRecommend from './TodayRecommend/TodayRecommend'
	import Rank from './Rank/Rank'
	import Like from './Like/Like'
	import Floor from './Floor/Floor'
	import Brand from './Brand/Brand'
    export default {
        name: "Home",
		components: {
            TypeNav,
			ListContianer,
			TodayRecommend,
			Rank,
			Like,
			Floor,
			Brand
		}
    }
</script>
<style lang="less" scoped>
</style>