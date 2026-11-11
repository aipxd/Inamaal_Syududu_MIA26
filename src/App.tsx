import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { GuidePage } from './pages/GuidePage';
import { RankPage } from './pages/RankPage';
import { LandingPage } from './pages/LandingPage';
import { BottomNav } from './components/layout/BottomNav';
import { BatikKawungBG } from './components/ui/BatikKawungBG';
import { NeonCursor } from './components/ui/NeonCursor';
import { TextLoading } from './components/ui/TextLoading';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const splash = (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TextLoading
            texts={['Memuat data...', 'Mengambil harga...', 'Mulai..']}
            interval={900}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (isLandingPage) {
    return (
      <main>
        {splash}
        <NeonCursor />
        <LandingPage />
      </main>
    );
  }

  return (
    <>
    {splash}
    <NeonCursor />
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
    </>
  );
}

export default App;