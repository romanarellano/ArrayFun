

var whatever = require("../dijadash");


describe("whatever",function(){


  it("Array must return lowest value",function(){

      var array= [4,2,8,6];
      var lowest= whatever.min(array);
      expect(lowest).toEqual(2);

  });

});