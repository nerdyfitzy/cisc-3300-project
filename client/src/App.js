import "./App.css";
import Page from "./views/page";

function App() {
  return (
    <div className='App flex flex-col justify-center items-center pt-4'>
      <h1 className='text-2xl font-medium text-white justify-self-center'>
        Anonymous Messager
      </h1>
      <Page />
    </div>
  );
}

export default App;
