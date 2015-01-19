

var arrayfun=require('../dijadash');

describe("arrayfun",function(){

  it("Array must return highest number",function(){

        var array= [4,2,8,6];
        var highest = arrayfun.max(array);
        expect(highest).toBe(8);

  });
});




