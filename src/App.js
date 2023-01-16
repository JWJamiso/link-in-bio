import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className='font-bold text-2xl'>John Jamison</h1>
          <p className="text-center italic text-base mt-2">@iamjohnjamison</p>
          <p className='mt-2 text-base'>Software dev passionate about startups, business, software</p>
        </div>
        <div className='flex space-x-4 mt-4'>
          <img className='h-8 w-8' src='/tiktok-icon.png'/>
          <img className='h-8 w-8' src='/linkedin.png'/>
          <img className='h-8 w-8' src='/instagram.png'/>
        </div>
      </header>
    </div>
  );
}

export default App;
