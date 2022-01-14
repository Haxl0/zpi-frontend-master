<template>
  <b-card-body class="pt-2 d-flex justify-content-center align-items-center h-100 text-center ">
    <div>
      <b-row>
        <b-col lg="12" class="p-0">
          <h1>Wynik:</h1>
          <br>
          <h2  v-if="result.value < 200" class="text-success">{{ result.value }}</h2>
          <h2  v-else-if="result.value >=200 && result.value < 400"  class="text-warning">{{ result.value }}</h2>
          <h2  v-else class="text-danger">{{ result.value }}</h2>
        </b-col>
      </b-row>
    </div>
  </b-card-body>
</template>

<script>
export default {
  name: "Result",
  props: {
    result: Object
  }
}
</script>
