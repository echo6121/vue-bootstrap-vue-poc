<template>
  <b-card class="shadow-sm p-4 perfomance-card">
    <b-row class="mb-4">
      <b-col>
        <h5 class="float-left">Performance</h5>
        <b-button-group class="button-group float-right">
          <b-button class="btn-day" @click="currentUnit = 'day'">DAY</b-button>
          <b-button @click="currentUnit = 'month'" class="btn-month">MONTH</b-button>
          <b-button class="btn-yr" @click="currentUnit = 'year'">YEAR</b-button>
        </b-button-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-5 text-right" cold="12" md="5">
        <vue-circle class="w-100 text-center circle-bar"
          :progress="98"
          :size="280"
          :reverse="false"
          line-cap="round"
          :fill="fill"
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="-30"
          insert-mode="append"
          :thickness="15"
          :show-percent="true">
          <h4>9.1k / 9.3k</h4>
        </vue-circle>
        <h4 class="text-capitalize text-center mt-3 tracker-title text-dark">{{ currentUnit }}ly <br/>SLA Tracker</h4>
      </b-col>
      <b-col cols md="7">
        <table class="table mt-5" v-for="performData in performDatas" :key="performData.unit" v-show="performData.unit == currentUnit">
          <tbody>
            <tr>
              <th>Task Completed Last {{ performData.unit }}</th>
                <td>{{ performData.lastCompleted | currency }}</td>
            </tr>
            <tr>
              <th>Task Forcasted This {{ performData.unit }}</th>
                <td>{{ performData.forcasted | currency }}</td>
            </tr>
            <tr>
              <th>Tasks Received This {{ performData.unit }}</th>
                <td>{{ performData.received | currency }}</td>
            </tr>
            <tr>
              <th>Task Completed This {{ performData.unit }}</th>
                <td>{{ performData.completed | currency }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import VueCircle from 'vue2-circle-progress'

export default {
  name: 'performance',
  components: {
    VueCircle
  },
  data () {
    return {
      fill: { color: '#368019' },
      currentUnit: 'month',
      performDatas: [
        {
          unit: 'month',
          lastCompleted: 26750,
          forcasted: 30000,
          received: 34600,
          completed: 25000,
          trackerLower: 91000,
          trackerUpper: 93000
        },
        {
          unit: 'day',
          lastCompleted: 900,
          forcasted: 1000,
          received: 1400,
          completed: 950,
          trackerLower: 3000,
          trackerUpper: 3400
        },
        {
          unit: 'year',
          lastCompleted: 900,
          forcasted: 1000,
          received: 1400,
          completed: 950,
          trackerLower: 3000,
          trackerUpper: 3400
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.perfomance-card {
  .button-group {
    .btn {
      background-color: #f5f5f5;
      color: #909090;
      border: solid 1px #c7c7c7;
      padding-left:35px;
      padding-right:35px;
      &:active, &:focus{
        background-color: #0f3d4d;
        color: #fff;
      }
    }
    .btn-day {
      border-top-left-radius: 18px;
      border-bottom-left-radius: 18px;
    }
    .btn-yr {
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
    }
  }
  .circle-bar {
    color: #6ba1b3;
  }
  h4 {
    color: #5d5d5d;
    margin-top:-10px;
  }
  .tracker-title {
    line-height:2.3rem;
  }
  th {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.43;
    height: 1.43;
    vertical-align: middle;
  }
  td {
    font-size: 40px;
    font-weight: 500;
    text-align: right;
    color: #6ba1b3;
    padding-right: 30px;
    font-size: 3rem;
  }
}
</style>
