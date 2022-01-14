<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning"></base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
<!--        <b-col class="col-12 pb-3">-->
<!--          <h2 class="text-secondary">Linia spalin</h2>-->
<!--        </b-col>-->
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTA21CF901 (przepływ spalin)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart1.datacollection" :extra-options="bigLineChart1.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTJ11CF912 (ilość wapna)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart2.datacollection" :extra-options="bigLineChart2.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTA23CT001 (temperatura spalin przed reaktorem C)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart3.datacollection" :extra-options="bigLineChart3.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTA23CT002 (temperatura spalin przed reaktorem C)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart4.datacollection" :extra-options="bigLineChart4.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTF15CF001 (powietrze fluidyzacyjne)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart5.datacollection" :extra-options="bigLineChart5.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTP30CL001 (poziom produktu końcowego)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart6.datacollection" :extra-options="bigLineChart6.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTJ10CL001 (poziom wapna)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart7.datacollection" :extra-options="bigLineChart7.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">14HTQ20CP001 (ciśnienie wody)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart8.datacollection" :extra-options="bigLineChart8.extraOptions"></line-chart>
          </card>
        </b-col>
        <b-col xl="4" lg="12" class="mb-4">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="left" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">73HTA10CQ002 (zasiarczenie węgla)</h5>
              </b-col>
            </b-row>
            <line-chart :height="350" :chart-data="bigLineChart9.datacollection" :extra-options="bigLineChart9.extraOptions"></line-chart>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>
<script>
  import LineChart from '@/components/Charts/LineChart';

  export default {
    components: {
      LineChart
    },
    data() {
      return {
        bigLineChart1: {},
        bigLineChart2: {},
        bigLineChart3: {},
        bigLineChart4: {},
        bigLineChart5: {},
        bigLineChart6: {},
        bigLineChart7: {},
        bigLineChart8: {},
        bigLineChart9: {}
      }
    },
    methods: {
      segregateData1(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart1 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff5940",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData2(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart2 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff6040",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData3(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart3 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff6941",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData4(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart4 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff7442",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData5(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart5 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff7f42",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData6(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart6 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff8b43",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData7(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart7 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff9244",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData8(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart8 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ff9d45",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      },
      segregateData9(data) {
        let xAxisTable = [],
          yAxisTable = []

        Object.entries(data).forEach(([i, value]) => {
          xAxisTable.push(value.time.toString())
          yAxisTable.push(parseFloat(value.value))
        });

        this.bigLineChart9 = {
          datacollection: {
            labels: xAxisTable,
            datasets: [
              {
                data: yAxisTable,
                borderColor: "#ffa746",
                borderWidth: 3
              }
            ]
          },
          extraOptions: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: Math.min.apply(Math, yAxisTable) - 10,
                    max: Math.max.apply(Math, yAxisTable) + 10,
                    beginAtZero: false
                  }
                }
              ]
            }
          }
        }

      }
    },
    created() {
      // przeplyw_spalin_v1
      axios
        .get('http://localhost:8089/hello/dbtest/14HTA21CF901?limit=10')
        .then(response => {
          this.segregateData1(response.data)
        })

      // ilosc_wapna
      axios
        .get('http://localhost:8089/hello/dbtest/14HTJ11CF912?limit=10')
        .then(response => {
          this.segregateData2(response.data)
        })

      // temperatura_spalin_przed_reaktorem_c
      axios
        .get('http://localhost:8089/hello/dbtest/14HTA23CT001?limit=10')
        .then(response => {
          this.segregateData3(response.data)
        })

      // temperatura_spalin_przed_reaktorem_c
      axios
        .get('http://localhost:8089/hello/dbtest/14HTA23CT002?limit=10')
        .then(response => {
          this.segregateData4(response.data)
        })

      // powietrze_fluidyzacyjne
      axios
        .get('http://localhost:8089/hello/dbtest/14HTF15CF001?limit=10')
        .then(response => {
          this.segregateData5(response.data)
        })

      // poziom_produktu_koncowego_val
      axios
        .get('http://localhost:8089/hello/dbtest/14HTP30CL001?limit=10')
        .then(response => {
          this.segregateData6(response.data)
        })

      // poziom_wapna_val
      axios
        .get('http://localhost:8089/hello/dbtest/14HTJ10CL001?limit=10')
        .then(response => {
          this.segregateData7(response.data)
        })

      // cisnienie_wody
      axios
        .get('http://localhost:8089/hello/dbtest/14HTQ20CP001?limit=10')
        .then(response => {
          this.segregateData8(response.data)
        })

      // zasiarczenie_wegl
      axios
        .get('http://localhost:8089/hello/dbtest/73HTA10CQ002?limit=10')
        .then(response => {
          this.segregateData9(response.data)
        })
    }
  };
</script>
<style>
  .el-table .cell {
    padding-left: 0px;
    padding-right: 0px;
  }
</style>
