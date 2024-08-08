import PinterestImage from './PinterestImage';

interface PinterestImageProps{
    images: string[];
}

export default function Pinterest({images}:PinterestImageProps) {
  return (
    <div>
        <div className=' flex flex-col items-center justify-center'>
      <div className='w-24 '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIg4wryKAhadHMwRvApsIQppYJLn-8VZvng&usqp=CAU" alt="" />
        </div>
        <div className='border w-60 rounded-full py-2 mb-3'>
            <input className='ml-2 ' type="text" placeholder='Search' />
        </div>
        </div>
        <div className='sm:columns-2 md:columns-3 lg:columns-4'>
            {/* <img className='w-33 mb-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg" alt="" />
            <img className='w-33 mb-4 ' src="https://images.pexels.com/photos/3489072/pexels-photo-3489072.jpeg?cs=srgb&dl=pexels-rok-romih-3489072.jpg&fm=jpg" alt="" />
            <img className='w-33 mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3Nwl1oLkakUTVIGq5dALHn4gf3H-xa9Ikw&usqp=CAU" alt="" />
            <img className='w-33 mb-4' src="https://static.toiimg.com/thumb/msid-102314312,width-400,resizemode-4/102314312.jpg" alt="" />
            <img className='w-33 mb-4' src="https://cdn.zeebiz.com/sites/default/files/2023/05/19/243156-screenshot-2023-05-19-150339.png?im=FitAndFill=(1200,900)" alt="" />
            <img className='w-33 mb-4'src="https://cdn.britannica.com/46/236546-138-E890CA13/did-you-know-lunar-phases-moon.jpg?w=800&h=450&c=crop" alt="" />
            <img className='w-33 mb-4'src="https://cdn.pixabay.com/photo/2020/06/17/02/55/moon-5307922_1280.jpg" alt="" />
            <img className='w-33 mb-4'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hJTA2CbfRCRVqDsiLdKHhK9rWjqeeoGpUw&usqp=CAU" alt="" />
            <img className='w-33 mb-4'src="https://t4.ftcdn.net/jpg/00/78/12/51/360_F_78125119_psPHy3idTHbgqb2hZLdr7lSkC4JR3Pli.jpg" alt="" />
            <img className='w-33 mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt4IU9KrXWbcsGEW-u-ARx5hIH7VxNw5erg&usqp=CAU" alt="" /> */}
            
            {
                images.map((image,index) => (
                    <PinterestImage key={index} src={image}/>
                ))
            }
        </div>
    </div>
  )
}