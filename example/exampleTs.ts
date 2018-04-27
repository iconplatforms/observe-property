
import { Subscription} from 'rxjs';
import { ObserveProperty } from '../src/ObserveProperty';


function getObject() {

    let obj = {
        name: 'test',
        surName: 'test 2'
    };
  setTimeout(() => {
      obj.name = 'From Creator';
  }, 2000);
  return obj;
}
let obj = getObject();
const observer = new ObserveProperty(obj);
const sub$:Subscription = observer.observe('name').subscribe((value) =>{
    console.log('Subscription');
    if(value === 'Test 6'){
        sub$.unsubscribe();
    }
    console.log(value);
});
obj.name = "test 2";
setTimeout(() => {
    obj.name = "Test 6";
    obj.name = "Test 10";
}, 2000); 

