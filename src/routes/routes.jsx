import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import RecemNascido from '../components/RecemNascido';
import PrimeiroMes from '../components/PrimeiroMes';
import DoisMeses from '../components/DoisMeses';
import QuatroMeses from '../components/QuatroMeses';
import SeisMeses from '../components/SeisMeses';
import NoveMeses from '../components/NoveMeses';
import DozeMeses from '../components/DozeMeses';
import DezoitoMeses from '../components/DezoitoMeses';
import DoisAnos from '../components/DoisAnos';
import Footer from '../components/Footer';
import ComoUtilizar from '../pages/ComoUtilizar';
import SobreProjeto from '../pages/SobreProjeto';
import PageMetadata from '../components/PageMetadata';

const Routes = () => {
    return (
        <Router>
            <PageMetadata />
            <RouterRoutes>
                <Route path="/" element={<RecemNascido />} />
                <Route path='/recem' element={<RecemNascido />} />
                <Route path="/ummes" element={<PrimeiroMes />} />
                <Route path="/doismeses" element={<DoisMeses />} />
                <Route path="/quatromeses" element={<QuatroMeses />} />
                <Route path="/seismeses" element={<SeisMeses />} />
                <Route path="/novemeses" element={<NoveMeses />} />
                <Route path="/dozemeses" element={<DozeMeses />} />
                <Route path="/dezoitomeses" element={<DezoitoMeses />} />
                <Route path="/doisanos" element={<DoisAnos />} />
                <Route path="/como-utilizar" element={<ComoUtilizar />} />
                <Route path="/sobre" element={<SobreProjeto />} />
            </RouterRoutes>
            <Footer />
        </Router>
    );
};

export default Routes;
