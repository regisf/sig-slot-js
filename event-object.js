var EventObject = Class.extend({
     init:function() {
         this.eventCollection=[];
     },

     connect:function(event,func) {
        this.eventCollection.push({eventName:event, _function:func});
     },

     disconnect: function(event) { 
        var result=[];
        for(var i=0;i<this.eventCollection.length;i++) { 
            if (this.eventCollection[i].eventName == event) { 
                result.push(i); 
            } 
        } 
        for(var i=0;i<r.length;i++) { 
            this.eventCollection.splice(i,1);  
        } 
    },

    emit:function(event , args) { 
        for(var i=0; i<this.eventCollection.length;i++) { 
            if (this.eventCollection[i].eventName == event) { 
                this.eventCollection[i]._function(args); 
            } 
        } 
    } 
});
