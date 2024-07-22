import { LastReleases } from "./components/lastReleases";
import ScrollParallax from "./components/scrollParallax";
import { Header } from "./containers/header";
import { HomeCta } from "./containers/homeCta";
import { InfluencersCarroussel } from "./containers/influencersCarroussel";
import PromptSection from "./containers/promptSection";
import { VideosMockups } from "./containers/videosMockups";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Header />   
      <VideosMockups />
      <PromptSection />
      <ScrollParallax />
      <HomeCta />
      <InfluencersCarroussel />
      <LastReleases />
    </main>
  );
}
