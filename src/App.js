import "./App.css";
import LinkTile from "./LinkTile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col items-center space-y-4">
          <div>
            <img className="w-14 h-14 rounded-full" src="/avatar.jpeg"></img>
          </div>
          <div>
            <h1 className="font-bold text-2xl">John Jamison</h1>
            <p className="text-center italic text-base mt-2">@iamjohnjamison</p>
            <p className="mt-2 text-base">
              Software dev passionate about startups, business, software
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <img className="h-8 w-8" src="/tiktok-icon.png" />
            <img className="h-8 w-8" src="/linkedin.png" />
            <img className="h-8 w-8" src="/instagram.png" />
          </div>
          <div className="w-full space-y-4 mt-4 mx-auto">
            <a
              className="flex items-center justify-center text-center rounded-md border shadow-lg overflow-hidden h-24 bg-green-800"
              href="https://pcpartpicker.com/b/w38J7P"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="p-4">
                <div class="text-md">My PC Build</div>
              </div>
            </a>
            <a
              className="flex items-center justify-center text-center rounded-md border shadow-lg overflow-hidden h-24 bg-green-500"
              href="https://pcpartpicker.com/b/w38J7P"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="p-4">
                <div class="text-md">My PC Build</div>
              </div>
            </a>
            <a
              className="flex items-center justify-center text-center rounded-md border shadow-lg overflow-hidden h-24 bg-green-500"
              href="https://pcpartpicker.com/b/w38J7P"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="p-4">
                <div class="text-md">My PC Build</div>
              </div>
            </a>
            <a
              className="flex items-center justify-center text-center rounded-md border shadow-lg overflow-hidden h-24 bg-green-500"
              href="https://pcpartpicker.com/b/w38J7P"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="p-4">
                <div class="text-md">My PC Build</div>
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
