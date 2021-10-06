import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const URL = "https://starterra-tools-ste-be.herokuapp.com/ste/";

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
  return <div>This tool does not check if you qualify for Whalecraft</div>;
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
        <h1 className={styles.title}>STE calculator</h1>

        <Disclaimer />

        <div>
          Terra wallet address:
          <input
            value={walletAddress}
            onChange={(event) => setWalletAddress(event.target.value)}
          />
          <button onClick={checkWallet}>Check</button>
        </div>

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
