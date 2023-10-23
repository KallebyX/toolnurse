import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import RecemNascido from '../components/RecemNascido';
import PrimeiroMes from '../components/PrimeiroMes';
import DoisMeses from '../components/doisMeses';
import QuatroMeses from '../components/QuatroMeses';
import SeisMeses from '../components/SeisMeses';
import NoveMeses from '../components/NoveMeses';
import DozeMeses from '../components/DozeMeses';
import DezoitoMeses from '../components/DezoitoMeses';
import DoisAnos from '../components/DoisAnos';
import Footer from '../components/Footer';

const Routes = () => {
    return (
        <Router>
            <RouterRoutes>
                <Route path="/" element={<PrimeiroMes />} />
                <Route path="/ummes" element={<PrimeiroMes />} />
                <Route path="/doismeses" element={<DoisMeses />} />
                <Route path="/quatromeses" element={<QuatroMeses />} />
                <Route path="/seismeses" element={<SeisMeses />} />
                <Route path="/novemeses" element={<NoveMeses />} />
                <Route path="/dozemeses" element={<DozeMeses />} />
                <Route path="/dezoitomeses" element={<DezoitoMeses />} />
                <Route path="/doisanos" element={<DoisAnos />} />
            </RouterRoutes>
            <Footer />
        </Router>
    );
};

export default Routes;
