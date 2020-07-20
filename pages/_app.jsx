import App from 'next/app'
import firebase, { FirebaseContext } from '../firebase'
import useAuthentication from '../hooks/useAuthentication'

const MyApp = ({ Component, pageProps }) => {
    const userAuth = useAuthentication()

    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                userAuth
            }}
        >

            <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp