import { Content } from './components/Content'
import { SideBar } from './components/SideBar'
import { GenresProvider } from './hooks/useContext'
import './styles/global.scss'

export function App() {
 return(
   <GenresProvider>
     
     <Content />
   <SideBar   />
   </ GenresProvider>
   )
  
}
