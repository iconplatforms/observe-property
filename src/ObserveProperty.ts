import {BehaviorSubject } from "rxjs";

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
export  class ObserveProperty <T extends any>{

     /** 
     * @type {T}
     * @memberof ObserveProperty
     */
    protected object: T ;

    /**
     * @protected
     * @type {Map< string, BehaviorSubject< any >>}
     * @memberof ObserveProperty
     */
   protected behaviorSubjectsMap: Map< string, BehaviorSubject< any >>;
   
    /**
     * Creates an instance of ObserveProperty.
     * @param {*} object 
     * @memberof ObserveProperty
     */
    constructor(target_:T){
        this.behaviorSubjectsMap = new Map< string, BehaviorSubject<any>>();
       this.object = target_; 
    }
    /** 
     * @param {string} key 
     * @returns {BehaviorSubject<any>} 
     * @description Deletes original value , and creates  a new private  with Accessors
     * @memberof ObserveProperty
     */
    public observe (key: string):BehaviorSubject<any>{
       let behaviorSubject = this.behaviorSubjectsMap.get(key);
        if(!behaviorSubject){
            behaviorSubject = new BehaviorSubject(this.object[key]);
           this.behaviorSubjectsMap.set(key,behaviorSubject);
        
        const proxy = this.behaviorSubjectsMap.get(key);
        const propertyAccessors = <PropertyDescriptor>{
            enumerable: true,
            configurable: false,
             set:function (value:any){
               // HINT: this keyword is referring to the object
               if(!proxy || this[`${key}_`] === value){
                 return;
               }      
               this[`${key}_`] = value;
               proxy.next(value);
            } ,
            get:function ():any{
                return this[`${key}_`];
            } 
          } 
          const privateProperty = <PropertyDescriptor>{
            enumerable: true,
            writable:true,
            configurable: true,
            value: this.object[key]
            
          } 
        const properties: PropertyDescriptorMap = {
            [key] :propertyAccessors,
            [`${key}_`]:privateProperty
        } 
        Object.defineProperties(this.object,properties);
     }
       return behaviorSubject;
    }
}

