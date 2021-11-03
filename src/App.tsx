import { Content } from './components/Content'
import './styles/global.scss'
import { SideBar } from './components/SideBar'
import { useState } from 'react';



export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

return (

 <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar 
      OnGenreSelected={setSelectedGenreId} selectedGenreId={selectedGenreId} 
      />
      <Content 
      selectedGenreId={selectedGenreId}
      />
</div>


)
  
}
