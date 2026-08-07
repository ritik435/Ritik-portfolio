import { useState, useEffect, useCallback } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

function rnd(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function noteStyle(i, seed, noteW, boardH, hoverW) {
  const r1 = rnd(i + seed), r2 = rnd(i + seed + 90), r3 = rnd(i + seed + 310);
  const paper = ['oklch(0.9 0.13 96)', 'oklch(0.89 0.09 190)', 'oklch(0.89 0.08 330)', 'oklch(0.9 0.1 140)', 'oklch(0.89 0.09 40)', 'oklch(0.92 0.07 70)'];
  const bleed = Math.round(noteW * 0.55 * Math.sin(6 * Math.PI / 180)) + 2;
  const leftPct = r1 * 100;
  const leftOffset = r1 * (noteW + 2 * bleed) - bleed;
  return {
    left: `calc(${leftPct.toFixed(2)}% - ${leftOffset.toFixed(1)}px)`,
    top: `${(bleed + r2 * (boardH - noteW - 2 * bleed)).toFixed(0)}px`,
    width: noteW,
    height: noteW,
    transform: `rotate(${(-6 + r3 * 12).toFixed(1)}deg)`,
    zIndex: 2 + Math.floor(r3 * 60),
    background: paper[i % paper.length],
    boxShadow: '0 5px 14px rgba(0,0,0,.24)',
    '--hover-max-w': `calc(100% - ${leftPct.toFixed(2)}% + ${leftOffset.toFixed(1)}px)`,
  };
}

const Board = () => {
  const [notes, setNotes] = useState([]);
  const [mine, setMine] = useState([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState(typeof window !== 'undefined' && window.innerWidth <= 700);

  useEffect(() => {
    const onResize = () => setPhone(window.innerWidth <= 700);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const fetchNotes = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/notes`);
      if (res.ok) setNotes(await res.json());
    } catch {} finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchNotes(); }, [fetchNotes]);

  const postNote = async () => {
    const text = draft.trim().slice(0, 200);
    if (!text) return;
    setMine(prev => [text, ...prev]);
    setDraft('');
    try {
      await fetch(`${API_BASE}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
    } catch {}
  };

  const noteW = phone ? 74 : 104;
  const boardH = phone ? 320 : 440;
  const allNotes = [...notes, ...mine];

  return (
    <section id="board" className="section-border">
      <div style={{ padding: '52px clamp(18px, 5vw, 40px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 40, alignItems: 'start' }}>
        <div style={{ maxWidth: '46ch' }}>
          <div className="section-label" style={{ color: 'var(--c3)' }}>07 · The board</div>
          <h2 style={{ margin: '14px 0 14px', fontSize: 'clamp(24px, 2.8vw, 34px)', letterSpacing: '-0.025em', lineHeight: 1.12, fontWeight: 700 }}>
            Leave a note. <span style={{ color: 'var(--dim)' }}>{phone ? 'Tap any note to read it.' : 'Hover any note to read the whole thing.'}</span>
          </h2>
          <p style={{ margin: '0 0 20px', color: 'var(--dim)', fontSize: 16 }}>
            A role, a question, or a systems problem you are stuck on — 200 characters, pinned wherever there is space.
          </p>
          <textarea
            value={draft}
            onChange={e => setDraft(e.target.value.slice(0, 200))}
            maxLength={200}
            rows={3}
            placeholder="Write up to 200 characters…"
            style={{ width: '100%', padding: 13, background: 'var(--panel)', border: '1px solid var(--line)', borderRadius: 3, fontFamily: 'var(--sans)', fontSize: 15, resize: 'vertical', color: 'var(--fg)' }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', marginTop: 12 }}>
            <button onClick={postNote} className="btn" style={{ background: 'var(--c3)', color: 'var(--bg)' }}>
              Paste on my board
            </button>
            <span className="mono" style={{ fontSize: 12, color: 'var(--dim)' }}>{200 - draft.length} characters left</span>
          </div>
        </div>
        <div className="board-area" style={{ height: boardH, minWidth: 0 }}>
          {!loading && allNotes.map((text, i) => {
            const isMine = i >= notes.length;
            const style = noteStyle(i, isMine ? 501 : 1, noteW, boardH);
            if (isMine) {
              style.zIndex = 200 + (i - notes.length);
              style.boxShadow = '0 12px 30px rgba(0,0,0,.4)';
            }
            return (
              <div
                key={i}
                className={`sticky-note${isMine ? ' mine-note' : ''}`}
                style={{
                  ...style,
                  padding: phone ? 7 : 9,
                  fontSize: phone ? 12 : 15,
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Board;
