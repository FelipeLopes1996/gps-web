
import { RouterProvider } from "react-router-dom";
import routers from './routes'

const App = () => {
  return (
    <RouterProvider router={routers} />
  );
};

export default App;
