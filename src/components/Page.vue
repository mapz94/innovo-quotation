<template>
  <div>
    <v-card id="printMe">
      <v-img :src="background_1" @click="print()">
        <v-row no-gutters align="stretch">
          <v-col cols="12">
            <v-img v-if="top_strip" :src="top_strip_src">
              <v-img style="margin: 4% 3%" width="25%" contain :src="logo" />
            </v-img>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-img
          width="100%"
          style="position: absolute; bottom: 0"
          :src="banner_src"
        >
        </v-img>
      </v-img>
    </v-card>
  </div>
</template>

<script>
// letter paper 563 pixels x 750 pixels

import top_strip_src from "../assets/vectors/strip_a.svg";
import banner_src from "../assets/vectors/banner.svg";
import background_1 from "../assets/images/background_1.webp";
import logo from "../assets/vectors/logo.svg";

export default {
  props: {
    index: {
      type: Number,
    },
    top_strip: {
      type: Boolean,
    },
    botton_strip: {
      type: Boolean,
    },
    background: {
      type: String,
    },
    banner: {
      type: Boolean,
    },
    features: {
      type: Array,
    },
  },
  data() {
    return {
      top_strip_src,
      banner_src,
      background_1,
      logo,
    };
  },
  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },
  },
};
</script>

<style>
.debug {
  border: solid 2px blue;
}
</style>