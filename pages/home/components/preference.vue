<template>
	<view>
		<text>为你优选</text>
		<scroll-view :scroll-x="true" class="panel-content" >
				<view class="skill-wrapper">
					<view class="wrapper">
						<image src="../../../static/images/1.jpg"></image>
						<text>面与膳</text>
						<text>[上海路]鱼面5选1</text>
					</view>
				</view>
				<view class="skill-wrapper">
					<view class="wrapper">
						<image src="../../../static/images/1.jpg"></image>
						<text>面与膳</text>
						<text>[上海路]鱼面5选1</text>
					</view>
				</view>
				<view class="skill-wrapper">
					<view class="wrapper">
						<image src="../../../static/images/1.jpg"></image>
						<text>面与膳</text>
						<text>[上海路]鱼面5选1</text>
					</view>
				</view>
				<view class="skill-wrapper">
					<view class="wrapper">
						<image src="../../../static/images/1.jpg"></image>
						<text>面与膳</text>
						<text>[上海路]鱼面5选1</text>
					</view>
				</view>
				<view class="skill-wrapper">
					<view class="wrapper">
						<image src="../../../static/images/1.jpg"></image>
						<text>面与膳</text>
						<text>[上海路]鱼面5选1</text>
					</view>
				</view>
		</scroll-view>
	</view>
</template>

<script>
</script>

<style scoped>
	view{
		overflow: hidden;
	}
	view text{
		font-size: 30upx;
		padding-bottom: 0px;
	}
	.panel-content{
		white-space: nowrap;
	}
	.skill-wrapper{
		width: 55%;
		height: 20vh;
		display: inline-block;
		margin-right: 25upx;
		padding-top: 10upx;
	}
	.wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.wrapper image{
		width: 100%;
		height: 80%;
	}
	.skill-wrapper .wrapper text{
		padding-left: 5upx;
	}
	.skill-wrapper .wrapper text:nth-child(2){
		font-size: 35upx;
	}
	.skill-wrapper .wrapper text:nth-child(3){
		padding-top:5upx;
		font-size: 30upx;
		color: #8F8F94;
	}
	

</style>
