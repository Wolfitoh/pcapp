import { IonApp, IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonRouterOutlet, IonSearchbar, IonSplitPane, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory } from 'react-router-dom'; // Importamos useHistory
import Menu from './components/Menu';
import MenuPrincipal from './components/MenuPrincipal';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Principal from './pages/principal/Principal';
import Perfil from './pages/perfil/Perfil';
import Search from './pages/search/Search';
import { cartOutline, personOutline } from 'ionicons/icons';
import { useState } from 'react';
import Login from './pages/login/Login';


setupIonicReact();

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const history = useHistory(); // Inicializamos useHistory

  const handleInput = (event: any) => {
    setSearchQuery(event.detail.value!);
    history.push('/search'); // Redirigimos a la página deseada
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main" max-width="100" disabled={true}>
          <Menu />
          <MenuPrincipal />

          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Principal />
            </Route>
            <Route path="/perfil" exact={true}>
              <Perfil />
            </Route>
            <Route path="/search/:query" exact={true}>
              <Search />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
