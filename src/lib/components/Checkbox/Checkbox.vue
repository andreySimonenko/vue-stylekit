<template>

  <label class="checkbox">
    <rt-ripple ref="ripple" :not-render="isDisabled" />
    <input type="checkbox" :disabled="isDisabled" class="checkbox-element" :checked="checked" @change="changeInput">

    <div class="checkbox-container">
      <slot />
    </div>
  </label>
</template>

<script>
import { default as RippleComponent } from '../Ripple/Ripple.vue';
const componentsList = {};
componentsList[RippleComponent.name] = RippleComponent;
export default {
  name: 'RtCheckbox',
  components: componentsList,

  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeInput($event){
      this.$emit('input', $event.target.checked);
      this.showWave()
    },
    showWave() {
      this.$refs.ripple.startRipple({
        offsetX: 10,
        offsetY: 10
      });
    }
  }
};
</script>