import { Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { GuidePage } from './pages/GuidePage';
import { RankPage } from './pages/RankPage';
import { LandingPage } from './pages/LandingPage';
import { BottomNav } from './components/layout/BottomNav';
import { BatikKawungBG } from './components/ui/BatikKawungBG';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    return (
      <main>
        <LandingPage />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-brand-primary to-65% to-brand-secondary relative shadow-md overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BatikKawungBG />
      </div>

      {/* 2. Naikkan seluruh konten ke z-10 */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/dashboard" element={ <Dashboard/> }/>
          <Route path="/rank" element={ <RankPage/> }/>
          <Route path="/guide" element={ <GuidePage/> }/>
        </Routes>
      </main>

      <BottomNav />
    </div>
  );
}

export default App;