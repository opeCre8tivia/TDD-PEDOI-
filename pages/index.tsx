/**
 * A redesign of an online theme
 * url: https://preview.themeforest.net/item/hydropokit-hydroponic-agriculture-elementor-template-kit/full_screen_preview/41895918?_ga=2.194472164.898695472.1676736869-661641397.1675664519&_gac=1.56136153.1676736869.Cj0KCQiAi8KfBhCuARIsADp-A57gKt5chsNtyD8uJylmMJq0HmxYYdgRdD3mxJDMmRN2KI73X6HBW4waAhLbEALw_wcB
 */

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/src/components/Header";
import NavBar from "@/src/components/NavBar";
import Hero from "@/src/components/Hero";
import CircleList from "@/src/components/CircleList";
import WhoWeAre from "@/src/components/WhoWeAre";
import ClusterSection from "@/src/components/ClusterSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PEDOI</title>
        <meta
          name="description"
          content="PEDOI | Professional EnterPrice Development Organisation International"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Nav Bar */}
        <NavBar />

        {/* Hero */}
        <Hero />
        {/* round circles section */}
        <CircleList />
        {/* who we are section */}
        <WhoWeAre />
        {/* cluster section */}
        <ClusterSection />

        {/* About section */}
        <Header />
      </main>
    </>
  );
}
