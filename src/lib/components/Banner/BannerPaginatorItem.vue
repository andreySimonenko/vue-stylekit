<template>
  <div
    :class="paginatorItemClass"
    :style="paginatorItemStyle"
    class="circle-switcher__item"
    @click="setActiveItem"
  >
    <svg
      :class="paginatorItemIconClass"
      xmlns="http://www.w3.org/2000/svg"
      class="circle-switcher__icon"
      viewBox="0 0 9 9"
    >
      <circle r="4" cx="4.5" cy="4.5" fill="transparent" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "RtBannerPaginatorItem",
  props: {
    index: {
      type: Number,
      default: null
    },
    sleepTime: {
      type: Number,
      default: null
    },
    isPause: {
      type: Boolean,
      default: false
    },
    isStopped: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    RtBanners: {}
  },
  data() {
    return {
      id: Math.random()
        .toString(36)
        .slice(4)
    };
  },
  computed: {
    paginatorItemClass() {
      const classArray = {};
      if (this.RtBanners.activeIndex === this.index) {
        classArray["rt-banner--run-timer"] = true;
      }
      if (this.isPause && !this.isStopped) {
        classArray["rt-banner--pause"] = true;
      }
      if (this.isStopped) {
        classArray["rt-banner--is-stopped"] = true;
      }
      return classArray;
    },
    paginatorItemStyle() {
      if (this.sleepTime && !this.isStopped) {
        return {
          animationDuration: this.sleepTime / 1000 + "s"
        };
      }
    },
    paginatorItemIconClass() {
      const classArray = {};
      if (this.RtBanners.activeIndex === this.index) {
        classArray["circle-switcher__item--active"] = true;
      }
      return classArray;
    }
  },
  methods: {
    setActiveItem() {
      this.RtBanners.setActiveItem(this.index);
    }
  }
};
</script>
