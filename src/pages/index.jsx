import Layout from "components/layout/Layout";
import Home from "components/Sections/home";
import Roadmap from "components/Sections/roadmap";
import Faq from "components/Sections/faq";
import Footer from "components/Sections/footer";

const Index = () => {

  return (
    <>
      <Layout>
        <Home />
        <Roadmap />
        <Faq />
        <Footer />
      </Layout>
      
      <style jsx global>{`        
        :root {
          --animate-duration: 3000ms;
          --animate-delay: 1s;
        }
      `}</style>
    </>
  );
};

export default Index;
