<template>
  <v-container>
    <v-row>
      <v-col><h1>IJRU Scoring Calculator</h1> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>
          DIFFICULTY (D)
          <v-btn depressed dark color="black" @click="reset('d')">
            Reset Difficulty
          </v-btn>
        </h1>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 0.5:</div>
          <number-input
            v-model="dlv0"
            :min="0"
            controls
            @change="cal('d')"
            rounded
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 1:</div>
          <number-input
            v-model="dlv1"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 2:</div>
          <number-input
            v-model="dlv2"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 3:</div>
          <number-input
            v-model="dlv3"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 4:</div>
          <number-input
            v-model="dlv4"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 5:</div>
          <number-input
            v-model="dlv5"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 6:</div>
          <number-input
            v-model="dlv6"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 7:</div>
          <number-input
            v-model="dlv7"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 8:</div>
          <number-input
            v-model="dlv8"
            :min="0"
            controls
            @change="cal('d')"
          ></number-input>
        </div>
      </v-col>
      <v-col>
        <h1>
          Repeated Skill (U)
          <v-btn depressed dark color="black" @click="reset('r')">
            Reset Repeated
          </v-btn>
        </h1>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 3:</div>
          <number-input
            v-model="rlv3"
            :min="0"
            controls
            @change="cal('r')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 4:</div>
          <number-input
            v-model="rlv4"
            :min="0"
            controls
            @change="cal('r')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 5:</div>
          <number-input
            v-model="rlv5"
            :min="0"
            controls
            @change="cal('r')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 6:</div>
          <number-input
            v-model="rlv6"
            :min="0"
            controls
            @change="cal('r')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 7:</div>
          <number-input
            v-model="rlv7"
            :min="0"
            controls
            @change="cal('r')"
          ></number-input>
        </div>
        <div class="d-flex levelBox align-center">
          <div class="text-h6 levelTitle">Level 8:</div>
          <number-input
            v-model="rlv8"
            :min="0"
            controls
            @change="cal('r')"
          ></number-input>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><h3>Difficulty score : {{ difficultyScore }}</h3></v-col
      >
      <v-col
        ><h3>Repeated Skill score : {{ repeatedScore }}</h3></v-col
      >
    </v-row>
    <h1 class="mt-3">
      PRESENTATION (P)
      <v-btn depressed dark color="black" @click="reset('p')">
        Reset Presentation
      </v-btn>
    </h1>
    <!-- down Form/Execution down -->
    <v-row>
      <v-col
        ><h3>
          Form/Execution :
          <v-btn depressed dark color="black" @click="reset('pf')">
            Reset Form/Execution
          </v-btn>
        </h3>
        <div class="pre-table">
          <div class="text-h6 text-center pre-table-col">
            <div class="text-h6 levelTitle text-center">+</div>
            <number-input
              style="margin: auto"
              v-model="pFormPlus"
              :min="0"
              controls
              center
              @change="cal('pf')"
            ></number-input>
          </div>

          <div class="text-h6 pre-table-col text-center">
            <div class="text-h6 levelTitle text-center">Tick</div>
            <number-input
              style="margin: auto"
              v-model="pFormTick"
              :min="0"
              controls
              center
              @change="cal('pf')"
            ></number-input>
          </div>

          <div class="text-h6 pre-table-col text-center">
            <div class="text-h6 levelTitle text-center">-</div>
            <number-input
              style="margin: auto"
              v-model="pFormMinus"
              :min="0"
              controls
              center
              @change="cal('pf')"
            ></number-input>
          </div>
        </div>

        <!-- {{ pFormScore }} -->
      </v-col>
    </v-row>
    <!-- up Form/Execution up-->

    <!-- down Entertainment down -->
    <v-row>
      <v-col
        ><h3>
          Entertainment :
          <v-btn depressed dark color="black" @click="reset('pe')">
            Reset Entertainment
          </v-btn>
        </h3>
        <div class="pre-table">
          <div class="text-h6 text-center pre-table-col">
            <div class="text-h6 levelTitle text-center">+</div>
            <number-input
              style="margin: auto"
              v-model="pEnterPlus"
              :min="0"
              controls
              center
              @change="cal('pe')"
            ></number-input>
          </div>

          <div class="text-h6 pre-table-col text-center">
            <div class="text-h6 levelTitle text-center">Tick</div>
            <number-input
              style="margin: auto"
              v-model="pEnterTick"
              :min="0"
              controls
              center
              @change="cal('pe')"
            ></number-input>
          </div>

          <div class="text-h6 pre-table-col text-center">
            <div class="text-h6 levelTitle text-center">-</div>
            <number-input
              style="margin: auto"
              v-model="pEnterMinus"
              :min="0"
              controls
              center
              @change="cal('pe')"
            ></number-input>
          </div>
        </div>

        <!-- {{ pEnterScore }} -->
      </v-col>
    </v-row>
    <!-- up Form/Execution up -->

    <!-- down Musicality down -->
    <v-row>
      <v-col
        ><h3>
          Musicality :
          <v-btn depressed dark color="black" @click="reset('pm')">
            Reset Musicality
          </v-btn>
        </h3>
        <div class="pre-table">
          <div class="text-h6 text-center pre-table-col">
            <div class="text-h6 levelTitle text-center">+</div>
            <number-input
              style="margin: auto"
              v-model="pMusicPlus"
              :min="0"
              controls
              center
              @change="cal('pm')"
            ></number-input>
          </div>

          <div class="text-h6 pre-table-col text-center">
            <div class="text-h6 levelTitle text-center">Tick</div>
            <number-input
              style="margin: auto"
              v-model="pMusicTick"
              :min="0"
              controls
              center
              @change="cal('pm')"
            ></number-input>
          </div>

          <div class="text-h6 pre-table-col text-center">
            <div class="text-h6 levelTitle text-center">-</div>
            <number-input
              style="margin: auto"
              v-model="pMusicMinus"
              :min="0"
              controls
              center
              @change="cal('pm')"
            ></number-input>
          </div>
        </div>

        <!-- {{ pMusicScore }} -->
      </v-col>
    </v-row>
    <!-- up Musicality up -->

    <!-- down Presentation Score down -->
    <v-row>
      <v-col
        ><h3>Presentation score : {{ presentationScore }}</h3></v-col
      >
    </v-row>
    <!-- up Presentation Score up -->

    <h1 class="mt-3">
      REQUIRED ELEMENTS (Q)
      <v-btn depressed dark color="black" @click="reset('re')">
        Reset REQUIRED ELEMENTS
      </v-btn>
    </h1>
    <v-row>
      <v-col>
        <div class="d-flex">
          <div class="levelTitle"></div>
          <div class="text-h levelTitle text-center">( 0 - 4 )</div>
        </div>
        <div class="d-flex align-center">
          <div class="text-h6 levelTitle">Multiples</div>
          <div class="text-h6 levelTitle">
            <number-input
              style="margin: auto"
              v-model="rM"
              :min="0"
              :max="4"
              controls
              center
              @change="cal('re')"
            ></number-input>
          </div>
        </div>
        <div class="d-flex align-center">
          <div class="text-h6 levelTitle">Gymnastics/Power</div>
          <div class="text-h6 levelTitle">
            <number-input
              style="margin: auto"
              v-model="rGAP"
              :min="0"
              :max="4"
              controls
              center
              @change="cal('re')"
            ></number-input>
          </div>
        </div>
        <div class="d-flex align-center">
          <div class="text-h6 levelTitle">Wraps/Releases</div>
          <div class="text-h6 levelTitle">
            <number-input
              style="margin: auto"
              v-model="rWAR"
              :min="0"
              :max="4"
              controls
              center
              @change="cal('re')"
            ></number-input>
          </div>
        </div>
      </v-col>
    </v-row>

    <h1 class="mt-3">
      DEDUCTION (M)
      <v-btn depressed dark color="black" @click="reset('de')">
        Reset DEDUCTION
      </v-btn>
    </h1>
    <v-row>
      <v-col
        ><div class="d-flex align-center">
          <div class="text-h6 levelTitle">Mistake</div>
          <div class="text-h6 levelTitle">
            <number-input
              style="margin: auto"
              v-model="miss"
              :min="0"
              controls
              center
              @change="cal('re')"
            ></number-input>
          </div>
        </div>
        <div class="d-flex align-center">
          <h3>Deduction score : {{ deductionScore }}</h3>
        </div></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Scoring",
  props: ["finalScore"],
  data: () => ({
    dlv0: 0,
    dlv1: 0,
    dlv2: 0,
    dlv3: 0,
    dlv4: 0,
    dlv5: 0,
    dlv6: 0,
    dlv7: 0,
    dlv8: 0,
    difficultyScore: 0,
    rlv3: 0,
    rlv4: 0,
    rlv5: 0,
    rlv6: 0,
    rlv7: 0,
    rlv8: 0,
    repeatedScore: 0,
    pFormPlus: 0,
    pFormTick: 0,
    pFormMinus: 0,
    pFormScore: 0,
    pEnterPlus: 0,
    pEnterTick: 0,
    pEnterMinus: 0,
    pEnterScore: 0,
    pMusicPlus: 0,
    pMusicTick: 0,
    pMusicMinus: 0,
    pMusicScore: 0,
    presentationScore: 0,
    rM: 0,
    rGAP: 0,
    rWAR: 0,
    requiredScore: 0,
    miss: 0,
    deductionScore: 0,
  }),
  methods: {
    reset(type) {
      if (type == "d" || type == "all") {
        this.dlv0 = 0;
        this.dlv1 = 0;
        this.dlv2 = 0;
        this.dlv3 = 0;
        this.dlv4 = 0;
        this.dlv5 = 0;
        this.dlv6 = 0;
        this.dlv7 = 0;
        this.dlv8 = 0;
      }
      if (type == "r" || type == "all") {
        this.rlv3 = 0;
        this.rlv4 = 0;
        this.rlv5 = 0;
        this.rlv6 = 0;
        this.rlv7 = 0;
        this.rlv8 = 0;
      }
      if (type == "p" || type == "all") {
        this.pFormPlus = 0;
        this.pFormTick = 0;
        this.pFormMinus = 0;
        this.pEnterPlus = 0;
        this.pEnterTick = 0;
        this.pEnterMinus = 0;
        this.pMusicPlus = 0;
        this.pMusicTick = 0;
        this.pMusicMinus = 0;
      }
      if (type == "pf" || type == "all") {
        this.pFormPlus = 0;
        this.pFormTick = 0;
        this.pFormMinus = 0;
      }
      if (type == "pe" || type == "all") {
        this.pEnterPlus = 0;
        this.pEnterTick = 0;
        this.pEnterMinus = 0;
      }
      if (type == "pm" || type == "all") {
        this.pMusicPlus = 0;
        this.pMusicTick = 0;
        this.pMusicMinus = 0;
      }
      if (type == "re" || type == "all") {
        this.rM = 0;
        this.rGAP = 0;
        this.rWAR = 0;
      }
      if (type == "de" || type == "all") {
        this.miss = 0;
      }
    },
    cal(type) {
      var l0 = 0;
      var l1 = 0;
      var l2 = 0;
      var l3 = 0;
      var l4 = 0;
      var l5 = 0;
      var l6 = 0;
      var l7 = 0;
      var l8 = 0;
      if (type == "d") {
        l0 = this.dlv0 * 0.13; //this.round(0.1 * Math.pow(1.8, 0.5) * this.dlv0, 2);
        l1 = this.dlv1 * 0.18; //this.round(0.1 * Math.pow(1.8, 1) * this.dlv1, 2);
        l2 = this.dlv2 * 0.32; //this.round(0.1 * Math.pow(1.8, 2) * this.dlv2, 2);
        l3 = this.dlv3 * 0.58; //this.round(0.1 * Math.pow(1.8, 3) * this.dlv3, 2);
        l4 = this.dlv4 * 1.05; //this.round(0.1 * Math.pow(1.8, 4) * this.dlv4, 2);
        l5 = this.dlv5 * 1.89; //this.round(0.1 * Math.pow(1.8, 5) * this.dlv5, 2);
        l6 = this.dlv6 * 3.4; //this.round(0.1 * Math.pow(1.8, 6) * this.dlv6, 2);
        l7 = this.dlv7 * 6.12; //this.round(0.1 * Math.pow(1.8, 7) * this.dlv7, 2);
        l8 = this.dlv8 * 11.02; //this.round(0.1 * Math.pow(1.8, 8) * this.dlv8, 2);
      } else if (type == "r") {
        l3 = this.round(0.1 * Math.pow(1.8, 3) * this.rlv3, 2);
        l4 = this.round(0.1 * Math.pow(1.8, 4) * this.rlv4, 2);
        l5 = this.round(0.1 * Math.pow(1.8, 5) * this.rlv5, 2);
        l6 = this.round(0.1 * Math.pow(1.8, 6) * this.rlv6, 2);
        l7 = this.round(0.1 * Math.pow(1.8, 7) * this.rlv7, 2);
        l8 = this.round(0.1 * Math.pow(1.8, 8) * this.rlv8, 2);
      } else if (type == "pf") {
        if (this.pFormPlus + this.pFormTick + this.pFormMinus == 0) {
          this.pFormScore = 0;
        } else {
          this.pFormScore =
            (this.pFormPlus * 1 + this.pFormMinus * -1) /
            (this.pFormPlus + this.pFormTick + this.pFormMinus);
        }
      } else if (type == "pe") {
        if (this.pEnterPlus + this.pEnterTick + this.pEnterMinus == 0) {
          this.pEnterScore = 0;
        } else {
          this.pEnterScore =
            (this.pEnterPlus * 1 + this.pEnterMinus * -1) /
            (this.pEnterPlus + this.pEnterTick + this.pEnterMinus);
        }
      } else if (type == "pm") {
        if (this.pMusicPlus + this.pMusicTick + this.pMusicMinus == 0) {
          this.pMusicScore = 0;
        } else {
          this.pMusicScore =
            (this.pMusicPlus * 1 + this.pMusicMinus * -1) /
            (this.pMusicPlus + this.pMusicTick + this.pMusicMinus);
        }
      }

      //presentation Score
      this.presentationScore =
        1 +
        ((0.6 / 2) * this.pFormScore +
          (0.6 / 4) * this.pEnterScore +
          (0.6 / 4) * this.pMusicScore);

      //DEDUCTION
      this.deductionScore = 1 - this.miss * 0.025;

      //REQUIRED ELEMENTS
      this.requiredScore =
        1 - (4 - this.rM + (4 - this.rGAP) + (4 - this.rWAR)) * 0.025;

      // var m = 0.025 * this.miss;
      if (type == "d") {
        // this.difficultyScore = this.round(
        //   l0 + l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8,
        //   4
        // );
        this.difficultyScore = l0 + l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8;
      } else if (type == "r") {
        this.repeatedScore = this.round(
          l0 + l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8,
          4
        );
      }
      let score = {
        finalScore:
          (this.difficultyScore - this.repeatedScore) *
          this.presentationScore *
          this.deductionScore *
          this.requiredScore,
      };

      this.$emit("updateScore", score);

      // this.finalScore =
      //   (this.difficultyScore - this.repeatedScore) *
      //   this.presentationScore *
      //   this.deductionScore *
      //   this.requiredScore;
    },
    round(number, precision) {
      return Math.round(+number + "e" + precision) / Math.pow(10, precision);
      //same as:
      //return Number(Math.round(+number + 'e' + precision) + 'e-' + precision);
    },
  },
};
</script>

<style scoped>
.levelBox {
  margin-top: 5px;
}
.levelTitle {
  width: 180px;
  word-wrap: break-word;
}
.pre-table-col {
  width: 180px;
}
.number-input {
  width: 150px;
}

.pre-table {
  display: flex;
}

@media only screen and (max-width: 600px) {
  .levelTitle {
    width: 120px;
  }
  .pre-table {
    display: block;
  }
  .pre-table-col {
    display: flex;
    width: auto;
  }
}
</style>
