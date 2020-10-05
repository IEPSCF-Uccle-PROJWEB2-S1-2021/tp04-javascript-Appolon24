function minimum(a,b){
    let min;
    if(a<=b){
      min=a;
    }
    else{
      min=b;
    }
    return min;
    }
    function maximum(a,b){
      let max;
      if(a>=b){
    max=a;
      }
      else{
        max=b;
      }
      return max;
    }
  function reduce(numbers,fn){
      if(numbers.lenght<2){
        return null;
        }
        else{
          let result=fn(numbers[0],numbers[1]);
          if(numbers.length>2);
          for(let i=0; i<numbers.length; i++){
             result=fn(numbers[i],result);
        }
       return result;
      }
    }


