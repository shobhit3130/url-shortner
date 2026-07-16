import React, { useMemo, useState } from 'react';

/**
 * Reusable UI component (copy/paste wherever you want).
 *
 * @param {Object} props
 * @param {string} [props.apiBaseUrl] Base URL for backend (default: http://localhost:3000)
 */
export default function ShortenerUI({ apiBaseUrl = 'http://localhost:3000' }) {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const endpoint = useMemo(() => `${apiBaseUrl}/api/create/`, [apiBaseUrl]);

  const normalizeUrl = (value) => value.trim();

  const validate = (value) => {
    if (!value) return 'Please enter a URL.';
    // Basic sanity check; backend will store whatever you send.
    // If user omitted protocol, try to help by adding https://.
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    const trimmed = normalizeUrl(url);
    const validationError = validate(trimmed);
    if (validationError) {
      setError(validationError);
      return;
    }

    let payloadUrl = trimmed;
    if (!/^https?:\/\//i.test(payloadUrl)) {
      payloadUrl = `https://${payloadUrl}`;
    }

    try {
      setLoading(true);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: payloadUrl })
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      const data = await res.text();
      setShortUrl(data);
    } catch (err) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = shortUrl;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  };

  return (
    <div className="bb-shortener-card">
      <h1 className="bb-title">URL Shortener</h1>

      <form onSubmit={handleSubmit} className="bb-form">
        <label className="bb-label" htmlFor="bb-url">Enter URL</label>
        <input
          id="bb-url"
          className="bb-input"
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <button className="bb-button" type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten'}
        </button>
      </form>

      {error ? <div className="bb-error">{error}</div> : null}

      {shortUrl ? (
        <div className="bb-result">
          <div className="bb-result-label">Your short URL:</div>
          <a className="bb-result-link" href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
          <div className="bb-actions">
            <button className="bb-copy" type="button" onClick={copyToClipboard}>
              Copy
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

