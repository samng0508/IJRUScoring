<template>
  <v-app>
    <v-app-bar app color="black" dark height="100">
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
        <Scoring
          @updateScore="updateFinalScore"
          :finalScore="finalScore"
          ref="scoreRef"
        />
      </v-container>
    </v-main>
    <v-footer fixed padless elevation="5" height="140">
      <v-container>
        <v-row>
          <v-col
            ><div class="d-flex align-center">
              <h2>
                FINAL RESULT
                <span style="color: red">(R = ( D - U ) × P × M × Q)</span>
                :
              </h2>
              <v-btn
                elevation="2"
                style="padding: 5px; margin-left: 5px"
                value="Reset"
                @click="preResetAll"
                x-large
                text
                dark
                color="black"
                ><font-awesome-icon
                  :icon="['fas', 'circle-notch']"
                  spin
                  size="2x"
                />
                <span style="font-size: 20px; margin-left: 5px">Reset All</span>
              </v-btn>
            </div>

            <div class="d-flex align-center">
              <h3>Final Score : {{ finalScore }}</h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<style >
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
  data: () => ({
    finalScore: 0,
  }),
  components: {
    Scoring,
  },
  methods: {
    updateFinalScore(score) {
      this.finalScore = score.finalScore;
    },
    preResetAll() {
      this.$refs.scoreRef.reset("all");
    },
  },
};
</script>
