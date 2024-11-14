"use client"
import React, { useEffect } from 'react';

const NoPaperFormsWidget = () => {
  useEffect(() => {
    // First Script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.async = true;
    script1.innerHTML = `
      var npf_d = 'https://apply.gniotgroup.edu.in/';
      var npf_c = '19';
      var npf_m = '1';
    `;
    document.body.appendChild(script1);

    const trackScript = document.createElement('script');
    trackScript.type = 'text/javascript';
    trackScript.async = true;
    trackScript.src = 'https://track.nopaperforms.com/js/track.js';
    document.body.appendChild(trackScript);

    // Second Script
    const emwgtsScript = document.createElement('script');
    emwgtsScript.type = 'text/javascript';
    emwgtsScript.async = true;
    emwgtsScript.src = 'https://widgets.nopaperforms.com/emwgts.js';
    document.body.appendChild(emwgtsScript);

    // Clean up the scripts on unmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(trackScript);
      document.body.removeChild(emwgtsScript);
    };
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height="450px"
      style={{ width: '100%' }}
      data-w="eb898b180ec4d5687fe0d32cd0b53569"
    ></div>
  );
};

export default NoPaperFormsWidget;
