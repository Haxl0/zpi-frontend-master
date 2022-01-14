<template>
    <b-row>
      <b-col xl="8" class="order-xl-1">
        <card>
          <b-form @submit.prevent="updateProfile">
            <div>
              <b-row>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Przepływ spalin"
                    placeholder="487.0"
                    :valid="true"
                    v-model="user.przeplyw_spalin_v1"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Ilość wapna (kg)"
                    placeholder="1151.0"
                    v-model="user.ilosc_wapna_kg"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Temperatura spalin przed reaktorem (v2)"
                    placeholder="101.0"
                    v-model="user.temperatura_spalin_przed_reaktorem_c_v2"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Powietrze fluidyzacyjne"
                    placeholder="1099.0"
                    v-model="user.powietrze_fluidyzacyjne"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Poziom produktu końcowego"
                    placeholder="48.0"
                    v-model="user.poziom_produktu_koncowego_val"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Temperatura spalin przed reaktorem (v1)"
                    placeholder="101.0"
                    v-model="user.temperatura_spalin_przed_reaktorem_c_v1_val"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Poziom wapna"
                    placeholder="47.0"
                    v-model="user.poziom_wapna_val"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Ciśnienie wody"
                    placeholder="983.0"
                    v-model="user.cisnienie_wody_val"
                  >
                  </base-input>
                </b-col>
                <b-col lg="4">
                  <base-input
                    type="number"
                    label="Zasiarczenie węgla"
                    placeholder="1718.0"
                    v-model="user.zasiarczenie_wegl"
                  >
                  </base-input>
                </b-col>
              </b-row>
              <b-col cols="4" class="pl-0">
                <a v-on:click="updateProfile" class="btn btn-warning text-white">Wyślij</a>
              </b-col>
            </div>
          </b-form>
        </card>
      </b-col>
      <b-col xl="4" class="mt-3 mt-xl-0 order-xl-1">
        <card class="h-100">
          <result :result="result"/>
        </card>
      </b-col>
    </b-row>
</template>

<script>
  import Result from './Result.vue';

  export default {
    name: "EditProfileForm",
    data() {
      return {
        user: {
          przeplyw_spalin_v1: 487,
          ilosc_wapna_kg:  1151,
          temperatura_spalin_przed_reaktorem_c_v2 : 101,
          powietrze_fluidyzacyjne: 1099,
          poziom_produktu_koncowego_val :48,
          temperatura_spalin_przed_reaktorem_c_v1_val: 101,
          poziom_wapna_val: 47,
          cisnienie_wody_val: 983,
          zasiarczenie_wegl: 1718
        },
        result: 1.0
      };
    },
    components: {
      Result
    },
    methods: {
      updateProfile() {
        this.$notify({
          verticalAlign: 'top',
          horizontalAlign: 'right',
          message: 'Wysyłanie request\'a',
          type: 'warning'
        });

        setTimeout(() => {
          this.$notify({
            verticalAlign: 'top',
            horizontalAlign: 'right',
            message: 'Dodawanie danych do modelu',
            type: 'warning'
          });
        }, 100)
        setTimeout(() => {
          this.$notify({
            verticalAlign: 'top',
            horizontalAlign: 'right',
            message: 'Testowanie',
            type: 'warning'
          });
        }, 300)
        setTimeout(() => {
          this.$notify({
            verticalAlign: 'top',
            horizontalAlign: 'right',
            message: 'Analizowanie',
            type: 'warning'
          });
        }, 500)
        setTimeout(() => {
          this.$notify({
            verticalAlign: 'top',
            horizontalAlign: 'right',
            message: 'Odebranie danych z modelu',
            type: 'warning'
          });
        }, 1000)
        setTimeout(() => {
          this.$notify({
            verticalAlign: 'top',
            horizontalAlign: 'right',
            message: 'Wyświetlenie danych',
            type: 'warning'
          });
        }, 1100)

        axios
          .post("http://localhost:8089/predict", this.user)
          .then(response => {
            (this.result = response.data),
              Loading.methods.notifyTopRight()
              // Loading.methods.progress('loaded')

            // console.log(this.result)
          })
      }
    }
  };
</script>
