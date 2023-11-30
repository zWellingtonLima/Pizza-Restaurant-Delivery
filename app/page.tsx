import ChoosePlace from "@/components/ChoosePlace";
import Hero from "@/components/Hero";
import InfoArea from "@/components/InfoArea";
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
    </main>
  );
}
