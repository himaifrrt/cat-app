import React, { useState, useEffect } from 'react';
import Checkbox from './components/Checkbox';
import Button from './components/Button';
import CatImage from './components/CatImage';

import './App.css';

const App: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(true);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const [catImageUrl, setCatImageUrl] = useState<string | null>(null);

  const fetchRandomCat = async (): Promise<void> => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();

      setCatImageUrl(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  useEffect(() => {
    let intervalId: number | undefined;
    if (autoRefresh && enabled) {
      intervalId = setInterval(fetchRandomCat, 5000);
    }
    return () => clearInterval(intervalId);
  }, [autoRefresh, enabled]);

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column'}}>
      <Checkbox
        label="Enabled"
        checked={enabled}
        onChange={(checked) => setEnabled(checked)}
      />
      <Checkbox
        label="Auto-refresh every 5 seconds"
        checked={autoRefresh}
        onChange={(checked) => setAutoRefresh(checked)}
      />
      <Button onClick={fetchRandomCat}>Get cat</Button>
      {catImageUrl && <CatImage imageUrl={catImageUrl} />}
    </div>
  );
};

export default App;
