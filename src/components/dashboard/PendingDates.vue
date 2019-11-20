<template>
  <b-card class="shadow-sm pt-3 p-4">
    <div class="pending-dates">
      <h5>Pending Economic Loss Dates</h5>
      <b-row>
        <b-col cols="12" class="text-center mt-4 mb-5">
          <img src="../../assets/us-map.svg" alt="us-map" width=90%>
        </b-col>
      </b-row>
      <b-row class="mt-4 text-center" v-for="pendingLossData in pendingLossDatas.slice(0,9)"  :key="pendingLossData.id">
        <b-col cols>
          <div class="date-card overflow-hidden align-middle">
            <div class="date"><h3>{{ getDate(pendingLossData.date) }}</h3></div>
            <p class="month text-uppercase align-baseline">{{ getMonth(pendingLossData.date) }}</p>
          </div>
        </b-col>
        <b-col cols md="9" class="text-left loss-date">
          <p class="loss-title">Economic Loss Date</p>
          <p class="address">{{ pendingLossData.address }}</p>
          <p class="remain-dates">{{ pendingLossData.daysRemaining }} Days Remaining</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right mt-4 read-more">
          <a href="#">View all pending economic loss dates</a>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'pendingDates',
  data () {
    return {
      pendingLossDatas: [
        {
          id: 12221,
          address: 'Ben Hill County, GA',
          daysRemaining: 7,
          date: '10-10-2018'
        },
        {
          id: 12222,
          address: 'Bear Lake County, ID',
          daysRemaining: 28,
          date: '10-31-2018'
        },
        {
          id: 12223,
          address: 'Dundee County, MI',
          daysRemaining: 28,
          date: '10-31-2018'
        },
        {
          id: 12224,
          address: 'Clinton County, NY',
          daysRemaining: 43,
          date: '11-15-2018'
        },
        {
          id: 12225,
          address: 'Yuma County, AZ',
          daysRemaining: 47,
          date: '10-10-2018'
        },
        {
          id: 12226,
          address: 'Howard County, AK',
          daysRemaining: 58,
          date: '11-30-2018'
        },
        {
          id: 12227,
          address: 'Howard County, AK',
          daysRemaining: 58,
          date: '11-30-2018'
        },
        {
          id: 12228,
          address: 'Acadia Parish, LA',
          daysRemaining: 58,
          date: '11-30-2018'
        },
        {
          id: 12229,
          address: 'Humboldt County, CA',
          daysRemaining: 73,
          date: '12-15-2018'
        },
        {
          id: 12230,
          address: 'Lake County. FL',
          daysRemaining: 73,
          date: '12-15-2018'
        },
        {
          id: 12231,
          address: 'Howard County, AK',
          daysRemaining: 58,
          date: '11-30-2018'
        }
      ]
    }
  },
  methods: {
    getMonth (date) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      const arr = date.split('-')
      const monthIndex = parseInt(arr[0]) - 1
      const m = monthNames[monthIndex].substring(0, 3)
      return m
    },
    getDate (date) {
      const arr = date.split('-')
      let d = parseInt(arr[1])
      return d
    }
  }
}
</script>

<style lang="scss" scoped>
.pending-dates {
  .date-card {
    border-radius: 18px;
    width:85px;
    height:85px;
    border: 1px solid #c7c7c7;
    .date {
      background-color:#fff;
      height:60%;
      color:#b30000;
      padding-top:10px;
    }
    .month {
      color:#fff;
      background-color: #acacac;
      height:100%;
      padding-top:3px;
      font-size:1.2rem;
      font-weight: 600;
    }
  }
  p {
    margin:0;
  }
  .loss-title {
    color: #2e2e2e;
    font-size:1.5rem;
  }
  .address {
    font-size:1.1rem;
  }
  .remain-dates {
    color: #b30000;
  }
}
</style>
