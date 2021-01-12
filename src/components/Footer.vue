<template>
<div>
	<v-footer
      v-bind="localAttrs"
      padless  
    >
      <v-card 
        width="100%"  
      > 
        <v-row class="pad">
            <v-col lg="9" md="9" sm="9"> 
                <v-btn @click="cancel"> Cancel </v-btn>
            </v-col>
            <v-spacer> </v-spacer>
            <v-col lg="3" md="3" sm="3" class="right"> 
                <v-btn btn-lg color="red" @click="sendEmail()"> <div class="send"> Send </div> </v-btn> 
            </v-col>
         </v-row>
      </v-card>
    </v-footer>
</div> 
</template>
<style scoped lang="scss">
		.pad{
            margin: 10px;
            .right{
                float: right;
            }
        }
        .send{
            color:  white; 
        }

</style>
<script lang="ts">
	import Vue from "vue";
	import RightSidebar from "./RightSidebar.vue";

	export default Vue.extend({
    name: 'HelloWorld',
	components: {
		RightSidebar
  	},
    data: () => ({
        padless: true,
        variant: 'default',
        importantLinks: [
            {
            text: 'Documentation',
            href: 'https://vuetifyjs.com',
            }, 
        ], 
        }),
        computed: {
            localAttrs () {
                let  attrs = {fixed:  true}
        
                return attrs
            },
        },
        methods: {
            cancel(){ 
                this.$emit('cancel', true)
            },
            sendEmail(){
                this.$emit('sendEmail', {})
            }
        }
  })
</script>
