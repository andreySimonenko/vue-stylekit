<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title"><h1 class="rt-font-hero">Textarea</h1></div>
      <div class="app-body">
        <div class="app-row row">
          <div class="col  rt-col-md-3 ">
            <p class="rt-font-h3">Textarea</p>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-6  rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >simple static textarea</span
            >
            <rt-textarea-static
              placeholder="Textarea"
              label="Введите комментарий:"
            />
          </div>
          <div class="rt-col-6  rt-col-md-3 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >static textarea with error</span
            >
            <rt-textarea-static
              :has-error="true"
              error-message="textarea error message"
              placeholder="Textarea"
            />
          </div>
        </div>

        <div class="app-row row">
          <div class="col rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >static disabled textarea</span
            >
            <rt-textarea-static
              :disabled="true"
              error-message="textarea error message"
              placeholder="Textarea"
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >dynamic textarea</span
            >
            <rt-textarea placeholder="Textarea" />
          </div>
          <div class="rt-col-4  rt-col-md-2 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >dynamic textarea with error</span
            >
            <rt-textarea
              :has-error="true"
              placeholder="Textarea"
              error-message="textarea error message"
            />
          </div>

          <div class="rt-col-4  rt-col-md-1 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05"
              >dynamic disabled textarea</span
            >
            <rt-textarea
              :disabled="true"
              placeholder="Textarea"
              error-message="textarea error message"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
export default {
  name: "AppTextarea",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
