import React, {useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const SignIn = () => {

    let mail = useRef()
    let password = useRef()

    async function handleSubmit(event) {
            event.preventDefault()

            let data = {
                [mail.current.name]: mail.current.value,
                [password.current.name]: password.current.value
            }
            //console.log(data)
            // let url_signIn = 'https://minga-back-446z.onrender.com/auth/signin'
            let url_signIn = '#'
            try {
                await axios.post(url_signIn, data)
                .then(res => {
                    console.log(res)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify({
                        name: res.data.name,
                        mail: res.data.mail,
                        photo: res.data.photo
                    }))
                    })

                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL',
                    text: '¡Usuario online!'
                })

            } catch(error) {
                let err = error.response.data.message
                console.log('Ocurrió un error')
                Swal.fire({
                    icon: 'error',
                    title: '¡Lo sentimos!',
                    text: err
                })
            }
        }


    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <fieldset className="mb-4">
                <legend className="block text-gray-700 font-bold mb-2">Email</legend>
                <input
                    ref={mail}
                    type="email"
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="mail"
                    required
                />
            </fieldset>

            <fieldset className="mb-6">
                <legend className="block text-gray-700 font-bold mb-2">Password</legend>
                <input
                    ref={password}
                    type="password"
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    required
                />
            </fieldset>

            <input
                type="submit"
                value="Sign in"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
        </form>
    </div>
    )
}