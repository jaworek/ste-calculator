import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import logoSrc from "../../public/star-terra-logo.svg";
import { Disclaimer } from "../components/Disclaimer/Disclaimer";
import { Tier } from "../components/Tier/Tier";
import { Error } from "../components/Error/Error";
import { Data } from "../types/data";
import { ErrorState } from "../types/error";
import { Footer } from "../components/Footer/Footer";
import { Statistics } from "../components/Statistics/Statistics";
import { Button } from "../components/Button/Button";
import { Faction } from "../components/Faction/Faction";
import Input from "../components/Input/Input";
import { Loading } from "../components/Loading/Loading";
import { Requirements } from "../components/Requirements/Requirements";

const URL = "https://starterra-tools-ste-be.herokuapp.com/ste/";

const FACTIONS_URL = "https://api.starterra.io/factions";

const Home: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorState>();
  const [data, setData] = useState<Data>();

  const checkWallet = () => {
    setLoading(true);
    setError(undefined);
    fetch(`${URL + walletAddress}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }

        response.json().then((data) => {
          console.log("dat", data);
          setData(data);
        });
      })
      .catch((e: Response) => {
        setError({ status: e.status, statusMessage: e.statusText });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>STE calculator</title>
        <meta name="description" content="StarTerra Energy calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
        <span>Unofficial&nbsp;</span>
        <Image src={logoSrc} alt="" className={styles.logo} />
        <span>&nbsp;Energy Calculator</span>
      </div>

      <main className={styles.main}>
        <Disclaimer />

        <Requirements />

        <div className={styles.walletInput}>
          <div>Terra wallet address: </div>
          <Input
            value={walletAddress}
            onChange={(event) => setWalletAddress(event.target.value)}
          />
          <Button onClick={checkWallet} disabled={loading} />
        </div>

        <div className={styles.content}>
          {(() => {
            if (loading) {
              return <Loading />;
            }

            if (error) {
              return <Error error={error} />;
            }

            if (!data) {
              return <div>Enter your wallet address to see statistics.</div>;
            }

            if (data) {
              return (
                <>
                  <Statistics data={data} />
                  <Tier steValue={data.ste_value} faction={data.faction} />
                  <Faction faction={data.faction} />
                </>
              );
            }
          })()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
