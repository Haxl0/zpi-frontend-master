<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">14HTA21CF901</h5>
              </b-col>
            </b-row>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>
      </b-row>
      <div>
        {{ this.bigLineChart.chartData.datasets.data[0].date }}
      </div>
    </b-container>
  </div>

</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';

  export default {
    components: {
      LineChart
    },
    data() {
      return {
        tmpData: [],
        bigLineChart: {
          chartData: {
            datasets: [
              {
                data: [],
                label: 'Performance',
              }
            ],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
      }
    },
    methods: {
      segregateData(){
        let xAxisTable = []
        let yAxisTable = []

        for (let i=0; i<10; i++){
          xAxisTable.push(new Date(this.tmpData[i].data * 1000))
          console.log(xAxisTable)
          yAxisTable.push(this.tmpData[i].value)
        }
        this.bigLineChart.chartData.datasets.data = yAxisTable
        this.bigLineChart.chartData.labels = xAxisTable
        console.log(yAxisTable)
      }
    },
    mounted() {
      axios.get("http://127.0.0.1:8080/hello/dbtest/")
        .then(response => (this.tmpData = response.data))
        .then(console.log(this.tmpData),this.segregateData())
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
