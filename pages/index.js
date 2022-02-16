import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Most Flexible Mining Pool | Gopool.org</title>
        <meta
          name='description'
          content="Gopool.org is the world's most flexible mining pool that provides an easy-to-use way to mine your favorite coins."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://gopool.org'>Gopool.org!</a>
        </h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <a href='https://gopool.org/alephium' className={styles.grid}>
              <h2>Alephium &rarr;</h2>
            </a>
            <p>
              <code>Under construction.</code>
              <br/>
              <small>
                Support Gate.io ALPH wallet address and 4 addresses group. Pay every hour, 1% pool fee, 0.5 ALPH minimal. We cover trasaction fee.<br/>
                Donation:<br/>
                <a href="https://explorer.alephium.org/#/addresses/16uC2zJBkujTGNyD3BWiQ6hBZriQrPdvvQq2WYUSTkaBq" alt="donation-address-alph" target='_blank' rel='noopener noreferrer'>16uC2zJBkujTGNyD3BWiQ6hBZriQrPdvvQq2WYUSTkaBq</a><br/>
              </small>
            </p>
          </div>
          <div className={styles.card}>
            <a href='https://gopool.org/ethereum' className={styles.grid}>
              <h2>Ethereum &rarr;</h2>
            </a>
            <p>
              <code>stratum+ssl://e.gopool.org:56661</code> (Antpool) <br/>
              <code>stratum+ssl://e.gopool.org:56665</code> (Ethermine) <br/>
              <code>stratum+ssl://e.gopool.org:56666</code> (F2pool)    <br/>
              <code>stratum+ssl://e.gopool.org:56667</code> (Flexpool)  <br/>
              <code>stratum+ssl://e.gopool.org:56668</code> (Hive)      <br/>
              <br/>
              <small>
                50ms repsonse time. Stable network connection. 1% tax fee. SSL only.
                <br />
                Tax Address:
                <br />
                <a href="https://polygonscan.com/address/0x0Ca027a64BB581F49444540d627b26849ea74186" alt="tax-address-eth" target='_blank' rel='noopener noreferrer'>0x0Ca027a64BB581F49444540d627b26849ea74186</a><br/>
              </small>
            </p>
          </div>
          <div className={styles.card}>
            <a href='https://gopool.org/kaspa' className={styles.grid}>
              <h2>Kaspa &rarr;</h2>
            </a>
            <p>
              <code>
                Under construction.
              </code>
              <br />
              <small>
                Full nodes, no fee, have fun. QQ Group: 567023756<br/>
                Donation:<br/>
                kaspa:qr79zte4kr3tfw6a0ue7necmngxaepnp2zkzwh46nw9zjm9svpu064pa7nang
              </small>
            </p>
          </div>
          <div className={styles.card}>
          <a href='https://gopool.org/dao' className={styles.grid}>
            <h2>Gopool.org DAO &rarr;</h2>
          </a>
          <p>
            <code>
               Under construction.
            </code>
            <br />
            <small>DAO of Collaborative mining pool. QQ Group: 578512463 TG: <a href="https://t.me/gopool_org">https://t.me/gopool_org</a></small>
          </p>
        </div>
         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://gopool.org?utm_source=gopool-home&utm_medium=gopool-home&utm_campaign=gopool-home'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Gopool.org
        </a>
      </footer>
    </div>
  );
}
