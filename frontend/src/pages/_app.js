import './styles/app.css'
import './styles/Sidebar.css'
import './styles/project.css'
import './styles/experience.css'
import './styles/grid.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-pro-sidebar/dist/css/styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
