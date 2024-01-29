import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../Reducer/indexReducer";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose; //para que nuestra app se conecte con la extension del navegador

const store = createStore(
  rootReducer, //este viene del archivo reducer
  composeEnhacer(applyMiddleware(thunkMiddleware))
  //para poder hacer peticiones a una api/server.
);

export default store;

//createStore para crear mi estado global, gestiona y almacena datos para acceder desde cualquier punto de mi app.el nucleo ah.create store toma al menos un argumento(rootReducer) que describe como actualizar la app en respuesta a las accioens.
//compose: combina varias funciones en una sola funcion. Esto se utiliza comúnmente para conectar las herramientas de desarrollo de Redux como redux-devtools-extension.
// applyMiddleware: "capa intermedia".Para realizar tareas como la gestión de acciones asincrónicas o el registro de acciones

//  📙STORE: indexStore.js: hago el composeEnhacer para que nuestra app se conecte al navegador y hacer las peticiones API/SERVER.
//  Este es el objeto central que almacena el >>estado GLOBAL<< de mi aplicacion, es decir no almacena datos(como una DB) mas bien almacena ESTADOS para gestionar los datos en ejecucion en un momento dado. Puedo acceder aca desde cualquier componente de mi app que este envuelto en el <Provider> (por eso envuelvo en mi componente index(o main.jsx), que es el inicio de todo)
