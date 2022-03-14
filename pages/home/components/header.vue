<template>
	<view>
		<!-- 定位 -->
		<view class="search-view">
			<image src="../../../static/icon/dingwei.png"></image>
			<text>阿里巴巴淘宝城2期西溪园区</text>
			<text>></text>
		</view>
		<!-- 搜索栏 -->
		<view class="search-cont">
			<view>
				<image src="../../../static/icon/sousuo_active.png"></image>
				<input type="text" placeholder="麻辣烫"  />
			</view>
		</view>
		<!-- 轮播 -->
		<view>
			<swiper @change="swiperchange" :current="swiperdots">
				<swiper-item>
					<view class="swiper-item">
						<view>
							<image src="../../../static/icon/1.png"></image>
							<text>美食</text>
						</view>
						<view>
							<image src="../../../static/icon/2.png"></image>
							<text>电影</text>
						</view>
						<view>
							<image src="../../../static/icon/3.png"></image>
							<text>酒店</text>
						</view>
						<view>
							<image src="../../../static/icon/4.png"></image>
							<text>休闲娱乐</text>
						</view>
						<view>
							<image src="../../../static/icon/5.png"></image>
							<text>外卖</text>
						</view>
						<view>
							<image src="../../../static/icon/6.png"></image>
							<text>ktv</text>
						</view>
						<view>
							<image src="../../../static/icon/7.png"></image>
							<text>周边游</text>
						</view>
						<view>
							<image src="../../../static/icon/8.png"></image>
							<text>母子</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
					<view>
						<image src="../../../static/icon/9.png"></image>
						<text>美食</text>
					</view>
					<view>
						<image src="../../../static/icon/10.png"></image>
						<text>电影</text>
					</view>
					<view>
						<image src="../../../static/icon/11.png"></image>
						<text>酒店</text>
					</view>
					<view>
						<image src="../../../static/icon/12.png"></image>
						<text>休闲娱乐</text>
					</view>
					<view>
						<image src="../../../static/icon/13.png"></image>
						<text>外卖</text>
					</view>
					<view>
						<image src="../../../static/icon/14.png"></image>
						<text>ktv</text>
					</view>
					<view>
						<image src="../../../static/icon/15.png"></image>
						<text>周边游</text>
					</view>
					<view>
						<image src="../../../static/icon/16.png"></image>
						<text>母子</text>
					</view>
					</view>
				</swiper-item>
			</swiper>
			<!-- 轮播指示点 -->
			<view class="swiperdots">
				<view :class="{active:swiperdots==0?true:false}" @click="changeswiperdots(0)"></view>
				<view :class="{active:swiperdots==1?true:false}" @click="changeswiperdots(1)"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				swiperdots:0
			}
		},
		methods:{
			swiperchange(val){
				this.swiperdots =val.detail.current
			},
			changeswiperdots(val){
				this.swiperdots =val
			}
		}
	}
</script>

<style scoped>
	* {
	   touch-action: none;
	}
	.search-view{
		padding-top: 30upx;
		font-size: 30upx;
		font-weight: bold;
	}
	.search-view image{
		width: 30upx;
		height: 30upx;
	}
	.search-view text{
		padding-left: 5px;
	}
	.search-cont view{
		margin-top:20upx;
		display: flex;
		background-color:#F1F1F1;
		height: 50upx;
		justify-content: flex-start;
		border-radius: 10upx;
	}
	.search-cont view image{
		padding-left: 10upx;
		padding-top: 10upx;
		width: 30upx;
		height: 30upx;
	}
	.search-cont view input{
		display: flex;
		font-size: 18upx;
		height: 18upx;
		padding-top: 12upx;
		padding-left: 20upx;
		color: #666;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.swiper-item view{
		width: 25%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.swiper-item view image{
		width: 50upx;
		height: 50upx;
	}
	.swiper-item view text{
		font-size: 20upx;
	}
	.swiperdots{
		width: 100%;
		height: 20upx;
		display: flex;
		justify-content: center;
	}
	.swiperdots view{
		margin-left: 20upx;
		border-radius: 11upx;
		width: 50upx;
		height: 20upx;
		background-color: #F1F1F1;
	}
	.swiperdots view.active{
		margin-left: 20upx;
		border-radius: 11upx;
		width: 50upx;
		height: 20upx;
		background-color: #F0AD4E;
	}
</style>
