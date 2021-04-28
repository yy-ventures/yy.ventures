<template>
  <div id="team-section">
    <div class="uk-section">
      <h2 class="team-heading">Team</h2>
      <div
        class="uk-child-width-1-4@m members-container uk-grid-collapse"
        uk-grid
        v-for="(row, index) in team"
        :key="index"
      >
        <div
          class="team-members uk-transform-origin-bottom-right"
          v-for="(member, index) in row"
          :key="index"
        >
          <div class="img-container"><img :src="member.image" alt="" /></div>

          <h3 class="uk-text-center member-name">{{ member.name }}</h3>
          <h3 class="uk-text-center member-designation">
            {{ member.designation }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: {
        rowOne: [
          {
            name: 'Lamiya Morshed',
            designation: 'Chairperson',
            image: '/images/team/Lamiya.png',
          },

          {
            name: 'Shazeeb M Khairul Islam',
            designation: 'Founder & Managing Director',
            image: '/images/team/smk_new.png',
          },
          {
            name: 'Akkie Okma',
            designation: 'Technical Advisor',
            image: '/images/team/akkie-new.png',
          },
          {
            name: 'Tazin Shadid',
            designation: 'Senior Advisor',
            image: '/images/team/tazin_new.png',
          },
        ],
        rowTwo: [
          {
            name: 'Osman Dhali',
            designation: 'Chief of Staff',
            image: '/images/team/dhali_new.png',
          },
          {
            name: 'Sharika Sadaf',
            designation: 'Head of Program',
            image: '/images/team/sharika_new.png',
          },
          {
            name: 'Khalid Hossain',
            designation: 'Director',
            image: '/images/team/khalid-hossain.png',
          },
          {
            name: 'Purbita Jannat',
            designation: 'Executive Business Partner',
            image: '/images/team/purbita_new.png',
          },
        ],
        rowThree: [
          {
            name: 'Samiha Nusrat',
            designation: 'Programs Manager',
            image: '/images/team/raka_new.png',
          },
          {
            name: 'Mazbahul Islam',
            designation: 'Content Manager',
            image: '/images/team/mazbahul_new.png',
          },
          {
            name: 'Ramisa Rahman',
            designation: 'Associate',
            image: '/images/team/ramisa_new.png',
          },
          {
            name: 'Shefaz Been Rahim',
            designation: 'Finance & Accounts Manager',
            image: '/images/team/shefaz_new.png',
          },
        ],
        rowFour: [
          {
            name: 'Raidah Momo Ibrahim',
            designation: 'Associate',
            image: '/images/team/raida_new.png',
          },
          {
            name: 'Mahmud Alam Bappy',
            designation: 'Associate',
            image: '/images/team/bappy_new.png',
          },
          {
            name: 'Antara Islam',
            designation: 'Associate',
            image: '/images/team/antara_new.png',
          },
          {
            name: 'Salman Abedin',
            designation: 'Web Developer',
            image: '/images/team/salman_new.png',
          },
        ],
        rowFive: [
          {
            name: 'Rifah Nanziba',
            designation: 'Social Media Coordinator',
            image: '/images/team/rifah_new.png',
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
@large-down: ~'only screen and (max-width: 959px)';
#team-section {
  .team-members {
    margin-bottom: 20px;
    .img-container {
      background-color: #f0f1f1;
    }
  }
  .team-heading {
    font-size: 60px;
    font-weight: 900;
    padding-left: 40px;
    padding-bottom: 30px;
    color: #3a3b3a;
  }
  .members-container {
    padding: 15px 40px;
    img {
      width: auto;
      max-width: 100%;
    }
    h3 {
      line-height: 20px;
      margin-top: 15px;
    }
    .member-name {
      color: #333;
      font-family: 'Graphik';
      font-weight: bold;
    }
    .member-designation {
      color: #333;
      font-family: 'Graphik';
      font-weight: lighter;
      font-size: 20px;
      margin-top: 0px;
    }
  }
}
</style>
