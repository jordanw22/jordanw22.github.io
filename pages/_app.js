import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className = "main">
      <Component { ...pageProps } />
    </div>
      <img src="https://media1.giphy.com/media/Kl1ywyDrt8mbe/giphy.gif" className="vh-100 vw-100 position-fixed" />
    </>
  )
}

export default MyApp
