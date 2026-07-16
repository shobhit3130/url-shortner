import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;

    const generated = `https://short.ly/${Math.random().toString(36).slice(2, 8)}`;
    setShortUrl(generated);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7fb', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '480px', background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        <h2 style={{ marginBottom: '12px' }}>URL Shortener</h2>
        <p style={{ marginBottom: '16px', color: '#666' }}>Enter a long URL and get a short one back.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '12px' }}
          />
          <button type="submit" style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '8px', background: '#2563eb', color: 'white', cursor: 'pointer' }}>
            Shorten
          </button>
        </form>

        {shortUrl && (
          <div style={{ marginTop: '16px', padding: '12px', background: '#eff6ff', borderRadius: '8px' }}>
            <strong>Your short URL:</strong>
            <div style={{ marginTop: '6px', wordBreak: 'break-all' }}>{shortUrl}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

