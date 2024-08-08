import { useState } from 'react'

export default function PricingCard() {

    const[is_annual, setAnnual] = useState<boolean>(false);
    return (
    <div className='bg-gray-300 flex items-center justify-center w-full h-full'>
    <div className='bg-white p-5 w-fit border'>
    <input className='ml-64' type="checkbox"
    onChange={(e) =>{setAnnual(e.target.checked);}}/>
    <div className='flex flex-col gap-3'>
    <h1>
    {/* {is_annual?'$24/month':'$288 years'},
    {is_annual? text-green-200: text-red-200}, */}
    {is_annual?(
    <div className='flex flex-row'>
    <h1 className='text-5x1 font-extrabold' >$24</h1>
    <p className='mt-5 '>/mo only</p>
    </div>
    ):
    (
    <div className='flex flex-row'>
    <h1 className='text-5x1 font-extrabold' >$228</h1>
    <p className='mt-5'>/yr only</p>
    </div>
    )}
    </h1>
    <p className='text-gray-500'>Everything's yours, unlimited use.</p>
    <div className='bg-yellow-300 text-black rounded-full w-60'>
    <p className='ml-3 py-1'>SAVE $60 ON YEARLY PLAN</p>
    </div>
    </div>
    </div>
    </div>
    )}