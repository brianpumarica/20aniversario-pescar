import Invitados from "../components/people/Invitados";
import User from "../components/people/User";
import UnauthenticatedContent from "../components/auth/UnauthenticatedContent";
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation

function Dashboard({ auth, message }) {
  return (
    <div className="App">
      {
        auth ?
          <header>
            <div>
              <h1 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Datos Personales</h1>
              <User></User>
            </div>
            <div>
              <h1 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Mis Invitados</h1>
              <Invitados></Invitados>
            </div>
          </header>
          :
          <div>
            <UnauthenticatedContent message={message} />
          </div>
      }

    </div>
  );
}
Dashboard.propTypes = {
  auth: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};
export default Dashboard;