import Main from './components/HomePage/main';
import WelcomeSection from './components/HomePage/welcomeSection';
import GuideSection from './components/HomePage/guideSection';
import RegisterTimeSection from './components/HomePage/registerTimeSection';
import Ticket from './components/HomePage/ticket';
import Sponsors from './components/HomePage/Sponsors';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Main/>
        <WelcomeSection />
        <Sponsors />
        <RegisterTimeSection />
        <Ticket />
        <GuideSection />
      
      
    </div>
  );
}
