<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title"><h1 class="rt-font-hero">Switch</h1></div>
      <div class="app-body">
        <div class="app-row row"><p class="rt-font-h3 rt-col">switch</p></div>
        <div class="app-row row">
          <div class="rt-col"><rt-switch>Интернет</rt-switch></div>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">disabled switch</p>
        </div>
        <div class="app-row row">
          <div class="rt-col">
            <rt-switch :is-disabled="true">Интернет</rt-switch>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const componentsList = {};
import componentsList from "../../componentsList";
export default {
  name: "AppSwitch",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
