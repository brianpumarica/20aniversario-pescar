import { Link } from 'react-router-dom';

const JugarButton =() => {
  return (
    <Link to={`/category/Pescar`}>
      <button className="w-full md:w-80 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Jugar
      </button>
    </Link>
  );
}


export default JugarButton;
