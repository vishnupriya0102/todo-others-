
interface PinterestImageProps{
    src:string;
    alt?:string;
}

export default function PinterestImage({src,alt}:PinterestImageProps) {
  return (
    <img className="mb-4" src={src} alt={alt} />
  )
}
// {/* <img className="mb-4" src="https://i.pinimg.com/474x/63/24/4a/63244aa7a3b6ccf9d306e6a867bc0320.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/7f/63/72/7f63723c78df32803d10ed11128fb7bd.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/ec/f0/7b/ecf07bcd6f91d207e712ddc82277409e.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/e2/08/1d/e2081dd7a798340f1a51942a90a1e5fe.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/84/3d/6a/843d6a2e2b44bbb4ccebf5353881bc17.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/12/6b/c4/126bc4ceb000a5a93f5deca7627a4475.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/54/67/b8/5467b8ef57ea0a6530772286ac822907.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/fe/ff/7c/feff7ccc70e5668b98e56f115a4c1386.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/eb/47/33/eb47332473d27801a9e3fb7272824dbb.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/9d/93/9a/9d939ac2d6fd1386750627e0ac2f299a.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/9a/00/3e/9a003e17d8613b4df3601035ea5d2344.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/6b/74/c2/6b74c294d16d5e394083a7b8d9a01d8b.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/50/5c/dc/505cdccb9ca40a8ef0357b7a7c61dd2e.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/ee/62/44/ee62443d5981bdfa64fc9cfc5fcfb97c.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/33/04/d5/3304d57c89c819862e965f5c9200afa5.jpg" />
// <img className="mb-4" src="https://i.pinimg.com/474x/d8/12/36/d81236c21ab0542a988c9434e7967b11.jpg" />
// <img className="mb-4" src="https://source.unsplash.com/random/1" />
// <img className="mb-4" src="https://source.unsplash.com/random/2" />
// <img className="mb-4" src="https://source.unsplash.com/random/3" />
// <img className="mb-4" src="https://source.unsplash.com/random/4" />
// <img className="mb-4" src="https://source.unsplash.com/random/5" />
// <img className="mb-4" src="https://source.unsplash.com/random/6" />
// <img className="mb-4" src="https://source.unsplash.com/random/7" />
// <img className="mb-4" src="https://source.unsplash.com/random/8" />
// <img className="mb-4" src="https://source.unsplash.com/random/9" />
// <img className="mb-4" src="https://source.unsplash.com/random/10" />
// <img className="mb-4" src="https://source.unsplash.com/random/11" />
// <img className="mb-4" src="https://source.unsplash.com/random/12" />
// <img className="mb-4" src="https://source.unsplash.com/random/13" />
// <img className="mb-4" src="https://source.unsplash.com/random/14" />
// <img className="mb-4" src="https://source.unsplash.com/random/15" />
// <img className="mb-4" src="https://source.unsplash.com/random/16" />
// <img className="mb-4" src="https://source.unsplash.com/random/17" />
// <img className="mb-4" src="https://source.unsplash.com/random/18" />
// <img className="mb-4" src="https://source.unsplash.com/random/19" />
// <img className="mb-4" src="https://source.unsplash.com/random/20" />
// <img className="mb-4" src="https://source.unsplash.com/random/21" />
// <img className="mb-4" src="https://source.unsplash.com/random/22" />
// <img className="mb-4" src="https://source.unsplash.com/random/23" />
// <img className="mb-4" src="https://source.unsplash.com/random/24" />
// <img className="mb-4" src="https://source.unsplash.com/random/25" />
// <img className="mb-4" src="https://source.unsplash.com/random/26" />
// <img className="mb-4" src="https://source.unsplash.com/random/27" />
// <img className="mb-4" src="https://source.unsplash.com/random/28" />
// <img className="mb-4" src="https://source.unsplash.com/random/29" />
// <img className="mb-4" src="https://source.unsplash.com/random/30" />
// <img className="mb-4" src="https://source.unsplash.com/random/31" />
// <img className="mb-4" src="https://source.unsplash.com/random/32" />
// <img className="mb-4" src="https://source.unsplash.com/random/33" />
// <img className="mb-4" src="https://source.unsplash.com/random/34" />
// <img className="mb-4" src="https://source.unsplash.com/random/35" />
// <img className="mb-4" src="https://source.unsplash.com/random/36" />
// <img className="mb-4" src="https://source.unsplash.com/random/37" />
// <img className="mb-4" src="https://source.unsplash.com/random/38" />
// <img className="mb-4" src="https://source.unsplash.com/random/39" />
// <img className="mb-4" src="https://source.unsplash.com/random/40" />
// <img className="mb-4"src="https://i.pinimg.com/474x/39/11/6c/39116c247669762f4ce72be4ce2b862e.jpg" /> */}