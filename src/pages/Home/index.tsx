import React from "react";
import logo from "../../assets/icons/effector-logo.svg";
import { Counter } from "../../features/counter/Counter";
import MapY from "../../features/mapY/MapY";
import "./home.css";

export const Home: React.FC = () => {
  return (
    <main className="page page--home">
      <MapY />
      {/* <section className="hero">
                <img src={logo} className="hero__logo" alt="logo" />
                <Counter className="hero__counter" />
                <p>
                    Edit <code>src/components/App.tsx</code> and save to reload.
                </p>
                <a
                    className="hero__link"
                    href="https://effector.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Effector
                </a>
            </section> */}
    </main>
  );
};
