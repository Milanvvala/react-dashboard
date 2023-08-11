import { MyAssessment, Overview, PopupForm, Sidebar, Topbar } from './components'
import './styles/App.css'
import './styles/media-query.css'
import ContextAPI from './utils/Context'

export default function App() {

  return (

    <div className='app' id='blur'>
      <ContextAPI>

        <PopupForm />
        <Topbar />
        <Sidebar />
        
        <main>
          <Overview />
          <MyAssessment />
        </main>

      </ContextAPI>
    </div>
  )
  
}
