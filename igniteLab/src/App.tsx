import { Text } from './components/Text'
import { Heading } from './components/Heading'
import './styles/global.css'
import { Header } from "./Sections/Header";
import { Form } from './Sections/Form';
import { Footer } from './Sections/Footer';

function App() {

  return (
    <div className='h-[100vh] bg-gray-900 '>
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default App
