import { useEffect } from 'react';
import { useState } from 'react';

 export const GetDataFunction =(props)=>
{

    let [val,setVal] = useState();
    let flag=1;

    let load=()=>{
        let url="https://fakestoreapi.com/products";
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setVal({
          isLoaded: true,
          items: result
        });
    
        console.log(result);
        console.log(flag);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
       setVal({
         isLoaded: true,
         error:error
       });
      }
    )

    }

    useEffect(load,[flag]);

    let listToShow = <div>Not Set Yet</div>;
    
    if(val)
    {
        listToShow = val.items.map((i)=>{
        console.log(i);
        return(<div>{i.title}</div>)
    })
    }

return (<div onClick={load}>DataFunction
<button onClick={()=>{
    flag++
    
}} >Reset</button>

 {listToShow}
***
</div>)


}



