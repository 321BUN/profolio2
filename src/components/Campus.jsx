import Highlight from './Highlight'
import { campus, portfolio, aigcAccount } from '../data/resume'

export default function Campus({ query }) {
  return (
    <section id="campus" className="section" style={{ background: 'var(--paper-2)' }}>
      <div className="container">
        <div className="section-head">
          <span className="section-no">04</span>
          <span className="section-en">Campus</span>
          <h2 className="section-title">校园经历</h2>
          <span className="section-rule" />
        </div>

        {campus.map((c) => (
          <article className="campus-card" key={c.id}>
            <div className="campus-head">
              <div className="org">{c.org}</div>
              <div className="role">{c.role}</div>
              <div className="period">{c.period}</div>
              <p className="summary"><Highlight text={c.summary} query={query} /></p>
            </div>
            <div>
              <ul className="exp-highlights">
                {c.highlights.map((h, i) => (
                  <li key={i}><Highlight text={h} query={query} /></li>
                ))}
              </ul>
              <div className="exp-metrics" style={{ paddingTop: 24 }}>
                {c.metrics.map((m) => (
                  <div className="metric" key={m.k}>
                    <div className="mv">{m.v}</div>
                    <div className="mk">{m.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}

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

        {/* AIGC 自媒体账号 */}
        <article className="wc-card" id="aigc">
          <div className="wc-badge">{aigcAccount.badge}</div>
          <div className="wc-grid">
            <div className="wc-body">
              <div className="wc-title">
                <Highlight text={aigcAccount.name} query={query} />
              </div>
              <div className="wc-meta">{aigcAccount.meta}</div>
              <p className="wc-summary"><Highlight text={aigcAccount.summary} query={query} /></p>
              <div className="exp-tags">
                {aigcAccount.tags.map((t) => (
                  <span className="tag" key={t}><Highlight text={t} query={query} /></span>
                ))}
              </div>
              <ul className="exp-highlights">
                {aigcAccount.highlights.map((h, i) => (
                  <li key={i}><Highlight text={h} query={query} /></li>
                ))}
              </ul>
              <div className="wc-hint">小红书号 49624163325 · 动态视频内容 · 持续更新</div>
            </div>
            <a className="aigc-panel" href={aigcAccount.link} target="_blank" rel="noreferrer" title="访问小红书主页">
              <span
                className="aigc-marquee"
                style={{ backgroundImage: `url(${aigcAccount.covers})` }}
                role="img"
                aria-label="「转念花开」笔记封面滚动预览"
              />
              <span className="aigc-kicker">Xiaohongshu · 小红书</span>
              <span className="aigc-name">转念花开</span>
              <span className="aigc-sign">「{aigcAccount.sign}」</span>
              <div className="aigc-stats">
                {aigcAccount.metrics.map((m) => (
                  <div key={m.k}><b>{m.v}</b><i>{m.k}</i></div>
                ))}
              </div>
              <span className="aigc-go">访问主页 →</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
