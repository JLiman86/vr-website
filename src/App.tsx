import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Video from "./components/Video";

function App() {
  return (
    <div className="overflow-hidden relative before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:block">
      <Header />
      <Banner />
      <Experience/>
      <Video/>
    </div>
  );
}

export default App;
