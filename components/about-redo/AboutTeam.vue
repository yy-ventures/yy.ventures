<template>
  <div id="staff">
    <div class="title">Team</div>
    <div class="grid_staff">
      <div
        class="grid_staff__container faded_out"
        v-for="{ id, title, thumb_image, designation, link } in staffs"
        :key="id"
      >
        <div class="grid_staff__container__image_container">
          <div class="mask"></div>
          <img :src="`${imageBaseUrl}${thumb_image}`" />
        </div>
        <div class="grid_staff__container__content_container content-container">
          <div class="grid_staff__container__content_container__info-container">
            <div class="grid_staff__container__content_container__info-container__name name">
              {{ title }}
            </div>
            <div class="grid_staff__container__content_container__info-container__designation designation">
              {{ designation }}
            </div>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="`${link}`"
            uk-icon="icon: linkedin; ratio: 1"
            class="grid_staff__container__content_container__icon icon uk-icon"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="linkedin">
              <path
                d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"
              ></path>
              <path
                d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { add_class_on_focus } from "@/assets/scripts/dom_utils";
import axios from "axios";

export default {
  data: () => ({
    teamMembers: [],
    imageBaseUrl: process.env.imageBaseUrl,
  }),

  props: ["staffs"],

  methods: {
    async getData() {
      const baseUrl = process.env.apiBaseUrl;
      await axios.get(`${baseUrl}/get-teams-data`).then((response) => (this.teamMembers = response.data.data));
      // const staff = await axios.get(`${baseUrl}/get-teams-data`).then((response) => response.data.data);
      // console.log(staff);
    },
  },

  mounted: function () {
    this.getData();

    add_class_on_focus({
      [".faded_out"]: "fade_in",
    });
  },
};
</script>

<style lang="sass" scoped>
#staff
  .grid_staff
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
    grid-gap: 60px 40px

    padding: 30px
    padding-bottom: 100px
    grid-row-gap: 30px

    @media (min-width: 1440px)
      grid-template-columns: repeat(4, minmax(250px, 1fr))

    &__container
      position: relative

      transition: all .3s

      &:hover
        transform: scale(1.1)

      &__image_container
        position: relative
        height: 350px
        background-color: #eaeceb

        @media (min-width: 1920px)
          height: 550px

        .mask
          position: absolute
          height: 100%
          width: 100%
          background-image: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.6))

        img
          height: 100%
          width: 100%
          object-fit: cover

      &__content_container
        height: 100%
        width: 100%
        color: white
        padding: 10px
        transition: all .3s

        display: flex
        justify-content: space-between
        align-items: flex-end
        gap: 10px

        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 111
        &__info-container
          &__name
            font-size: 18px
            font-weight: 700
            transition: all .3s
          &__designation
            font-size: 14px
            transition: all .3s
        &__icon
          color: white
          border: 2px solid white
          border-radius: 5px
          visibility: hidden
          transition-delay: .5s
          transition: all .2s ease-out

    &__container:hover .mask
      background-color: #0090bc6e
    &__container:hover .content-container
      width: 85%
      height: 85%
      border: 2px solid white
    &__container:hover .name
      font-size: 14px
    &__container:hover .designation
      font-size: 11px
    &__container:hover .icon
      visibility: visible
</style>
