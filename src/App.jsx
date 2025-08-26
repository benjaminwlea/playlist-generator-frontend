import Title from './Components/Title';
import './App.css';
import GeneratedPlaylist from './Components/GeneratedPlaylist';
import Settings from './Components/Settings';

function App() {
  return (
    <div>
      <header align='center'>
        <Title />
      </header>
      

      <main className="main-layout">
        <Settings />
        <GeneratedPlaylist />
      </main>



      
    </div>

  )
}

export default App
