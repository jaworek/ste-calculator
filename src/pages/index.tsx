import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import logoSrc from "../../public/star-terra-logo.svg";
import { Disclaimer } from "../components/Disclaimer";
import { Tier } from "../components/Tier";
import { Error } from "../components/Error";
import { Data } from "../types/data";
import { ErrorState } from "../types/error";

const URL = "https://starterra-tools-ste-be.herokuapp.com/ste/";

const FACTIONS_URL = "https://api.starterra.io/factions";

const Statistics = ({ data }: { data: Data }) => {
  return (
    <div>
      <div>Address: {data.address}</div>
      <div style={{ padding: "10px" }}>
        <div>LP staked: {data.lp_amount}</div>
        <div>STT staked: {data.stt_amount}</div>
        <div>STE value: {data.ste_value}</div>
      </div>
    </div>
  );
};

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

      <main className={styles.main}>
        <Image src={logoSrc} alt="" className={styles.logo} />
        <h1 className={styles.title}>Unofficial STE calculator</h1>

        <Disclaimer />

        <div className={styles.walletInput}>
          <div>
            Terra wallet address:{" "}
            <input
              value={walletAddress}
              onChange={(event) => setWalletAddress(event.target.value)}
            />
          </div>
          <button onClick={checkWallet}>Check</button>
        </div>

        <div className={styles.content}>
          {(() => {
            if (loading) {
              return <div>Loading...</div>;
            }

            if (error) {
              return <Error error={error} />;
            }

            if (data) {
              return (
                <>
                  <Statistics data={data} />
                  <Tier steValue={data.ste_value} />
                </>
              );
            }
          })()}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          Repository:{" "}
          <a
            href="https://github.com/jaworek/ste-calculator"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/jaworek/ste-calculator
          </a>
        </div>
        <div>
          Data source:{" "}
          <a
            href="https://github.com/starterra/tools"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/starterra/tools
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
