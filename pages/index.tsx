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
        .catch((error) => {
          setError(error);
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

        <div>
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

        {data ? <Statistics data={data} /> : null}
      </main>

      <footer className={styles.footer}>Hello</footer>
    </div>
  );
};

export default Home;
