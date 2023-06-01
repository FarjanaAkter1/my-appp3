import {RecoilRoot} from 'recoil'
import {RedStripe} from './RedStripe'
import { QueryClient,QueryClientProvider } from 'react-query'
import './App.css'
import {BlueStripe} from './BlueStripe'




const queryClient =new QueryClient()

function App (){
return(

<div>

<QueryClientProvider client={queryClient}>
  {/* its props here queryClient */}
  <RecoilRoot>
  <RedStripe/>
  <BlueStripe/>
  </RecoilRoot>
</QueryClientProvider>

</div>


)
}
export default App