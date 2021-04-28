<template>
   <div id="programs_incubation">

		<div id="top_section">
			<h1>About the program</h1>
			<div id="top_section__content">
				<img src="~assets/images/programs/wash.png"/>
				<div id="description">
					<h3>
            For WASH Entrepreneurs in Bangladesh
          </h3>
					<p>
            YY Ventures has partnered up with Aqua for All & Bop inc to introduce the 
            <strong>WASH Innovation Challenge</strong>
            for the first time in Bangladesh. This program will support up to 15 teams that have creative and market-driven solutions for the WASH sector in Bangladesh. With this we hope to jointly achieve Sustainable Development Goal 6 – Water and sanitation for all.
					</p>
					<p>
            Aqua for All believes that innovation and public and private capital are needed to bridge the service and finance gaps in the water and sanitation economy. In order to achieve Sustainable Development Goal 6 – Water and sanitation for all, they focus on driving change, together with our stakeholders.
					</p>
				</div>
			</div>
		</div>

		<div id="bottom_section">
			<div id="bottom_section__left">
				<h2>3-day Long Boot Camp</h2>
				<h2>15 Teams</h2>
				<div id="title">
					<h2 class="inner-span">Road to €200,000 in Funding Opportunity</h2>
				</div>
			</div>
			<div id="bottom_section__right">
				<h3>Apply Now</h3>
        <nuxt-link class="arrow" to="/washic/application"></nuxt-link>
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
	font-size: 50px;
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
	/* margin: 0 2rem; */
  padding: 50px;
  padding: clamp(25px, 5vw, 50px);
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

  .arrow {
    &:after, &:before{
      border: solid #efd30a;
      border-width: 0 5px 5px 0;
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
