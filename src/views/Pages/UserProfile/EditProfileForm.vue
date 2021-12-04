<template>
  <card>
    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">New Data</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Zasiarczenie węgla"
              placeholder="1.5"
              v-model="user.zasiarczenie_wegla"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Ilość wapna - Stage I"
              placeholder="1.0"
              v-model="user.wapno_v1"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="Ilość wapna - Stage II"
              placeholder="1.5"
              v-model="user.wapno_v1"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Zmienna v4"
              placeholder="1.6"
              v-model="user.zmienna_v4"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Zmienna v5"
              placeholder="1.1"
              v-model="user.zmienna_v5"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-col cols="4" class="text-left">
          <a v-on:click="updateProfile" class="btn btn-sm btn-primary">Send data</a>
        </b-col>
      </div>
    </b-form>
    <result :result="result"/>
  </card>

</template>
<script>
import Result from './Result.vue';

export default {
  name: "EditProfileForm",
  data() {
    return {
      user: {
        zasiarczenie_wegla: 1.8,
        wapno_v1: 1.2,
        wapno_v2: 1.5,
        zmienna_v4: 1.9,
        zmienna_v5: 2.0,
      },
      result: 1.0
    };
  },
  components:{
    Result
  },
  methods: {
    updateProfile() {
      axios
        .post("http://127.0.0.1:8080/predict",this.user)
        .then(response =>
        {(
          this.result = response.data),
          console.log(this.result)
        })
    }
  }
};
</script>
<style></style>
