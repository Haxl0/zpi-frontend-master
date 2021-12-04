<template>
  <b-card-body class="pt-6">
    <div >
    <b-row>
      <b-col lg="6">
        Result:
      </b-col>
      <b-col lg="6">
        {{result.value}}
      </b-col>
    </b-row>
    </div>
  </b-card-body>
</template>

<script>
export default {
  name: "Result",
  props: {
    result: String
  }
}
</script>
<style></style>
