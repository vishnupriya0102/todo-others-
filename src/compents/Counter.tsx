import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('vishnu');
    const [is_disabled, setDisabled] = useState<boolean>(false);
    //useState
return(
<div>
<h1>{count}</h1>
<h1>{name}</h1>
<h1>
{is_disabled ? 'Input is disabled': 'Everything is working alright'}
</h1>
<button onClick={() => {
setCount(count+1);
setName('Vishnupriya');
setDisabled(false);
}}> increase
</button>
<button onClick={()=>{
setCount(count-1);
setName('Vishnu');
setDisabled(true);
}}> Decrease</button>
</div>
)
}
