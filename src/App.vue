<template>
  <v-app>
    <div class="loading" v-show="isLoading">
      Loading...
    </div>
    <v-app-bar app color="black" dark height="100" style="z-index: 4">
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo_right_long_white.png"
          transition="scale-transition"
          width="390"
        /> -->
        <img id="index_logo" src="./assets/logo_only.png" />
        <div class="social-button-list">
          <v-btn
            class="social-button"
            small
            color="rgba(255, 255, 255, 1)"
            outlined
            fab
            href="https://www.facebook.com/MasterfulStudio"
            target="_blank"
          >
            <font-awesome-icon
              color="white"
              size="lg"
              :icon="['fab', 'facebook-f']"
            />
          </v-btn>
          <v-btn
            class="social-button"
            small
            color="rgba(255, 255, 255, 1)"
            outlined
            fab
            href="https://www.instagram.com/masterful.studio/"
            target="_blank"
          >
            <font-awesome-icon
              color="white"
              size="lg"
              :icon="['fab', 'instagram']"
            />
          </v-btn>
          <v-btn
            class="social-button"
            small
            color="rgba(255, 255, 255, 1)"
            outlined
            fab
            href="https://www.youtube.com/c/masterfulstudio"
            target="_blank"
          >
            <font-awesome-icon
              color="white"
              size="lg"
              :icon="['fab', 'youtube']"
            />
          </v-btn>
        </div>
      </div>

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main style="margin-bottom: 150px">
      <v-container fluid>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
        <Scoring @update="selfUpdate" ref="score" />
      </v-container>
    </v-main>
  </v-app>
</template>
<style >
.loading {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  color: white;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
html {
  touch-action: manipulation;
}
#index_logo {
  height: 70px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.social-button-list {
  display: flex;
}

.social-button-list .v-btn {
  margin: 0 15px 0 15px;
}
@media only screen and (max-width: 600px) {
  .social-button-list .v-btn {
    margin: 0 10px 0 10px;
  }
  #index_logo {
    height: 70px;
    position: absolute;
    right: 5px;
    left: auto;
    transform: none;
  }
}
</style>

<script>
import Scoring from "./components/Scoring";

export default {
  name: "App",
  data() {
    return {
      finalScore: 0,
      isLoading: false,
    };
  },
  components: {
    Scoring,
  },
  methods: {
    selfUpdate(val) {
      this.isLoading = val;
    },
  },
  watch: {
    isLoading: function (val) {
      if (val) {
        setTimeout(() => this.$refs.score.print(), 100);
      }
    },
  },
  created: function () {
    // alert("vue create");
  },
  beforeMount: function () {
    // alert("vue beforeMount");
  },
  mounted: function () {},
};
</script>
