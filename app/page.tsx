import Hero from "@/components/Hero";
import InfoArea from "@/components/InfoArea";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
      <main className='2xl:relative'>
        <Hero />
        <InfoArea />
        <WhyUs />
      </main>
  );
}
