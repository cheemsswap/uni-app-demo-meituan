<template>
	<view>
		<Header></Header>
		<Preference></Preference>
		<Title></Title>
		<Takeout></Takeout>
		<Delicacy></Delicacy>
	</view>
</template>

<script>
	import Header from './components/header.vue'
	import Preference from './components/preference.vue'
	import Title from './components/title.vue'
	import Takeout from './components/takeout.vue'
	import Delicacy from './components/delicacy.vue'
	export default {
		components:{
			Header,
			Preference,
			Title,
			Takeout,
			Delicacy
		}
	}
</script>

<style scoped>
	view{
		padding: 0 10upx;
		overflow: hidden;
	}
</style>
