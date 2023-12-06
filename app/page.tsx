import ChoosePlace from "@/components/ChoosePlace";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import InfoArea from "@/components/InfoArea";
import OurClients from "@/components/OurClients";
import Promotion from "@/components/Promotion";
import WhyUs from "@/components/WhyUs";
import Container from "@/components/container";

export default function Home() {
  return (
    <main className="2xl:relative">
      <Container>
        <Hero />
        <InfoArea />
        <WhyUs />
      </Container>
      <ChoosePlace />
      <Gallery />
      <OurClients />
      <Promotion />
    </main>
  );
}
