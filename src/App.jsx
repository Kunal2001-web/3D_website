import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Hightlights from "./component/Hightlights";
import Modals from "./component/Modals";
import * as Sentry from "@sentry/react";
import Features from "./component/Features";
import HowItWorks from "./component/HowItWorks";
import Footer from "./component/Footer";
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Modals />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
