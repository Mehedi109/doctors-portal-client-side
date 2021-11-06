const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyBDRztfuDRkFz9PcWC1EnZOVV7CS9HFqFo',
//   authDomain: 'doctors-portal-f565c.firebaseapp.com',
//   projectId: 'doctors-portal-f565c',
//   storageBucket: 'doctors-portal-f565c.appspot.com',
//   messagingSenderId: '750679738043',
//   appId: '1:750679738043:web:2aba63899266fb5bf54b9e',
//   measurementId: 'G-5MXJBHL5EX',
// };

export default firebaseConfig;
