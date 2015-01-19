module.exports = {

      
 
 first: function(array,num){

              var arr=[];

              if(num===undefined)return array[0];

              for(var i=0;i<num;i++){
                  arr.push(array[i]);

              }
              return arr;

 },


  //-----------------------

  max : function(array){
     
              var max=0;
        
              for(var i=0;i<array.length;i++){
              if(array[i]>max){

                max=array[i];
                top_num=max;
                }
              }
              return top_num;
},

//===============================
  min : function(array){

              var lowest = array.reduce(function(x,y){
                return x<y ? x : y;
      
              });
  
                return lowest;
},
  intersection : function(array){
      
              var obj={};
              var arr=[];

              for(var i=0;i<arguments.length;i++){
                    
                  for(var j=0;j<arguments[i].length;j++){

                  obj[arguments[i][j]]=obj[arguments[i][j]] || 0;
                  obj[arguments[i][j]]+=1;

                    }

              }
              
              for(var prop in obj){
                  if(obj[prop]==arguments.length)arr.push(Number(prop));
                }
              return arr; 
},

  difference: function(array,array2){

                var arr=[];
                for(var i=0;i<array.length;i++){
                   if(array2.indexOf(array[i])<0)arr.push(array[i]);
     
                }     
                return arr;
 

},

  uniq: function(array){


                var obj={};
                var arr=[];
                for(var i=0;i<array.length;i++)
                    obj[array[i]]=obj[array[i]] || 0;
    
  
                for(var j in obj)
                    arr.push(Number(j));
                return arr;
},

  contains: function(array,arg){

                if(arguments.length==2 && array.indexOf(arg)>=0)return true;
                else return false;
          }
};

  

