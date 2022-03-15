<template>
	<view>
		<view class="title">附近商家</view>
		<view class="screen">
			<view class="screen_first">
				<view>综合排序<image src="../../../static/icon/xialacaidan.png"></image></view>
				<view>销售高</view>
				<view>速度快</view>
				<view>津贴联盟</view>
			</view>
			<view>筛选</view>
		</view>
	</view>

</template>

<script>
</script>

<style scoped>
	.title{
		font-size:30upx;
	}
	.screen{
		font-size: 25upx;
		color: #808080;
		display: flex;
		justify-content:space-between;
	}
	.screen_first{
		display: flex;
		justify-content: flex-start;
	}
	.screen_first view{
		padding-right: 25upx;
		position: relative;
	}
	.screen_first view:nth-child(1){
		padding-right: 40upx;
	}
	.screen_first view image{
		position: absolute;
		top: 1px;
		right: 5px;
		width: 30upx;
		height: 30upx;
	}
</style>
