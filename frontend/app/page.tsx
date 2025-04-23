import Main from './components/main';
import WelcomeSection from './components/welcomeSection';
import GuideSection from './components/guideSection';
import RegisterTimeSection from './components/registerTimeSection';
import Ticket from './components/ticket';
import Sponsors from './components/Sponsors';

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
