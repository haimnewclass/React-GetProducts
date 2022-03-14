import { useEffect } from 'react';
import { useState } from 'react';

let flag=0;

 export const UseEffectSample =(props)=>
{
    
    let [val,setVal] = useState();
    
    const init=()=>{
        console.log('init')
        setVal(1);  
        flag=0;  
    }
         
    useEffect(init,[flag]);
    
    console.log('flag');
    console.log(flag);
return (<div>
    ***
    <button onClick={()=>{
        let counter = val;
        counter++;
        console.log(counter);
        setVal(counter);
    }
}>Add</button>

<button onClick={()=>{
        flag=1;        
        
        console.log('change flag');
        console.log(flag);
        
    }
}>Reset</button>

    counter:{val}
</div>)


}



