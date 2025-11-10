import About from "./components/about";
import Banner from "./components/banner";
import Blogs from "./components/blogs";
import Community from "./components/community";
import Header from "./components/header";
import Hero from "./components/hero";
import Clients from "./components/our-clients";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Community />
      <About
        imageSrc="/about.png"
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla..."
        buttonText="Learn more"
      />
      <Banner />
      <About
        imageSrc="/pana.png"
        title="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        buttonText="Learn more"
      />
      <Blogs />
      <Banner />
    </>
  );
}
