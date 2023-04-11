
const { createApp } = Vue;

  createApp({
    data() {
      return {
        randomEmail: []

      }
    },

    mounted(){
        for (i=0; i<10; i++){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp)=> {
                    console.log(resp.data.response);  
                    this.randomEmail.push(resp.data.response) 
                })
        }
        console.log(this.randomEmail); 
        
    }

  }).mount('#app')