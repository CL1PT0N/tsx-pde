import { Route, Routes } from 'react-router-dom';
import Beranda from '../../pages/Beranda/Beranda';
import Blog from '../../pages/Blog/Blog';
import Forum from '../../pages/ForumDiskusi/Forum';
import Lms from '../../pages/Lms/Lms';
import LmsID from '../../pages/Lms[id]/LmsID';
import Marketplace from '../../pages/Marketplace/Marketplace';
import NotFound from '../../pages/NotFound/NotFound';
import BursaKerja from '../../pages/Pengajuan/BursaKerja/BursaKerja';
import Kunjungan from '../../pages/Pengajuan/Kunjungan/Kunjungan';
import Magang from '../../pages/Pengajuan/Magang/Magang';
import Sertifikasi from '../../pages/Pengajuan/Sertifikasi/Sertifikasi';
import TamuGuru from '../../pages/Pengajuan/TamuGuru/TamuGuru';
import Sidebar from '../Sidebar/Sidebar';
import ProtectedRoute from './ProtectedRoute';

export default function MainRoute() {
  return (
    <ProtectedRoute>
      <Sidebar>
        <Routes >
          {/* Static Routes */}

          <Route path="beranda" element={<Beranda />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="blog" element={<Blog />} />
          <Route path="lms" element={<Lms />} />
          <Route path="forum" element={<Forum />} />

          <Route path="pengajuan/tamuguru" element={<TamuGuru />} />
          <Route path="pengajuan/sertifikasi" element={<Sertifikasi />} />
          <Route path="pengajuan/magang" element={<Magang />} />
          <Route path="pengajuan/kunjungan" element={<Kunjungan />} />
          <Route path="pengajuan/bursakerja" element={<BursaKerja />} />

          {/* Dynamic Routes */}

          <Route path="lms/:id" element={<LmsID />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Sidebar>
    </ProtectedRoute>
  );
}
