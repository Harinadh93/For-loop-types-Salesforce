import { LightningElement,track } from 'lwc';
import getOpportunities from '@salesforce/apex/opportunityList.getOpportunities';

export default class LwcMapListEx1 extends LightningElement {
    @track opplist = [];

    connectedCallback(){

        getOpportunities()
            .then(result=>{
                // alert('the value of result is'+result) ;
                // alert('the value of result is'+ JSON.stringify(result)) ;
      
                this.opplist = result;
   
                // Type -1
                this.opplist.forEach(rec=>{
                alert('current record is '+ JSON.stringify(rec)) ;  
                console.log('current record is 1'+ JSON.stringify(rec));    
        })

                // Type-2

            for(var i=0;i< this.opplist.length;i++){
                alert('current record is 2'+ JSON.stringify(this.opplist[i])) ;    
        }

      // Type-3
            for(var key in this.opplist){
                alert('current record is 3'+ JSON.stringify(this.opplist[key])) ; 
        }

        })
            .catch(error=>{


            })

        }
}