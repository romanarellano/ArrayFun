
var inter=require("../dijadash");


describe("inter",function(){

    it("gets all unique values in a series of arrays",function(){

          var a = [1,2,3];
          var b = [5,2,1,4];
          var c = [2,1];

          var d = [2,3,4];
          var e = [5,2];
         
          var unique_nums = inter.intersection(a,b,c);
          expect(unique_nums).toEqual([1,2]);

          var unique_nums2 = inter.intersection(d,e);
          expect(unique_nums2).toEqual([2]);

    });

});