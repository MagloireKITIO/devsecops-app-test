// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Box } from '@mui/material';

// import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

// const App = () => (
//   <BrowserRouter>
//     <Box sx={{ backgroundColor: '#000' }}>
//       <Navbar />
//       <Routes>
//         <Route exact path='/' element={<Feed />} />
//         <Route path='/video/:id' element={<VideoDetail />} />
//         <Route path='/channel/:id' element={<ChannelDetail />} />
//         <Route path='/search/:searchTerm' element={<SearchFeed />} />
//       </Routes>
//     </Box>
//   </BrowserRouter>
// );

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} 
          // Exemple de chemin d'URL contenant des paramètres.
        />
        <Route path='/search/:searchTerm' element={<SearchFeed searchTerm={window.location.pathname.split('/')[2]} />} 
          // Introduit une vulnérabilité XSS en utilisant directement le paramètre d'URL sans validation.
        />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;

// Fonction modifiée pour introduire des problèmes potentiels
const VideoDetail = () => {
  // Supposons qu'il y a un appel API sans gestion d'erreurs
  fetch('/api/video/' + id)
    .then(response => {
      // Traitement des données sans gestion d'erreurs
    });
  return <div>Video Detail</div>;
};

const SearchFeed = ({ searchTerm }) => {
  // Supposons que fetchResults est une fonction lente ou non optimisée
  const results = fetchResults(searchTerm);
  return (
    <div>
      {results.map(result => <div key={result.id}>{result.title}</div>)}
      // Affichage des résultats sans optimisation de performance
    </div>
  );
};

// je teste