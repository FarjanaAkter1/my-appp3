import {RecoilRoot} from 'recoil'
import {RedStripe} from './RedStripe'
import { QueryClient,QueryClientProvider } from 'react-query'
import './App.css'
import {BlueStrips} from './BlueStrips'
import {GreenStripe} from './GreenStripe'



const queryClient =new QueryClient()

function App (){
return(

<div>

<QueryClientProvider client={queryClient}>
  {/* its props here queryClient */}
  <RecoilRoot>
  <RedStripe/>
  <BlueStrips/>
  <GreenStripe/>
  </RecoilRoot>
</QueryClientProvider>

</div>


)
}
export default App