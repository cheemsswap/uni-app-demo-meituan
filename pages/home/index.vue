<template>
	<view>
		<Header></Header>
		<Preference :preferenceData="preferenceData"></Preference>
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
	import {getPreference} from '../../api/api.js'
	import listing from '../../api/app.js'
	export default {
		data(){
			return {
				preferenceData:[]
			}
		},
		components:{
			Header,
			Preference,
			Title,
			Takeout,
			Delicacy
		},
		methods:{
			 async getPerference(){
				const res =await listing({
					url:getPreference,
					methods:'GET',
				})
				if(res&&res[1]&&res[1].statusCode == 200)
					this.preferenceData = res[1].data
			}
			
		},
		mounted(){
			this.getPerference()
		}
	}
</script>

<style scoped>
	view{
		padding: 0 10upx;
		overflow: hidden;
	}
</style>
