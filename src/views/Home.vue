<template>
    <div id="app">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <v-overlay
        :absolute="absolute"
        :value="overlay"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-4 font-weight-thin mb-4">Coming Soon</h1>
            <h4 class="subheading">tools for advanced user engagement</h4>
          </v-col>
        </v-row>
      </v-overlay>
    </div>
 </template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>
