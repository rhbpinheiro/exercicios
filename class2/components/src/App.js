
// import { Logo } from './components/logo/Logo';
//Renomeando um import nomeado
// import { Text as NewText } from './components/text/text';
// import { Link } from './components/link/link';
// import { Link, Logo, Text as NewText} from './components';
import { useState } from 'react'
import './App.css';
const Text = () => (<h1>Welcome</h1>)
function App() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }


  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.logo(password)
  }


  return (
    <div className="App">
      <header className="App-header">
      {/* <Text/>  
      <Logo/>
      <NewText/>
      <Link/> */}
      <form>
        <div>
          <label>
            Email: 
            <input 
              type='email' 
              placeholder='Digite seu Email'
              value={email}
              onChange = {handleEmailChange}
            />
          </label>
          { !email.includes('@')  ? <p>Digite um email válido</p> : ''} 

        </div>
        <div>
        <label>
          Senha: 
            <input 
              type='password' 
              placeholder='Digite sua Senha'
              value = {password}
              onChange = {handlePasswordChange}
             />
          </label>
          { password.length < 6 ? <p>senha deve ter no mínimo 6 cacteres</p> : ''} 

        </div>

    </form> 
      </header>
    </div>
  );
}

export default App;
