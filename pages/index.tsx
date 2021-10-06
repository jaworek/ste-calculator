import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import logoSrc from '../public/star-terra-logo.svg';

const URL = "https://starterra-tools-ste-be.herokuapp.com/ste/";

const FACTIONS_URL = "https://api.starterra.io/factions";

type Data = {
  address: string;
  block_time: number;
  lp_amount: number;
  ste_value: number;
  stt_amount: number;
};

const Tier = ({ steValue }: { steValue: number }) => {
  if (steValue >= 250 && steValue <= 2750) {
    return <div>Tier 1 or Squardron</div>;
  }

  if (steValue >= 250 && steValue < 3000) {
    return <div>Tier 1</div>;
  }

  if (steValue >= 3000) {
    return <div>Tier 2, 3, 4</div>;
  }

  return (
    <div>Unfortunately, you do not qualify for any Tier or Squadrons :(</div>
  );
};

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <div>
        This tool does not check if you qualify for Whalecraft!
      </div>
      <div>Data presented here may be inaccurate!</div>
    </div>
  );
};

const Statistics = ({ data }: { data: Data }) => {
  return (
    <div>
      <div>Address: {data.address}</div>
      <div>LP staked: {data.lp_amount}</div>
      <div>STT staked: {data.stt_amount}</div>
      <div>STE value: {data.ste_value}</div>
    </div>
  );
};

const Home: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState<Data>();

  const checkWallet = () => {
    setLoading(true);
    fetch(`${URL + walletAddress}`).then((response) => {
      // if (!response.ok) {
      // throw new Error(response.statusText);
      // }

      response
        .json()
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
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
        <Image src={logoSrc} alt="" />
        <h1 className={styles.title}>Unofficial STE calculator</h1>

        <Disclaimer />

        <div className={styles.walletInput}>
          <div>
          Terra wallet address:
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
              return <div>Error: {error}</div>;
            }
          })()}

          {data ? (
            <>
              <Statistics data={data} />
              <Tier steValue={data.ste_value} />
            </>
          ) : null}
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
