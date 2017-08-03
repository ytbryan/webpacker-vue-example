<template>
  <div id='app'>

    <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      track-by="library"
      :custom-label="customLabel"
      >
    </multiselect>
    <pre>{{ value }}</pre>

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options']
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
