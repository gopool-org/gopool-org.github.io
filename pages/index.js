import Head from 'next/head';
import Script from 'next/script';
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

        <Script
          strategy="afterInteractive"
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
            !function(c,h,i,m,p){m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e2d5163b2ac8144191cd0fd36/0d317263a6dd052d165422c3c.js");
            `,
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href='https://gopool.org'>Gopool.org</a>
        </h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <a href='#' className={styles.grid}>
              <h2>Alephium &rarr;</h2>
            </a>
            <p>
              <code>正在建设中...</code>
              <br/>
              <small>
                Support Gate.io ALPH wallet address and 4 addresses group. Pay every hour, 1% pool fee, 0.5 ALPH minimal. We cover trasaction fee.<br/>
                捐赠地址:<br/>
                <a href="https://explorer.alephium.org/#/addresses/16uC2zJBkujTGNyD3BWiQ6hBZriQrPdvvQq2WYUSTkaBq" alt="donation-address-alph" target='_blank' rel='noopener noreferrer'>16uC2zJBkujTGNyD3BWiQ6hBZriQrPdvvQq2WYUSTkaBq</a><br/>
              </small>
            </p>
          </div>
          <div className={styles.card}>
            <a href='#' className={styles.grid}>
              <h2>ETH矿池中转 (针对中国网络优化) &rarr;</h2>
            </a>
            <p>
              <code>ssl://eth.gopool.org:56661</code> (蚂蚁 SSL) <br/>
              <code>ssl://eth.gopool.org:56662</code> (2Miners SSL) <br />
              <code>ssl://eth.gopool.org:56663</code> (币印 SSL) <br/>
              <code>ssl://eth.gopool.org:56664</code> (币安 SSL) <br/>
              <code>ssl://eth.gopool.org:56665</code> (E池 SSL) <br/>
              <code>ssl://eth.gopool.org:56666</code> (鱼池 SSL) <br/>
              <code>ssl://eth.gopool.org:56667</code> (Flexpool SSL) <br/>
              <code>ssl://eth.gopool.org:56668</code> (Hive SSL) <br/>
              <br/>
              <small>
                低延迟, 通常份额接受低于 50ms 响应。商业级 BGP 网络。 1% 良心抽水。<br />
                备用地址: eth1.gopool.org / eth2.gopool.org / eth3.gopool.org <br />
                只推荐使用 SSL 端口, TCP 端口已全部停掉。有问题可以[ <a href="https://github.com/gopool-org/e/issues" alt="tax-address-eth" target='_blank' rel='noopener noreferrer'>工单系统</a> ]提出。<br/>
                电报群: <a href="https://t.me/gopool_org">https://t.me/gopool_org</a>
                <br />
                捐赠及抽水地址:
                <br />
                <a href="https://polygonscan.com/address/0x0Ca027a64BB581F49444540d627b26849ea74186" alt="tax-address-eth" target='_blank' rel='noopener noreferrer'>0x0Ca027a64BB581F49444540d627b26849ea74186</a><br/>
              </small>
            </p>
          </div>
          <div className={styles.card}>
            <a href='#' className={styles.grid}>
              <h2>ETC矿池中转 (针对中国网络优化) &rarr;</h2>
            </a>
            <p>
              <code>ssl://etc.gopool.org:46665</code> (E池 SSL) <br/>
              <code>ssl://etc.gopool.org:46666</code> (鱼池 SSL) <br/>
              <code>ssl://etc.gopool.org:46667</code> (Flexpool SSL) <br/>
              <br/>
              <small>
                低延迟, 通常份额接受低于 50ms 响应。商业级 BGP 网络。 1% 良心抽水。<br />
                备用地址: etc1.gopool.org / etc2.gopool.org / etc3.gopool.org <br />
                只推荐使用 SSL 端口, TCP 端口已全部停掉。有问题可以[ <a href="https://github.com/gopool-org/e/issues" alt="tax-address-eth" target='_blank' rel='noopener noreferrer'>工单系统</a> ]提出。<br/>
                电报群: <a href="https://t.me/gopool_org">https://t.me/gopool_org</a>
                <br />
                捐赠及抽水地址:
                <br />
                <a href="https://etcblockexplorer.com/address/0x0Ca027a64BB581F49444540d627b26849ea74186" alt="tax-address-eth" target='_blank' rel='noopener noreferrer'>0x0Ca027a64BB581F49444540d627b26849ea74186</a><br/>
              </small>
            </p>
          </div>
          <div className={styles.card}>
            <a href='#' className={styles.grid}>
              <h2>Kaspa &rarr;</h2>
            </a>
            <p>
              <code  className={styles.small}>
                节点 (IP 可能会有调整, 所以请自行 ping 出, 目前仅开放 16111 端口供同步): <br />
                * ping kaspa4.gopool.org  <br />
                * ping kaspa5.gopool.org  <br />
                * ping kaspa6.gopool.org  <br />
                * ping kaspa7.gopool.org  <br />
                * ping kaspa8.gopool.org  <br />
                * ping kaspa9.gopool.org  <br />
                <br />
                得到的 ip 地址可以通过已下命令添加: <br />
                * kaspactl addpeer 47.243.24.131 <br />
                <br /> 
                也可在 kaspad.conf 中添加: <br />
                 * addpeer=47.243.24.131 <br />
              </code>
              <br />
              <small>
                同步节点, 全免费。 kaspa4/5/6/7/8/9 由 Kaspa 中文社区众筹群捐赠。更多捐赠请联系老毛。<br />
                电报群: <a href="https://t.me/kaspa_chinese">https://t.me/kaspa_chinese</a><br />
                不和谐: <a href="https://discord.gg/dMrzVdcdZc">https://discord.gg/dMrzVdcdZc</a><br />
                亚洲节点捐赠地址:<br/>
                kaspa:qr79zte4kr3tfw6a0ue7necmngxaepnp2zkzwh46nw9zjm9svpu064pa7nang <br />
                Kaspa团队捐赠地址:<br />
                kaspa:precqv0krj3r6uyyfa36ga7s0u9jct0v4wg8ctsfde2gkrsgwgw8jgxfzfc98
              </small>
            </p>
          </div>
          <div className={styles.card}>
          <a href='#' className={styles.grid}>
            <h2>Gopool.org DAO &rarr;</h2>
          </a>
          <p>
            <code>
               正在建设中...
            </code>
            <br />
              <small>DAO of Collaborative mining pool. <br />
              电报群: <a href="https://t.me/gopool_org">https://t.me/gopool_org</a><br />
              不和谐: <a href="https://discord.gg/4zZTSs6eTu">https://discord.gg/4zZTSs6eTu</a>
              </small>
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
          by Gopool.org
        </a>
      </footer>
    </div>
  );
}
