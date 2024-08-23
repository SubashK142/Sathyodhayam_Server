
// import './App.css';
// import Home from './Home/Home';
// import {RouterProvider, createBrowserRouter} from 'react-router-dom';
// import SubmitNewsFeed from './News_feeds/News_feed';
// import FeedsList from './News_feeds/Manage_News_feed';
// import SubmitVoice from './Voice/Voice';
// import SubmitMeditation from './Meditation/meditation';
// import MeditationList from './Meditation/manage_meditation';
// import VoiceList from './Voice/manage_voice';

// function App() {
//   const router= createBrowserRouter([
//     {
//       path: 'sathyodhayam_server/',
//       element: <Home/>
//     },
//     {
//       path: 'sathyodhayam_server/newsfeed',
//       element: <SubmitNewsFeed/>
//     },
//     {
//       path:'sathyodhayam_server/managenewsfeed',
//       element:<FeedsList/>
//     },
//     {
//       path:'sathyodhayam_server/voice',
//       element:<SubmitVoice/>
//     },
//     {
//       path:'sathyodhayam_server/meditation',
//       element:<SubmitMeditation/>
//     },
//     {
//       path:'sathyodhayam_server/managemeditation',
//       element:<MeditationList/>
//     },
//     {
//       path:'sathyodhayam_server/managevoice',
//       element:<VoiceList/>
//     }
//   ])
//   return (
//     <RouterProvider router={router}>
//     </RouterProvider>
    
//   )
// }
// export default App;


import './App.css';
import Home from './Home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitNewsFeed from './News_feeds/News_feed';
import FeedsList from './News_feeds/Manage_News_feed';
import SubmitVoice from './Voice/Voice';
import SubmitMeditation from './Meditation/meditation';
import MeditationList from './Meditation/manage_meditation';
import VoiceList from './Voice/manage_voice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsfeed" element={<SubmitNewsFeed />} />
        <Route path="/managenewsfeed" element={<FeedsList />} />
        <Route path="/voice" element={<SubmitVoice />} />
        <Route path="/meditation" element={<SubmitMeditation />} />
        <Route path="/managemeditation" element={<MeditationList />} />
        <Route path="/managevoice" element={<VoiceList />} />
      </Routes>
    </Router>
  );
}

export default App;
