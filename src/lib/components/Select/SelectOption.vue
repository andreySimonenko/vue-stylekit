<template>
  <div :class="optionClasses" class="select-option" @click="setSelection">
    <button class="select-option__inner"><slot /></button>
  </div>
</template>

<script>
export default {
  inject: ["RtSelect"],
  name: "RtSelectOption",
  props: {
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      localValue: this.text ? this.text : "",
      isSelected: false
    };
  },
  computed: {
    selectedValue() {
      if (this.RtSelect) {
        return this.RtSelect.selectedValue;
      } else {
        return "";
      }
    },
    optionClasses() {
      return {
        "select-option--select": this.isSelected
      };
    }
  },

  watch: {
    selectedValue() {
      this.setIsSelected();
    }
  },
  mounted() {
    this.setValue();
    this.setIsSelected();
  },
  methods: {
    setIsSelected() {
      this.isSelected = this.selectedValue === this.text;
    },
    setValue() {
      this.text = this.getTextContent();
    },
    setSelection() {
      this.RtSelect.setValue({ text: this.text, value: this.key });
    },
    getTextContent() {
      if (this.$el) {
        return this.$el.textContent.trim();
      }
      const slot = this.$slots.default;
      return slot ? slot[0].text.trim() : "";
    }
  }
};
</script>
