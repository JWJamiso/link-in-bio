
function LinkTile({link, title}) {
  return (
    <a
      className="flex items-center justify-center text-center rounded-md border border-gray-900 shadow-lg overflow-hidden h-24 bg-slate-400 text-slate-800"
      href={link}
      target="_blank"
    >
      <div className="p-4">
        <div className="text-sm">{title}</div>
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="mx-auto max-w-2xl w-full p-8 ">
        <div className="flex flex-col items-center space-y-4 pt-12">
          <div>
            <img className="w-28 h-28 rounded-full" src="https://pbs.twimg.com/profile_images/1588707853275058176/vxVWhLC2_400x400.jpg"></img>
          </div>
          <div className="text-black text-center">
            <h1 className="font-bold text-2xl ">John Jamison</h1>
            <p className="text-lg font-bold italic mt-2">@iamjohnjamison</p>
            <p className="mt-2 text-base text-white">
              Software dev passionate about startups, business, software
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" target="_blank"><img className="h-8 w-8" src="/tiktok-icon.png" /></a>
            <a href="https://www.linkedin.com/in/johnwjamison/" target="_blank"><img className="h-8 w-8" src="/linkedin.png" /></a>
            <a href="https://www.instagram.com/iamjohnjamison/" target="_blank"><img className="h-8 w-8" src="/instagram.png" /></a>
            
          </div>
          <div className="w-full space-y-4 mt-4 mx-auto px-2">
            <LinkTile link="https://pcpartpicker.com/b/w38J7P" title="My PC Build In Depth"></LinkTile>
            <LinkTile link="https://pcpartpicker.com/b/w38J7P" title="My PC Build In Depth"></LinkTile>
            <LinkTile link="https://pcpartpicker.com/b/w38J7P" title="My PC Build In Depth"></LinkTile>
            <LinkTile link="https://pcpartpicker.com/b/w38J7P" title="My PC Build In Depth"></LinkTile>
          </div>
        </div>
    </div>
  );
}

export default App;
