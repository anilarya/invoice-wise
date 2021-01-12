 <template>

 <div>
     <!-- <div class="contact-selection" v-if="isContactSelection"> -->
    <SelecteContact @back="onBack"> </SelecteContact>
     <!-- </div> -->
     
 <div class="right-side-bar" v-if="!isContactSelection"> 
    
    <v-navigation-drawer
      v-model="drawer"
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
                        Create an invoice 
                    </v-col>
                    <v-col lg="2" md="2" sm="2">
                         <div class="cross"  @click.stop="drawer = !drawer">X</div>
                    </v-col>
                
                </v-row>
            </v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
        <div class="sidebar-container">
            <div >
                Who are you sending the invoice to ?
            </div>

            <div>
                 <RecentContacts> </RecentContacts>
            </div>
            <v-divider></v-divider>
            <RightSidebarForm @updateForm="updateForm"  @selectMoreContact="onSelectMoreContact"></RightSidebarForm>
        </div> 
        <Footer @cancel="onCancel"  @sendEmail="onSendEmail"> 
        </Footer>
    </v-navigation-drawer> 
 </div>
 </div>
</template>
 
 
 <style scoped lang="scss">
    .right-side-bar{
         .sidebar-container{
            padding: 26px;
            padding-bottom: 100px;
        }
        .cross{
            cursor: pointer;
        }
    }
	
</style>
<script lang="ts">
    import Vue from "vue";
    import { bus } from '../main';
    import Footer from "./Footer.vue";
    import RecentContacts from './RecentContacts.vue';
    import RightSidebarForm from './RightSideBarForm.vue';
    import SelecteContact from './SelecteContact.vue';
	export default Vue.extend({
    name: 'RightSidebar',
    components : {
        Footer,
        RecentContacts,
        RightSidebarForm,
        SelecteContact
    },
    
    data: () => ({
    //   drawer: false,
      isContactSelection : false,
  
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
           { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],

        paylaod: {}
    }),

    props: {
        drawer:{
            type: Boolean
        } 
  },

    computed: { 
 
    },
    created (){
        bus.$on('isDrawerOpen', (data) => {
                console.log("data", data);
                this.isContactSelection = false;
                this.drawer = data; 
        })
    },

    methods: { 

        onBack(){
            this.isContactSelection = false; 
             this.drawer = true; 
        },
        updateForm(paylaod1){
            this.payload = paylaod1;
             
        }, 
        onCancel(){
            this.drawer = false; 
        },
        onSelectMoreContact(){ 
            console.log("on seonSelectMoreContact emit");
            this.isContactSelection = true; 
            bus.$emit('isContactSelection',  this.isContactSelection);

        },

        onSendEmail(){  
            console.log("sending email", this.payload);
            //api call
            if(this.payload && !this.payload.valid){ 
                alert("Form not valid");
            }else if(this.payload && this.payload.valid){
                alert("Data Saved successfully");

            }else{
                alert("Please enter details");
            } 
        }, 

        
  
    }
  })
</script>
