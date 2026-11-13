import Highlight from './Highlight'
import { portfolio, accounts } from '../data/resume'

export default function Works({ query }) {
  return (
    <section id="works" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-no">05</span>
          <span className="section-en">Works</span>
          <h2 className="section-title">作品集</h2>
          <span className="section-rule" />
        </div>

        {/* 文创作品集 */}
        <article className="wc-card" id="portfolio">
          <div className="wc-badge">Portfolio · 文创作品集</div>
          <div className="wc-grid">
            <div className="wc-body">
              <div className="wc-title">
                <Highlight text={portfolio.title} query={query} />
              </div>
              <div className="wc-meta">
                {portfolio.titleEn} · {portfolio.role} · {portfolio.period}
              </div>
              <p className="wc-summary"><Highlight text={portfolio.summary} query={query} /></p>
              <div className="exp-tags">
                {portfolio.tags.map((t) => (
                  <span className="tag" key={t}><Highlight text={t} query={query} /></span>
                ))}
              </div>
              <ul className="exp-highlights">
                {portfolio.highlights.map((h, i) => (
                  <li key={i}><Highlight text={h} query={query} /></li>
                ))}
              </ul>
              <a
                className="btn-primary wc-more"
                href="#/work/wenchuang"
                onClick={(e) => { e.preventDefault(); window.location.hash = '#/work/wenchuang' }}
              >
                查看完整作品
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <div className="wc-hint">项目视频 · 41 页手册全文 · 27 页答辩 PPT · 10 张作品图</div>
            </div>
            <div
              className="wc-imgs wc-imgs-click"
              onClick={() => { window.location.hash = '#/work/wenchuang' }}
              title="点击查看完整作品"
            >
              {portfolio.images.map((im) => (
                <figure className="wc-fig" key={im.src}>
                  <img src={im.src} alt={im.alt} />
                </figure>
              ))}
            </div>
          </div>
        </article>

        {/* 个人账号运营 */}
        <article className="wc-card" id="account">
          <div className="wc-badge">Account · 个人账号</div>
          <div className="wc-grid">
            <div className="wc-body">
              <div className="wc-title">
                <Highlight text={accounts.title} query={query} />
              </div>
              <div className="wc-meta">{accounts.meta}</div>
              <p className="wc-summary"><Highlight text={accounts.summary} query={query} /></p>
              <div className="exp-metrics" style={{ paddingTop: 10 }}>
                {accounts.metrics.map((m) => (
                  <div className="metric" key={m.k}>
                    <div className="mv">{m.v}</div>
                    <div className="mk">{m.k}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="wc-imgs">
              <figure className="wc-fig">
                <img src={accounts.cover} alt={accounts.coverAlt} />
              </figure>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
