import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import logoSrc from "../public/star-terra-logo.svg";

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
    return <div>You qualify for Tier 1 or Squardron.</div>;
  }

  if (steValue >= 250 && steValue < 3000) {
    return <div>You qualify for Tier 1.</div>;
  }

  if (steValue >= 3000) {
    return <div>Congratulations! You qualify for Tier 2, 3, and 4.</div>;
  }

  return (
    <div>Unfortunately, you do not qualify for any Tier or Squadrons :(</div>
  );
};

const Error500 = () => {
  return <div>Something is wrong on our side. Please, try again.</div>;
};

const Error404 = () => {
  return <div>O, oh! It seems that you entered wrong address. 😮</div>;
};

const Error = ({ error }: { error: ErrorState }) => {
  if (error.status === 404) {
    return <Error404 />;
  }

  if (error.status === 500) {
    return <Error500 />;
  }

  return <div>Unknown error</div>
};

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <div>This tool does not check if you qualify for Whalecraft!</div>
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

type ErrorState = {
  status: number;
  statusMessage: string;
};

const Home: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorState>();
  const [data, setData] = useState<Data>();

  const checkWallet = () => {
    setLoading(true);
    fetch(`${URL + walletAddress}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }

        response.json().then((data) => {
          console.log(data);
          setData(data);
        });
      })
      .catch((e: Response) => {
        console.log("x", e);
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
