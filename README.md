# @iconplatforms/observe-property

> observe for property changes with the power of Es6 Proxy nad RxJS 


Uses the [`Proxy` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and [`RxJS` API] (https://reactivex.io/rxjs/).


## Install

```
$ npm install @iconplatforms/observe-property
```


## Usage

```
## TypeScript 
import {ObserveProperty} from '@iconplatforms/observe-property'
import { Subscription } from 'rxjs';

const obj = {
    name: 'test',
    surName: 'test 2'
}

const observer = new ObserveProperty(obj);

const sub$:Subscription = observer.observe('name').subscribe((value) =>{
    if(value === 'Test 6'){
        sub$.unsubscribe();
    }
});

setTimeout(() => {
    obj.name = "Test 6";
    obj.name = "Test 10";
}, 2000); 
```

```
## JavaScript 
"use strict";

var ObserveProperty = require("@iconplatforms/observe-property");

var obj = {
    name: 'test',
    surName: 'test 2'
};
const observer = new ObserveProperty(obj);

const sub$:Subscription = observer.observe('name').subscribe((value) =>{
    if(value === 'Test 6'){
        sub$.unsubscribe();
    }
});

setTimeout(() => {
    obj.name = "Test 6";
    obj.name = "Test 10";
}, 2000); 
```

## API

### observe (property: string):BehaviorSubject<any>{
Type: `Function`
Returns an Observable Object.

## License
MIT © [IconPlatforms](https://www.iconplatforms.com)