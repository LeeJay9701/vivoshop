<template>
  <div>
    <SettlementHeader></SettlementHeader>
    <SettlementAddress></SettlementAddress>
    <SettlementFooter></SettlementFooter>
  </div>
</template>
<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

import SettlementHeader from '../../components/Settlement/SettlementHeader/SettlementHeader.vue';
import SettlementFooter from '../../components/Settlement/SettlementFooter/SettlementFooter.vue';
import SettlementAddress from '../../components/Settlement/SettlementAddress/SettlementAddress.vue';

export default {
  name: 'Settlement',
  components: {
    SettlementHeader,
    SettlementFooter,
    SettlementAddress
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>