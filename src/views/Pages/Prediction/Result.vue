<template>
  <b-card-body v-if="result.value < 200" class="pt-2 d-flex justify-content-center align-items-center h-100 text-center bg-success">
    <div>
      <b-row>
        <b-col lg="12" class="p-0">
          <h1>Wynik:</h1>
          <br>
          <h2>{{ result.value }}</h2>
        </b-col>
      </b-row>
    </div>
  </b-card-body>
      <b-card-body v-else-if="result.value >=200 && result.value < 400" class="pt-2 d-flex justify-content-center align-items-center h-100 text-center bg-warning ">
        <div>
          <b-row>
            <b-col lg="12" class="p-0">
              <h1>Wynik:</h1>
              <br>
              <h2>{{ result.value }}</h2>
            </b-col>
          </b-row>
        </div>
      </b-card-body>
    <b-card-body v-else class="pt-2 d-flex justify-content-center align-items-center h-100 text-center bg-danger">
      <div>
        <b-row>
          <b-col lg="12" class="p-0">
            <h1>Wynik:</h1>
            <br>
            <h2>{{ result.value }}</h2>
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
