const accumulator = {
    result: 0,
     sum(arg){
      for(let i = 0; i < arguments.length; i++){
        this.result += arguments[i];
       }
      return this.result;
     },
     div(arg){
      for(let i = 0; i < arguments.length; i++){
        this.result /= arguments[i];
        
       }
        return this.result;
     },
     mul(arg){
      for(let i = 0; i < arguments.length; i++){
        this.result *= arguments[i];
        
       }
        return this.result;
     },
      diff(arg){
      for(let i = 0; i < arguments.length; i++){
        this.result -= arguments[i];
       }
        return this.result;
       },
     reset(){
      return this.result = 0;
     }
   }
   
   console.log(accumulator.sum(2,2)); // 4
   console.log(accumulator.sum(2,2,3)); // 11
   console.log(accumulator.div(2)); // 5.5
   console.log(accumulator.reset()); // 0