<template>
  <div class="rtb-card__hint">
    <div class="rtb-card__hint__icon" @mouseover="this.showHint" @mouseleave="this.hideHint">?</div>
    <div class="rtb-card__hint__text" v-show="active">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Hint",

    methods: {
      showHint(){
        let hint = this.$el;
        hint.closest(".higher-z").style.zIndex = '2';
        this.active = true;
      },
      hideHint(){
        let hint = this.$el;
        hint.closest(".higher-z").style.zIndex = '1';
        this.active = false
      }
    },
    data() {
      return {
        active: false
      };
    },
    computed: {},
    mounted() {},
    created() {},

  };
</script>
