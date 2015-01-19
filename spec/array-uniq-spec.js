
var unique = require('../dijadash');

describe("unique",function(){

    it("should contain unique values only from the array",function(){

            var arr=[1,2,1,3,1];
            var result = unique.uniq(arr);
            expect(result).toEqual([1,2,3]);

            var arr1=[1,1,2,2,3];
            var result1= unique.uniq(arr1);
            expect(result1).toEqual([1,2,3]);
    });


});