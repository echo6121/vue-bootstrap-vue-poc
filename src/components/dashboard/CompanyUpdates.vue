<template>
  <b-card class="shadow-sm mt-5 p-4 pb-3">
    <div class="update-card">
      <b-row>
        <b-col cols="12"><h5>Company Updates</h5></b-col>
        <b-col cols="12" class="mt-3" v-for="update in updates" :key="update.title">
         <b-alert :class="update.isAlert ? 'alerts' : 'notification'" show class="updates pl-4 pr-5">
          <i v-show="update.isAlert" class="fa fa-exclamation-circle pr-2 pt-3"></i>
          <i v-show="!update.isAlert" class="fa fa-comments pr-2 pt-3"></i>
          <strong>{{ update.title }}</strong>
          <p class="pt-1">{{ update.content }}</p>
        </b-alert>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="read-more text-right pt-3">
          <a href="#">View all company updates</a>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'companyUpdates',
  data () {
    return {
      updates: [
        {
          isAlert: true,
          title: 'Mainframe down and Leretanet slow.',
          content: 'Users are unable to login into Mainframe. Leretanet accessible, but is running slow. Engineers have been contacted and are working on a solution. ETA 30 min.'
        },
        {
          isAlert: false,
          title: 'Leave Your PC On Wednesday.',
          content: 'Your PC will be scanned every Wednesday Night. Help Desk and Technical Support requests that you leave your PC with the power on over night. The Antivirus has been scheduled.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.update-card {
  .updates {
    border-radius: 4px;
    border-right: solid 1px #e3e3e3!important;
    border-top: solid 1px #e3e3e3!important;
    border-bottom: solid 1px #e3e3e3!important;
  }
  .alerts {
    border-left: solid 9px #b30000!important;
    background-color: #fff2f2;
    color:#b30000
  }
  .notification {
    border-left: solid 9px #336c80!important;
    background-color: #edf7fa;
  }
  p {
    color: #2e2e2e;
    padding-left:28px;
  }
}
</style>
