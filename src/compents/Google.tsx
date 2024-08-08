
export default function Google() {
  return (
      <div className="flex flex-col gap-4 h-screen item-center bg-gray-800 justify-center" >
        <div className="flex flex-col gap-4 box-border bg-gray-800 justify-center v-screen items-center" > 
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="">
            </img>
            <input id="input" type="text" placeholder="Search google or type url" className="border rounded-full bg-gray-800 text-white px-20">
                <div className="px-40 absolute inset-y- -inset-x-0 flex gap-x-64">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fafafa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdfcfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                </div>
            </input>
        <div className="flex  gap-4">
        <button id ="Search" className= "bg-gray-700 text-white px-4" >
          Google Search
        </button>
        <button id ="lucky" className= "bg-gray-700 text-white px-4" >
          I'm feeling lucky
        </button>
        </div>  
        <div className ="flex ">
        <p className= "bg-gray-800 text-white px-1" >
        Google offered in:
        </p>
        <p className= "bg-gray-800 text-violet-600 px-1" >
        hindi english tamil malayalam telugu 
        </p>
        </div>  
      </div>
    </div> 
  )
}
