import NavBar from './components/navBar';
import WelcomeSection from './components/welcomeSection';
import GuideSection from './components/guideSection';
import RegisterTimeSection from './components/registerTimeSection';
import Ticket from './components/ticket';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <WelcomeSection />
        <GuideSection />
        <RegisterTimeSection />
        <Ticket />
      </main>
      <Footer />
    </div>
  );
}
