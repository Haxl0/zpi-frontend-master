<template>
  <card>
    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">New Data</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="przeplyw_spalin_v1"
              placeholder="487.0"
              v-model="user.przeplyw_spalin_v1"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="ilosc_wapna_kg"
              placeholder="1151.0"
              v-model="user.ilosc_wapna_kg"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="temperatura_spalin_przed_reaktorem_c_v2"
              placeholder="101.0"
              v-model="user.temperatura_spalin_przed_reaktorem_c_v2"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="powietrze_fluidyzacyjne"
              placeholder="1099.0"
              v-model="user.powietrze_fluidyzacyjne"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="poziom_produktu_koncowego_val"
              placeholder="48.0"
              v-model="user.poziom_produktu_koncowego_val"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="temperatura_spalin_przed_reaktorem_c_v1_val"
              placeholder="101.0"
              v-model="user.temperatura_spalin_przed_reaktorem_c_v1_val"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="poziom_wapna_val"
              placeholder="47.0"
              v-model="user.poziom_wapna_val"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="cisnienie_wody_val"
              placeholder="983.0"
              v-model="user.cisnienie_wody_val"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="zasiarczenie_wegl"
              placeholder="1718.0"
              v-model="user.zasiarczenie_wegl"
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
        przeplyw_spalin_v1: 487.0,
        ilosc_wapna_kg:  1151.0,
        temperatura_spalin_przed_reaktorem_c_v2 : 101.0,
        powietrze_fluidyzacyjne: 1099.0,
        poziom_produktu_koncowego_val :48.0,
        temperatura_spalin_przed_reaktorem_c_v1_val: 101.0,
        poziom_wapna_val: 47.0,
        cisnienie_wody_val: 983.0,
        zasiarczenie_wegl: 1718.0
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
