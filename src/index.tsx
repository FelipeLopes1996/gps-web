import { RouterProvider } from 'react-router-dom';
import routers from './routes';
import Header from './shared/components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="p-[1.5rem]">
        <RouterProvider router={routers} />
      </div>
    </>
  );
};

export default App;
