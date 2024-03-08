import { useEffect, useState } from "react";
import {PostProvider} from './PostContext'

import Header from './Header'
import Main from './Main'
import Archive from './Archive'
import Footer from './Footer'

function App() {

  return (
    <section>
      <DarkLightModeButton />
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

function DarkLightModeButton(){
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );
  return <button
  onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
  className="btn-fake-dark-mode"
>
  {isFakeDark ? "☀️" : "🌙"}
</button>
}

export default App;
