
import { lazy, Suspense } from 'react';

import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import { GoogleOAuthProvider } from '@react-oauth/google';

import Loader from './components/loader/Loader';
const Messenger = lazy(() => import('./components/Messenger'));

const clientId = '754135008733-vo1qak76qhle0cpdvoth1ruhq5jr04pt.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
