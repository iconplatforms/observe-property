"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/**
 * @description observe for property changes with the power of Es6 Proxy and RxJS
 * @example
 * const obj = {
    name: 'test',
    surName: 'test 2'
    }
    const observer = new ObserveProperty(obj);
    const sub$:Subscription = observer.observe('name').subscribe((value) =>{
        if(value === 'Test 6'){
            sub$.unsubscribe();
        }
    });
 * @export
 * @class ObserveProperty
 * @template T
 */
var ObserveProperty = /** @class */ (function () {
    /**
     * Creates an instance of ObserveProperty.
     * @param {*} object
     * @memberof ObserveProperty
     */
    function ObserveProperty(target_) {
        this.behaviorSubjectsMap = new Map();
        this.object = target_;
    }
    /**
     * @param {string} key
     * @returns {BehaviorSubject<any>}
     * @description Deletes original value , and creates  a new private  with Accessors
     * @memberof ObserveProperty
     */
    ObserveProperty.prototype.observe = function (key) {
        var behaviorSubject = this.behaviorSubjectsMap.get(key);
        if (!behaviorSubject) {
            behaviorSubject = new rxjs_1.BehaviorSubject(this.object[key]);
            this.behaviorSubjectsMap.set(key, behaviorSubject);
            var proxy_1 = this.behaviorSubjectsMap.get(key);
            var propertyAccessors = {
                enumerable: true,
                configurable: false,
                set: function (value) {
                    // HINT: this keyword is referring to the object
                    if (!proxy_1 || this[key + "_"] === value) {
                        return;
                    }
                    this[key + "_"] = value;
                    proxy_1.next(value);
                },
                get: function () {
                    return this[key + "_"];
                }
            };
            var privateProperty = {
                enumerable: true,
                writable: true,
                configurable: true,
                value: this.object[key]
            };
            var properties = (_a = {},
                _a[key] = propertyAccessors,
                _a[key + "_"] = privateProperty,
                _a);
            Object.defineProperties(this.object, properties);
        }
        return behaviorSubject;
        var _a;
    };
    return ObserveProperty;
}());
exports.ObserveProperty = ObserveProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2ZVByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nZW9yZ2VmbG9yb3MvRG9jdW1lbnRzL0ljb25QbGF0Zm9ybXMvbnBtLW1vZHVsZXMvT2JzZXJ2ZVByb3BlcnR5L3NyYy8iLCJzb3VyY2VzIjpbInNyYy9PYnNlcnZlUHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBc0M7QUFFdEM7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSDtJQWVJOzs7O09BSUc7SUFDSCx5QkFBWSxPQUFTO1FBQ2pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSSxpQ0FBTyxHQUFkLFVBQWdCLEdBQVc7UUFDeEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxJQUFHLENBQUMsZUFBZSxFQUFDO1lBQ2hCLGVBQWUsR0FBRyxJQUFJLHNCQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXJELElBQU0sT0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsSUFBTSxpQkFBaUIsR0FBdUI7Z0JBQzFDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixZQUFZLEVBQUUsS0FBSztnQkFDbEIsR0FBRyxFQUFDLFVBQVUsS0FBUztvQkFDckIsZ0RBQWdEO29CQUNoRCxJQUFHLENBQUMsT0FBSyxJQUFJLElBQUksQ0FBSSxHQUFHLE1BQUcsQ0FBQyxLQUFLLEtBQUssRUFBQzt3QkFDckMsT0FBTztxQkFDUjtvQkFDRCxJQUFJLENBQUksR0FBRyxNQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLE9BQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsR0FBRyxFQUFDO29CQUNBLE9BQU8sSUFBSSxDQUFJLEdBQUcsTUFBRyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7YUFDRixDQUFBO1lBQ0QsSUFBTSxlQUFlLEdBQXVCO2dCQUMxQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFDLElBQUk7Z0JBQ2IsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUV4QixDQUFBO1lBQ0gsSUFBTSxVQUFVO2dCQUNaLEdBQUMsR0FBRyxJQUFHLGlCQUFpQjtnQkFDeEIsR0FBSSxHQUFHLE1BQUcsSUFBRSxlQUFlO21CQUM5QixDQUFBO1lBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEQ7UUFDQyxPQUFPLGVBQWUsQ0FBQzs7SUFDMUIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQW5FYSwwQ0FBZSJ9