import Invitados from "../components/people/Invitados";
import User from "../components/people/User";
// import UnauthenticatedContent from "../components/auth/UnauthenticatedContent";
// import PropTypes from 'prop-types'; // Import PropTypes for prop type validation

function Dashboard() {
  // function Dashboard({ auth, message }) {
    return (
    <div className="App">
      <div
        className="h-screen 
            * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
            * bg-cover bg-no-repeat bg-center"
      >
        <div className="pb-12">
          <User></User>
          <Invitados></Invitados>
        </div>
      </div>
      {/* {
        auth ?
          <div
            className="h-screen 
            * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
            * bg-cover bg-no-repeat bg-center"
          >
            <div className="pb-12">
              <User></User>
              <Invitados></Invitados>
            </div>
          </div>
          :
          <div>
            <UnauthenticatedContent message={message} />
          </div>
      } */}

    </div>
  );
}
// Dashboard.propTypes = {
//   auth: PropTypes.bool.isRequired,
//   message: PropTypes.string.isRequired,
// };
export default Dashboard;