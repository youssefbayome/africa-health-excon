import ExconCategories from "./components/ExconCategories";
import ExconNews from "./components/ExconNews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Objectivies from "./components/Objectivies";
import Registeration from "./components/Registeration";
import Sponsers from "./components/Sponsers";
import { useAxios } from "./lib/useAxios";

function App() {
  const apiURL = 'https://api.africahealthexcon.com/api/Home/GetHome';
  const { data, error, loading } = useAxios({
    url: apiURL,
  });
  console.log(data)
  return (
    <>
      <Header />
      <HeroSection />
      <Objectivies data={data} loading={loading} error={error} />
      <ExconNews data={data} loading={loading} error={error} />
      <ExconCategories data={data?.List[1]} loading={loading} error={error} />
      <Registeration />
      <Sponsers data={data?.List[3]} />
      <Footer />
    </>
  );
}

export default App;
