<template>
<div class="form-screen">
	<v-form v-model="valid">
    <v-container>
      <v-row>
         <v-col lg="12" md="12" sm="12" > 
             <v-row class="pb8">
                <v-col lg="6" md="6" sm="6" > 
                    <div class="label">Name </div>
                </v-col>
                <v-col lg="6" md="6" sm="6"> 
                    <div class="clickcontact"  @click="selectMoreContact()"> <v-icon color="red">mdi-circle</v-icon>Select from contacts </div>
                </v-col>
             </v-row>
          <v-text-field
            v-model="name"
            :rules="nameRules" 
            required
            outlined
            single-line
             @change="updateFormData"
          ></v-text-field>
        </v-col>
 
       <v-col lg="12" md="12" sm="12" v-for="item in emailList" :key="item.id"> 
            <div class="label">Email </div>
          <v-text-field
            v-model="item.email"
            :rules="emailRules"
            single-line
            required
            outlined
            @change="updateFormData"
          ></v-text-field>
        </v-col>
      </v-row>

      <div class="add-email" @click="addMoreEmail(item)" >
            +  Add another Email 
      </div>
 
    </v-container>
  </v-form>
</div> 
</template>
<style scoped lang="scss">
    .form-screen{
        .clickcontact{
			cursor: pointer;
        }
        .add-email{
            color: red;
            cursor: pointer;
        }
        .pb8{
            // padding-bottom: 10px;
            padding:  40px 0px 20px 0px;
        }
    }
		
</style>
<script lang="ts">
	import Vue from "vue"; 

	export default Vue.extend({
    name: 'RightSidebarForm',
	components: {
      }, 
     props: {
        updateForm: { type: Function },
    },
    data: () => ({
        valid: false,
        name: '',
        nameRules: [
            v => !!v || 'Name is required', 
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        emailList: [{
                id : 1,
                email : ""
            }]
    }),
    computed: {
        
        // this.emailList.push(emailObj);
    },

    
    methods: { 

        updateFormData(){
            var data = {
                emails: this.emailList ,
                name: this.name,
                valid :  this.valid
            
            } ; 
            console.log(data);
            this.$emit("updateForm", data); 

        },

        selectMoreContact(){
            this.$emit("selectMoreContact", true); 
        },
        addMoreEmail(){
            let emailObj = {
                id : this.emailList.length +1,
                email : ""
            }
            this.emailList.push(emailObj);
        }, 
    }
  })
</script>
