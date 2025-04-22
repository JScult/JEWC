import NavBar from './components/navBar';
import Main from './components/main';
import WelcomeSection from './components/welcomeSection';
import GuideSection from './components/guideSection';
import RegisterTimeSection from './components/registerTimeSection';
import Ticket from './components/ticket';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <NavBar></NavBar>
      <Main></Main>
        <WelcomeSection />
       
        <RegisterTimeSection />
        <GuideSection />
        <Ticket />
      
      <Footer />
    </div>
  );
}
