import Navbar from '@/components/Navbar';
import HeroSecao from '@/components/HeroSecao';
import NumerosSecao from '@/components/NumerosSecao';
import ProblemaSecao from '@/components/ProblemaSecao';
import SolucaoSecao from '@/components/SolucaoSecao';
import ParaQuemSecao from '@/components/ParaQuemSecao';
import ComoFuncionaSecao from '@/components/ComoFuncionaSecao';
import PrecoSecao from '@/components/PrecoSecao';
import ProvaSocialSecao from '@/components/ProvaSocialSecao';
import FaqSecao from '@/components/FaqSecao';
import CtaFinalSecao from '@/components/CtaFinalSecao';
import Rodape from '@/components/Rodape';
import WhatsAppFlutuante from '@/components/WhatsAppFlutuante';

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSecao />
      <NumerosSecao />
      <ProblemaSecao />
      <SolucaoSecao />
      <ParaQuemSecao />
      <ComoFuncionaSecao />
      <PrecoSecao />
      <ProvaSocialSecao />
      <FaqSecao />
      <CtaFinalSecao />
    </main>
    <Rodape />
    <WhatsAppFlutuante />
  </>
);

export default Index;
