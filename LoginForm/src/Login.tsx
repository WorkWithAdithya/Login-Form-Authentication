import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // Initialize Firebase authentication and navigation
  const auth = getAuth();
  const navigate = useNavigate();

  // State variables
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //sign-in with email and password
  const signInWithEmail = async () => {
    setAuthing(true);
    setError('');


    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setAuthing(false);
      });
  };

  return (
    <div className="w-full h-screen flex flex-wrap">
      <div className="w-full h-full bg-black flex flex-col p-20 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
       
          <div className="w-full flex flex-col mb-10 text-white">
            <h3 className="text-4xl font-bold mb-2 text-center">Login</h3>
            <p className="text-lg mb-4 text-center">
              Please Enter Login Details
            </p>
          </div>

       
          <div className="w-full flex flex-col mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-white py-2 mb-4 bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button to log in with email and password */}
          <div className="w-full flex flex-col mb-4">
            <button
              className="w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md p-5 text-center flex items-center justify-center cursor-pointer"
              onClick={signInWithEmail}
              disabled={authing}
            >
              Login !
            </button>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}
        </div>


        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal text-gray-400">
            Don't have an account?{' '}
            <span className="font-semibold text-white cursor-pointer underline">
              <a href="/signup">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
