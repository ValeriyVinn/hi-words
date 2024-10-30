import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from 'pages/PageNotFound';
import HiWords from 'pages/HiWords/HiWords';
import Collocations from 'pages/Collocations/Collocations';
// import Interview from 'pages/Interview';
import Phonetics from 'pages/Phonetics/Phonetics';
import PhrasalVerbs from 'pages/PhrasalVerbs/PhrasalVerbs';
import InterviewMarkup from 'pages/Interview/InterviewMarkup';
import InterviewJavaScript from 'pages/Interview/InterviewJavaScript';
import InterviewReact from 'pages/Interview/InterviewReact';
import InterviewNode from 'pages/Interview/InterviewNode';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HiWords />} />

          <Route path="interview-markup" element={<InterviewMarkup />} />
          <Route path="interview-java-script" element={<InterviewJavaScript />} />
          <Route path="interview-react" element={<InterviewReact />} />
          <Route path="interview-node" element={<InterviewNode />} />

          <Route path="phonetics" element={<Phonetics />} />
          <Route path="phrasal-verbs" element={<PhrasalVerbs />} />
          <Route path="collocations" element={<Collocations />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
