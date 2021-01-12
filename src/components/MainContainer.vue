<template>
<div>

	<v-container class="center fill-height">
      <v-row
        align="center"
        justify="center" 
      >
        <v-btn
          color="pink"
          dark v-on:click="updateDrawer" 
        >
          Toggle
        </v-btn>
      </v-row>
    </v-container>

	<RightSidebar> </RightSidebar>
</div> 
</template>
<style scoped lang="scss">
		.center{
			width: 50%;
  			margin: auto;
		}
</style>
<script lang="ts">
	import Vue from "vue";
	import { bus } from '../main'
	import RightSidebar from "./RightSidebar.vue";

	export default Vue.extend({
    name: 'HelloWorld',
	components: {
		RightSidebar
  	},
    data: () => ({
		drawer: null, 
	}),
	
	methods: {
		updateDrawer(value){
			bus.$emit('isDrawerOpen', true);
		}

	}
  })
</script>
