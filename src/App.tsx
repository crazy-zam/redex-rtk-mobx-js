import { Routes, Route, Link } from 'react-router-dom';
import styles from './app.module.css';
import ReduxPage from './redux/page/ReduxPage';
import RTKPage from './rtk/page/RTKPage';
import MobxPage from './mobx/page/MobxPage';
import { store } from './redux/store';
import rtkStore from './rtk/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div className="App">
      <div className={styles.navbar}>
        <Link className={styles.navLink} to="/redux">
          Redux
        </Link>
        <Link className={styles.navLink} to="/rtk">
          RTK
        </Link>
        <Link className={styles.navLink} to="/mobx">
          Mobx
        </Link>
      </div>
      <Provider store={store}>
        <Routes>
          <Route path="/redux" element={<ReduxPage />} />
        </Routes>
      </Provider>
      <Provider store={rtkStore}>
        <Routes>
          <Route path="/rtk" element={<RTKPage />} />
        </Routes>
      </Provider>
      <Routes>
        <Route path="/mobx" element={<MobxPage />} />
      </Routes>
    </div>
  );
};

export default App;
