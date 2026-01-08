import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Theme</span>
        </label>
        <select
          className="select select-bordered"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </PageWrapper>
  );
};

export default Settings;
