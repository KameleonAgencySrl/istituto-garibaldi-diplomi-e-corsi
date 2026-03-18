import { useEffect } from 'react';

export default function BorgomaneroReviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sk-ww-google-reviews" data-embed-id="25664428"></div>
  );
}