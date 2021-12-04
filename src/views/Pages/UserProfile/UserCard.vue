<template>
  <b-card no-body class="card-profile">

    <b-card-body class="pt-3">
      <div id="app">
        <ol v-on:click="increasePercent">
          <li v-for="(loading, index) in loading" :key="index">
            <label :class="{ passed: percent >= loading.percent }">
              {{ loading.text }}
            </label>
          </li>
        </ol>
      </div>
    </b-card-body>

  </b-card>
</template>
<script>
export default {
  data() {
    return {
      loading: [
        { text: "Sending request", percent: 10 },
        { text: "Putting new data to ML model", percent: 20 },
        { text: "Testing", percent: 50 },
        { text: "Analysing ", percent: 60 },
        { text: "Sending data back to WebSite", percent: 70 },
        { text: "Displaying data", percent: 90 },
      ],
      percent: 10,
      interval: null,
    }
  },
  methods: {
    increasePercent: function() {
      this.percent += 10
    },
  },
  created() {
    this.interval = setInterval(this.increasePercent, 1000)
  },
}
</script>

<style lang="scss">
li {
  margin: 8px 0;
  font-weight: bolder;
  label {
    opacity: 0.4;
    &.passed {
      opacity: 1;
      text-decoration: line-through;
    }
  }
}
</style>
