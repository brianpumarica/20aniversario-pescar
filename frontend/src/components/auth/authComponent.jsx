
import axios from 'axios';

function AuthComponent() {
   const auth = true
   const message = "a"

    axios.defaults.withCredentials = true;

/*     useEffect(() => {
        axios.get(`${backendURL}/api/verify`)
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true)
                } else {
                    setAuth(false)
                    setMessage(res.data.Error)
                }
                // Enviar res.data.id al backend
                axios.post(`${backendURL}/api/saveId`, { id: res.data.id })
                    .then(response => {
                        console.log(response.data); 
                    })
                    .catch(error => {
                        console.error("Error al enviar id al backend:", error);
                    });
            })
            .catch(err => console.log(err));
    }, [backendURL]); */

    // Devolver auth y message como un objeto
    return { auth, message };
}

export default AuthComponent;
