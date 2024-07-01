import { GetStaticProps } from "next";
import AccordionSection from "./components/main-page/AccordionSection";
import BusinessPromo from "./components/main-page/BusinessPromo";
import CarouselSection from "./components/main-page/CarouselSection";
import HeroSection from "./components/main-page/HeroSection";
import InfoPanel from "./components/main-page/InfoSection";
import PromoBanner from "./components/main-page/PromoBanner";
import TabsSection from "./components/main-page/TabsSection";
import VideoBanner from "./components/main-page/VideoBanner";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { IComponentItem, mainComponentsList } from "./lib/components-lib";
import { getMainPageComponentOrder } from "./lib/contentful/contentful-api";

async function getComponentListForRender(): Promise<(IComponentItem | undefined)[]> {
  const mainPageComponentOrder = await getMainPageComponentOrder();

  const result = mainPageComponentOrder.map((item) => {
    const componentOrUndefined = mainComponentsList[item.componentId];
    if (!componentOrUndefined) return undefined;

    return componentOrUndefined;
  });

  return result;
}

interface HomeProps {
  pageComponentOrder: (IComponentItem | undefined)[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const pageComponentOrder = await getComponentListForRender();

  return {
    props: {
      pageComponentOrder,
    },
    revalidate: 10,
  };
};

function Home({ pageComponentOrder }: HomeProps) {
  return (
    <div className="bg-t-pale relative">
      <Header />
      <main className="overflow-hidden">
        {pageComponentOrder.map((component, index) => {
          if (!component) return null;

          return <div key={index}>{component.component}</div>;
        })}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
