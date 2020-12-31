import { Fragment } from "react";
import RouterApp from "./Router";
import TrivialState from './context'

function App() {
  return (
    <Fragment>
      <TrivialState>
        < RouterApp/>
      </TrivialState>
    </Fragment>
  );
}

export default App;
