import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import { Header } from "Molecules/Header";
import { Home } from "Pages/Home";
import { About } from "Pages/About";
import { Work } from "Pages/Work";
import { Blog } from "Pages/Blog";
import { Recipes } from "Pages/Recipes";
import { Footer } from "Molecules/Footer";

const App: React.FC = () => {
    return (
        <ThemeProvider attribute="class">
            <div className="antialiased bg-grey-200 text-off-black dark:bg-off-black
                dark:text-off-white flex flex-col justify-between min-h-screen">
                <Router>
                    <Header />
                    <div className="mx-auto w-full px-4 md:max-w-5xl">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/work" element={<Work />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/recipes" element={<Recipes />} />
                        </Routes>
                    </div>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
