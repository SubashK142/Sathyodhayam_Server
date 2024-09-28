
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
import SubmitUsers from './Users/Users';
import UsersList from './Users/Manage_users';
import SubmitSlideshow from './Slideshow/Slideshow';
import SlideshowList from './Slideshow/Manage_Slideshow';
import SubmitJabam from './Jabam/Jabam';
import JabamList from './Jabam/Manage_jabam';
import SubmitDhyanam from './Dhyanam/Dhyanam';
import DhyanamList from './Dhyanam/Manage_Dhyanam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<SubmitUsers />} />
        <Route path="/manageusers" element={<UsersList />} />
        <Route path="/newsfeed" element={<SubmitNewsFeed />} />
        <Route path="/managenewsfeed" element={<FeedsList />} />
        <Route path="/voice" element={<SubmitVoice />} />
        <Route path="/slideshow" element={<SubmitSlideshow />} />
        <Route path="/jabam" element={<SubmitJabam />} />
        <Route path="/dhyanam" element={<SubmitDhyanam />} />
        <Route path="/meditation" element={<SubmitMeditation />} />
        <Route path="/managemeditation" element={<MeditationList />} />
        <Route path="/managevoice" element={<VoiceList />} />
        <Route path="/manageslideshow" element={<SlideshowList />} />
        <Route path="/managejabam" element={<JabamList />} />
        <Route path="/managedhyanam" element={< DhyanamList/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
