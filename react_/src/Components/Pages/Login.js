import { Link } from 'react-router-dom'
import { useState, useEffect ,useContext} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ApiService from '../../data/ApiService';
import { Clients, Users } from '../../data/dataFromDB'
import { ReactDOM } from 'react';
import AuthContext from '../AuthContext';
import Modal from 'react-modal';

export default function Login({showPopup}) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const users = Users()
  const clients = Clients()
  const [modal,setIsmModal] = useState(false)
  const [error,setError] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMes,setErrorMes] = useState('')
  const [token, setToken] = useCookies(['mytoken'])
  let navigate = useNavigate()
  useEffect(() => {   
    var user_token = token.myId
    console.log('Login User token is', user_token)
    console.log('Data type', typeof (token['myId']))

  }, [token])


  const loginBtn = (event) => {
    event.preventDefault();
    console.log(users)
    let filterUsers = users.filter((user) => {
         return clients.some((client) => {
            console.log(client)
             if(client.iduser == user.iduser && client.liste_noire == 1)
                 console.log("black list client");
            else if(client.iduser == user.iduser && client.liste_noire == 0)
                 return user  
         })
    })
    console.log(filterUsers)
    if (username && password) {
      //if the user is in black list he can not enter : 
      console.log(filterUsers)
      let user_valid = filterUsers.filter((user) => username == user.login && user.mdp == password )
      if(user_valid.length>0) {
        setToken('myId', user_valid[0].iduser);
        console.log('Login ...', user_valid[0].iduser);
        console.log("user is valid : ")
        window.location.reload()
      } else {
        setError(true)
        setErrorMes('Login or username is incorrect')
      }
    } else {
      setError(true)
      setErrorMes('Login and username are required')
    }
  }

  return (
    < Modal className={`relative `} isOpen={showPopup}   >
      <div className="flex flex-col justify-center items-center h-screen fixed inset-0 bg-gray-900 bg-opacity-75">
        <div className="sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <p className='mb-2 text-red-500'>{error ? errorMes : ''}</p>
          <form >
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium mb-2">
                Username:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="border border-gray-400 p-2 rounded w-full"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password:
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  className="border border-gray-400 p-2 rounded w-full"
                  placeholder="Password"

                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <a href="#" className="text-purple-700 underline">
                Forgot Password?
              </a>
            </div>
            <button
              onClick={loginBtn}
              className="bg-gradient-to-r from-cyan-500 py-2 px-4 to-blue-600 cursor-pointer text-white rounded w-full"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              Not a member?{' '}
              <a className="text-purple-700 underline"
              >

                <Link to="/signUp">Signup</Link>
              </a>
            </div>
              <div className="mt-4 text-center">
                <a className="text-purple-700 underline"
                >

                  <Link onClick={() => window.location.reload()}>Return to menu</Link>
                </a>
              </div>
          </form>
        </div>
      </div>
    </Modal >
  );
}

