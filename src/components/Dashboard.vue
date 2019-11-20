<template>
  <div id="page-content-wrapper">
    <div class="container-fluid">
      <b-row>
        <b-col class="title pt-4"><h3>Dashboard</h3></b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="12" md="8">
          <performance></performance>
          <teamPerformance></teamPerformance>
          <companyUpdates></companyUpdates>
        </b-col>
        <b-col cols="12" md="4" class="pl-4">
          <pendingDates></pendingDates>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Performance from './dashboard/Performance'
import TeamPerformance from './dashboard/TeamPerformance'
import CompanyUpdates from './dashboard/CompanyUpdates'
import PendingDates from './dashboard/PendingDates'

export default {
  name: 'dashboard',
  components: {
    'performance': Performance,
    'teamPerformance': TeamPerformance,
    'companyUpdates': CompanyUpdates,
    'pendingDates': PendingDates
  }
}
</script>

<style lang="scss" scoped>
#page-content-wrapper {
  width: auto;
  position: absolute;
  padding: 15px;
  background-color: #fafafa;
  .title {
  color: #0f3d4d;
  }
}

@media(min-width:768px) {
  #page-content-wrapper {
    padding: 20px;
    position: relative;
    margin-right: 0;
  }
}
</style>
