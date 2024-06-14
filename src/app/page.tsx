import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Testimonal from "./componenets/Testimonal"
import Service from "./componenets/service";
import Services from "./componenets/sevices";
import Explore from "./componenets/Explore";
import Campaign from "./componenets/Campaign";
import Hero from "./componenets/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Explore />
      <Campaign/>

      <Service />
      <About />

      <Services />
      <Testimonal />

      <Contact />
    </div>
  );
}
