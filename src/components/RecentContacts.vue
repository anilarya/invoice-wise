<template>
<div>
    
    <div class="main-container">
         <div class="padto"><b> Recent Contacts </b></div>
        <div style="overflow-x:auto; white-space: nowrap;">
            <div class="display"  v-for="item in contacts" :key="item.name">
                <v-avatar
                    color="indigo"
                    size="62"
                    >
                    <span class="white--text headline">{{item.name.charAt(0)}}</span>
                 </v-avatar>
                <div class="label">
                        {{ (item.name && item.name.length) > 5  ? (item.name.substring(0,5) + "..") : item.name }} 
                </div>
            </div>
            
        </div> 
    </div>
</div> 
</template>
<style scoped lang="scss">
		 
        .main-container{
            .padto{
                padding-top: 10px;
            }
            .display{
                display: inline-block;
                padding: 15px;
            }
        }
</style>
<script lang="ts">
	import Vue from "vue"; 
    import HorizontalScroll from 'vue-horizontal-scroll'
    import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
	export default Vue.extend({
    name: 'RecentContacts',
	components: { 
  	},
    data: () => ({
      contacts: [
        {
          text: 'icons',
          name: 'Ramesh',
          id: 1,
        },
        {
          text: 'icons',
          name: 'Sunil',
          id: 2,
        },
        {
          text: 'icons',
          name: 'Sneha',
          id: 3,
        },
        {
          text: 'icons',
          name: 'Arjun',
          id: 4,
        },
        {
          text: 'icons',
          name: 'Enn',
          id: 4,
        },
        {
          text: 'icons',
          name: 'Sneha',
          id: 3,
        },
        {
          text: 'icons',
          name: 'Arjun',
          id: 4,
        },
        {
          text: 'icons',
          name: 'Enn',
          id: 4,
        }
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        }, 
      ], 
    }),
  })
</script>
