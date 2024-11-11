import CardSwiper from "./card-swiper";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Featured from "./featured";
import Hero from "./hero";
import ImageGrid from "./image-grid";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ImageGrid />
      <CardSwiper />
      <Featured />
      <Footer />
    </div>
  );
}
