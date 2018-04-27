"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObserveProperty_1 = require("../src/ObserveProperty");
function getObject() {
    var obj = {
        name: 'test',
        surName: 'test 2'
    };
    setTimeout(function () {
        obj.name = 'From Creator';
    }, 2000);
    return obj;
}
var obj = getObject();
var observer = new ObserveProperty_1.ObserveProperty(obj);
var sub$ = observer.observe('name').subscribe(function (value) {
    console.log('Subscription');
    if (value === 'Test 6') {
        sub$.unsubscribe();
    }
    console.log(value);
});
obj.name = "test 2";
setTimeout(function () {
    obj.name = "Test 6";
    obj.name = "Test 10";
}, 2000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nZW9yZ2VmbG9yb3MvRG9jdW1lbnRzL0ljb25QbGF0Zm9ybXMvbnBtLW1vZHVsZXMvT2JzZXJ2ZVByb3BlcnR5L3NyYy8iLCJzb3VyY2VzIjpbImV4YW1wbGUvZXhhbXBsZVRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMERBQXlEO0FBR3pEO0lBRUksSUFBSSxHQUFHLEdBQUc7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxRQUFRO0tBQ3BCLENBQUM7SUFDSixVQUFVLENBQUM7UUFDUCxHQUFHLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztJQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDVCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRCxJQUFJLEdBQUcsR0FBRyxTQUFTLEVBQUUsQ0FBQztBQUN0QixJQUFNLFFBQVEsR0FBRyxJQUFJLGlDQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsSUFBTSxJQUFJLEdBQWdCLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztJQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLElBQUcsS0FBSyxLQUFLLFFBQVEsRUFBQztRQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdEI7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7QUFDcEIsVUFBVSxDQUFDO0lBQ1AsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDcEIsR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7QUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIn0=