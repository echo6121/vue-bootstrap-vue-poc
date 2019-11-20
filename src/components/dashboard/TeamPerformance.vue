<template>
  <b-card class="shadow-sm mt-5 p-4 pb-4">
    <h5 class="mb-2">Team Performance</h5>
    <b-row class="pt-4" v-for="bar in bars" :key="bar.name">
      <b-col cols="12" md="2" class="font-weight-normal">{{ bar.name }}</b-col>
      <b-col clos="12" md="8" class="my-auto">
        <b-progress class="process-bar text-center" :value="bar.value" :variant="bar.variant" :max="max"></b-progress>
      </b-col>
      <b-col cols="12" md="2" class="text-center">{{ bar.value }} / {{ max }}</b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'teamPerformance',
  data () {
    return {
      max: 1000,
      bars: [
        { name: 'David Donovan', variant: 'warning', value: 500 },
        { name: 'Margaret Monto', variant: 'danger', value: 87 },
        { name: 'Jonda Jones', variant: 'info', value: 408 },
        { name: 'Glenda Garcia', variant: 'primary', value: 750 },
        { name: 'Sandra Santiago', variant: 'success', value: 970 }
      ]
    }
  }
}
</script>

<style scoped>
.process-bar{
  background-color: #fafafa;
  height: 20px;
  border-radius: 8px;
  border: solid 1px #e3e3e3;
}

.b-progress-orange {
  background-color: orange!important;
}
</style>
