import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { IComponentItem, mainComponentsList } from "./lib/components-lib";
import { getMainPageComponentOrder } from "./lib/contentful/contentful-api";

async function getComponentListForRender(): Promise<(IComponentItem | undefined)[]> {
  const mainPageComponentOrder = await getMainPageComponentOrder();

  const result = mainPageComponentOrder.map((item) => {
    const componentOrUndefined = mainComponentsList[item.componentId];
    if (!componentOrUndefined) return

    return componentOrUndefined;
  })

  return result
}

export default async function Home() {
  const pageComponentOrder = await getComponentListForRender();

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
    </div >
  );
}
