import { Meme } from '../Meme/Meme';
import { Route, Routes } from 'react-router-dom';
import MemeGenerated from '../MemeGenerated/MemeGenerated';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Meme />} />
      <Route path="generated/:id" element={<MemeGenerated />} />
    </Routes>
  );
};
//
export default App;
 