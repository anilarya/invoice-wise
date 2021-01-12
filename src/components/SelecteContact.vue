<template>
<div class="right-side-bar">  
    <v-navigation-drawer
      v-model="isdrawer"
      absolute
      temporary
      right
      width="500"
    > 
      <template v-slot:prepend>
        <v-list-item two-line> 
          <v-list-item-content>
            <v-list-item-title>
                <v-row class="ml-0">
                    <v-col lg="10" md="10" sm="10"> 
                     <v-icon  @click="back"> mdi mdi-keyboard-backspace</v-icon> Select Contact
                    </v-col>
                    <!-- <v-col lg="2" md="2" sm="2">
                         <div class="cross"  @click.stop="isdrawer = !isdrawer">X</div>
                    </v-col> -->
                
                </v-row>
            </v-list-item-title> 
          </v-list-item-content>
        </v-list-item>

        <v-divider> </v-divider>

        <div class="input-text">
            <v-text-field label="Search"  outlined
            single-line filled prepend-inner-icon="mdi-map-marker"></v-text-field>
        </div>
        <div class="list-contacts">
            <v-list three-line style="max-height: 600px" class="overflow-y-auto">
            <template v-for="(item, index) in items">
                <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
                ></v-subheader>

                <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
                ></v-divider>

                <v-list-item
                v-else
                :key="item.name"
                >
                <!-- <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar> -->

                <v-list-item-content>
                    <v-list-item-title v-html="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>
            </v-list>
        </div>
      </template> 
    </v-navigation-drawer> 
 </div>
</template>
<style scoped lang="scss">
		 .right-side-bar{
             .input-text{
                 padding: 20px;
             }
             .list-contacts{
                 padding-left: 20px;
             }
         }
</style>
<script lang="ts">
	import Vue from "vue"; 
    import { bus } from '../main';
	export default Vue.extend({
    name: 'SelecteContact',
	components: { 
  	},
    data: () => ({
        isdrawer: null,
        ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        }
      ], 
      chars: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      items: [
        { header: 'A' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
         name: 'ABCD',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
         name: 'ABCDEFGH',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
         name: 'ABCDEFGHIJK',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
         name: 'ABGHIJK',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        { header: 'B' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
         name: 'BCDEFHGGJKDJD',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
         name: 'BCDEFHlkjjklasdGGJKDJD',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
         name: 'BCDEFHGGJKDJD',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
         name: 'BCDEFHlkjjklasdGGJKDJD',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
         name: 'BCDEFHGGJKDJD',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
         name: 'BCDEFHlkjjklasdGGJKDJD',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),

    created (){
        bus.$on('isContactSelection', (data) => {
                console.log("isContactSelectionajsdjadajd", data); 
                this.isdrawer = true; 
        })
    },

    methods: { 
        back(){
            console.log("back");
            this.$emit('back', true)
        }
    }
  })
</script>
