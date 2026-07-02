import React, { useEffect } from 'react';
import './landing.css';

// ── Cal.com booking link ───────────────────────────────────────────────
// Format: "<cal-username>/<event-slug>", e.g. "reidwyde/ai-strategy-call".
// Create the account + event at cal.com (connect Google Calendar), then set
// this to your real link and the widget below goes live.
const CAL_LINK = 'reid-wyde-wkp8zb/30min';
// ───────────────────────────────────────────────────────────────────────

const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// minimal line icons (stroke = currentColor)
const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};
const IconClock = () => (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" {...stroke} /><path d="M12 7v5l3.5 2" {...stroke} /></svg>
);
const IconCost = () => (
    <svg viewBox="0 0 24 24"><path d="M12 3v18M8 7.5a3 3 0 0 1 3-2.5h1a3 3 0 0 1 0 6h-2a3 3 0 0 0 0 6h1a3 3 0 0 0 3-2.5" {...stroke} /></svg>
);
const IconMaze = () => (
    <svg viewBox="0 0 24 24"><path d="M4 8c3 0 3 8 6 8s3-8 6-8 3 4 4 4" {...stroke} /><circle cx="4" cy="8" r="1.4" {...stroke} /><circle cx="20" cy="12" r="1.4" {...stroke} /></svg>
);
const IconTarget = () => (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" {...stroke} /><circle cx="12" cy="12" r="4.5" {...stroke} /><circle cx="12" cy="12" r="1" {...stroke} /></svg>
);
const IconTeach = () => (
    <svg viewBox="0 0 24 24"><path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" {...stroke} /><path d="M6 11v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V11" {...stroke} /></svg>
);
const IconBolt = () => (
    <svg viewBox="0 0 24 24"><path d="M13 3 5 13h5l-1 8 8-11h-5l1-7Z" {...stroke} /></svg>
);

const Home = () => {
    useEffect(() => {
        /* eslint-disable */
        (function (C: any, A: string, L: string) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal; let ar = arguments;
                if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; }
                if (ar[0] === L) {
                    const api: any = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]); }
                    else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');
        const Cal = (window as any).Cal;
        Cal('init', { origin: 'https://cal.com' });
        Cal('inline', {
            elementOrSelector: '#tlc-cal',
            calLink: CAL_LINK,
            config: { theme: 'dark', layout: 'month_view' },
        });
        Cal('ui', {
            theme: 'dark',
            hideEventTypeDetails: false,
            layout: 'month_view',
            cssVarsPerTheme: { dark: { 'cal-brand': '#2f6fe0' } },
        });
        /* eslint-enable */
    }, []);

    return (
        <div className="tlc">
            <div className="tlc-grid" />

            <nav className="tlc-nav">
                <div className="tlc-wrap">
                    <div className="tlc-logo">The&nbsp;<b>Last</b>&nbsp;Consultant</div>
                    <a href="#book" onClick={scrollTo('book')} className="tlc-btn tlc-btn-primary" style={{ padding: '10px 18px', fontSize: 14 }}>Book a free call</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="tlc-hero">
                <div className="tlc-wrap">
                    <span className="tlc-kick">AI automation for business owners</span>
                    <h1>The last consultant you'll ever need to hire.</h1>
                    <p className="tlc-sub">
                        I teach you and your team to run your business with AI — automating the busywork,
                        cutting costs, and making you self-sufficient. No retainer. No dependency. You keep the skills.
                    </p>
                    <div className="tlc-cta-row">
                        <a href="#book" onClick={scrollTo('book')} className="tlc-btn tlc-btn-primary">Book a free strategy call →</a>
                        <a href="#how" onClick={scrollTo('how')} className="tlc-btn tlc-btn-ghost">See how it works</a>
                    </div>
                    <div className="tlc-trust">Free 30-minute call · No pitch, just a plan · Built by a working AI engineer</div>
                </div>
            </header>

            {/* PROBLEM */}
            <section className="tlc-sec tlc-glow-l">
                <div className="tlc-wrap">
                    <div className="tlc-sec-head">
                        <span className="tlc-kick">The problem</span>
                        <h2>You're paying people to do what AI can already do.</h2>
                        <p>Every week, hours vanish into manual work — and the AI tools that could erase it feel like a maze of hype.</p>
                    </div>
                    <div className="tlc-grid3">
                        <div className="tlc-glass tlc-card"><div className="tlc-ic"><IconClock /></div><h3>Drowning in busywork</h3><p>Quotes, scheduling, data entry, follow-ups, reports — repetitive work eating your team's best hours.</p></div>
                        <div className="tlc-glass tlc-card"><div className="tlc-ic"><IconCost /></div><h3>Hiring to keep up</h3><p>Adding headcount for tasks software should handle, while margins get thinner.</p></div>
                        <div className="tlc-glass tlc-card"><div className="tlc-ic"><IconMaze /></div><h3>Lost in the hype</h3><p>A thousand AI tools, no clear path. You know it matters — you just don't know where to start.</p></div>
                    </div>
                </div>
            </section>

            {/* WHAT I DO */}
            <section className="tlc-sec tlc-glow-r">
                <div className="tlc-wrap">
                    <div className="tlc-sec-head">
                        <span className="tlc-kick">What I do</span>
                        <h2>I don't sell you software. I make you dangerous with AI.</h2>
                        <p>Most consultants keep you on a retainer forever. I do the opposite — I hand you the playbook and the skills, then work myself out of a job.</p>
                    </div>
                    <div className="tlc-grid3">
                        <div className="tlc-glass tlc-card"><div className="tlc-ic"><IconTarget /></div><h3>Your business, not a template</h3><p>We automate your actual workflows and the highest-ROI tasks first — not generic "AI strategy" slides.</p></div>
                        <div className="tlc-glass tlc-card"><div className="tlc-ic"><IconTeach /></div><h3>You own it</h3><p>Your team learns to run and extend everything we build. The knowledge stays in-house.</p></div>
                        <div className="tlc-glass tlc-card"><div className="tlc-ic"><IconBolt /></div><h3>Real tools, real results</h3><p>Working automations you can see saving time and money — usually within the first few weeks.</p></div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how" className="tlc-sec tlc-glow-l">
                <div className="tlc-wrap">
                    <div className="tlc-sec-head">
                        <span className="tlc-kick">How it works</span>
                        <h2>Three steps to an AI-run business.</h2>
                    </div>
                    <div className="tlc-grid3">
                        <div className="tlc-glass tlc-card"><div className="tlc-num">STEP 01</div><h3 style={{ marginTop: 10 }}>Audit</h3><p>We map how your business really runs and pinpoint the tasks where AI pays off fastest.</p></div>
                        <div className="tlc-glass tlc-card"><div className="tlc-num">STEP 02</div><h3 style={{ marginTop: 10 }}>Build together</h3><p>We set up the automations and AI tools on your real workflows — side by side, so you learn as we go.</p></div>
                        <div className="tlc-glass tlc-card"><div className="tlc-num">STEP 03</div><h3 style={{ marginTop: 10 }}>You take the wheel</h3><p>Your team runs and grows it without me. That's the whole point — the last consultant you'll need.</p></div>
                    </div>
                </div>
            </section>

            {/* PROOF / ABOUT */}
            <section className="tlc-sec">
                <div className="tlc-wrap">
                    <div className="tlc-glass tlc-about">
                        <div>
                            <span className="tlc-kick">Who you're working with</span>
                            <h2>An AI engineer who does this at the frontier — now bringing it to your business.</h2>
                            <p>I'm Reid Wyde. By day I build production AI and machine-learning systems for healthcare — the kind of high-stakes, real-world AI most "AI consultants" only talk about. I'm a published researcher and I ship real systems, not slide decks.</p>
                            <p>I started this because the same tools transforming big companies can save small businesses enormous time and money — if someone actually teaches you how. That's what I do.</p>
                            <a href="#book" onClick={scrollTo('book')} className="tlc-btn tlc-btn-primary" style={{ marginTop: 22 }}>Book a free call →</a>
                        </div>
                        <div className="tlc-stats">
                            <div className="tlc-glass tlc-stat"><div className="tlc-big">Production AI</div><div className="tlc-lbl">Real ML systems in healthcare, daily</div></div>
                            <div className="tlc-glass tlc-stat"><div className="tlc-big">Published</div><div className="tlc-lbl">Peer-reviewed research background</div></div>
                            <div className="tlc-glass tlc-stat"><div className="tlc-big">Plain English</div><div className="tlc-lbl">No jargon — built for non-technical owners</div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOOK */}
            <section id="book" className="tlc-sec tlc-book tlc-glow-r">
                <div className="tlc-wrap">
                    <div className="tlc-sec-head" style={{ marginBottom: 10 }}>
                        <span className="tlc-kick">Get started</span>
                        <h2>Book your free AI strategy call.</h2>
                        <p>30 minutes. We'll find the biggest, fastest win in your business — whether or not we work together.</p>
                    </div>
                    <div className="tlc-glass tlc-book-embed">
                        <div className="tlc-cal-loading">Loading your calendar…</div>
                        <div id="tlc-cal" className="tlc-cal" />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="tlc-footer">
                <div className="tlc-wrap">
                    <div>© 2026 Reid Wyde · The Last Consultant</div>
                    <div className="tlc-fnav">
                        <a href="mailto:reidwyde@gmail.com">reidwyde@gmail.com</a>
                        <a href="/resume">Résumé</a>
                        <a href="/research">Research</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
