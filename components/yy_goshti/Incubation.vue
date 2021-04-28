<template>
   <div id="programs_incubation">

		<div id="top_section">
			<h1>YY Goshthi Incubation Program</h1>
			<div id="top_section__content">
				<img src="~assets/images/programs/incubation.png"/>
				<div id="description">
					<h3>
						Created for Early Stage Social Business Entrepreneurs
					</h3>
					<p>
						Our home grown social business incubation methodology 
						engages 10 teams every cohort for a 4-month long rapid, 
						intense and immersive education to accelerate the life 
						cycle of their innovative businesses. We offer world class 
						training, mentoring, community and access to investors 
						to help social entrepreneurs grow exponentially. 
					</p>
					<p>
						Our program is designed by social business leaders and 
						investors to help early stage social entrepreneurs to be 
						ready to launch their minimum viable product and raise 
						the needed seed capital. 
					</p>
				</div>
			</div>
		</div>

		<div id="bottom_section">
			<div id="bottom_section__left">
				<h2>4 Months</h2>
				<h2>10 Teams</h2>
				<div id="title">
					<h2 class="inner-span">1 Life Changing Journey</h2>
				</div>
			</div>
			<div id="bottom_section__right">
				<h3>Application for Fall 2021 Cohort opens in May 2021</h3>
			</div>
		</div>
      </div>
   </div>
</template>

<style lang="less" scoped>
h1,
h2,
h3,
p{
	font-family: "Graphik";
	color: #3a3b3a;
}

h1{
	font-weight: bold;
	font-size: 40px;
	margin-bottom: 3rem;
}

h2{
	margin: 0;
	font-weight: 600;
	font-size: 35px;
}

h3{
	font-weight: 600;
	font-size: 25px;
	color: #d92d58;
}

#programs_incubation{
	background: red;
	margin: 0 2rem;
}

#top_section{
	padding: 5rem 1rem;
   background: #f1f2f2;

	&__content{
		display: flex;
		align-items: flex-start;
		& > *{
			flex: 1;
		}
		img{
			width: 50%;
		}
		#description{
			padding: 2rem;
		}
	}

}

#bottom_section{
	background: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3rem 1rem;

	&__right{
		h3{
			color: #2ba4c5;
		}
	}
}

.inner-span {
   height: 50%;
   background: linear-gradient(to top, #efd30a 40%, transparent 0);
}

#title {
   h2 {
      display: inline-block;
   }
}
</style>
