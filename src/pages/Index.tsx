import Navbar from '@/components/Navbar';
import CountdownBanner from '@/components/CountdownBanner';
import HeroSecao from '@/components/HeroSecao';
import NumerosSecao from '@/components/NumerosSecao';
import ProblemaSecao from '@/components/ProblemaSecao';
import SolucaoSecao from '@/components/SolucaoSecao';
import ParaQuemSecao from '@/components/ParaQuemSecao';
import ComoFuncionaSecao from '@/components/ComoFuncionaSecao';
import PrecoSecao from '@/components/PrecoSecao';
import ExemplosSecao from '@/components/ExemplosSecao';
import ProvaSocialSecao from '@/components/ProvaSocialSecao';
import FaqSecao from '@/components/FaqSecao';
import GarantiaSecao from '@/components/GarantiaSecao';
import CtaFinalSecao from '@/components/CtaFinalSecao';
import Rodape from '@/components/Rodape';
import WhatsAppFlutuante from '@/components/WhatsAppFlutuante';

const Index = () => (
  <>
    <CountdownBanner />
    <Navbar />
    <main className="pt-12">
      <HeroSecao />
      <NumerosSecao />
      <ProblemaSecao />
      <SolucaoSecao />
      <ParaQuemSecao />
      <ComoFuncionaSecao />
      <PrecoSecao />
      <ExemplosSecao />
      <ProvaSocialSecao />
      <FaqSecao />
      <GarantiaSecao />
      <CtaFinalSecao />
    </main>
    <Rodape />
    <WhatsAppFlutuante />
  </>
);

export default Index;
