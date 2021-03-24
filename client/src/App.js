import './App.css';
import  Form  from './components/Form';
import  { GlobalProvider }  from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div>
        <Form />
      </div>
    </GlobalProvider>
  );
}

export default App;
