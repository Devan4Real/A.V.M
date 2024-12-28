import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">Welcome to A.V.M Enterprises</h1>
      <p className="mt-4 text-lg text-gray-600">We provide innovative solutions for businesses across various industries.</p>
      <div className="mt-6">
        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;