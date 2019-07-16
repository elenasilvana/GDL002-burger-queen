/*import app from 'firebase/app';
import 'firebase/database'; 

 // Your web app's Firebase configuration
 	const config = {
	    apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		databaseURL: process.env.REACT_APP_DATABASE_URL,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_ID,
  };

  class Firebase {
  	constructor() {
  		app.initializeApp(config);

  		// Get a reference to the database service
		this.db = app.database();
  	}
  	//Menu
  	//aquí debería ir la función que saca la data 
  	breakfastMenu = () => this.db.ref('desayuno');

  	normalMenu = () => this.db.ref('normal');

  	//donde se guardan las ordenes
  	orders = () => this.db.ref('orders');
  	
  }

  export default Firebase;*/