<template>
  <div class="rt-row-list row" v-bind:class="{ 'rtb-profit-list': isProfitList }"><slot /></div>
</template>
<script>
export default {
  name: "RtRowList",
  props: {
    isProfitList: {
      type: Boolean,
      default: false
    }
  }
};
</script>
