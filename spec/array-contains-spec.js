
var container = require('../dijadash');


describe('container',function(){


      it("returns true if second argument is present in collection",function(){

            var arr=[1,2,3];

            var result = container.contains(arr,1);
            expect(result).toBe(true);

      });


});