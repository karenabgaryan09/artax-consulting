import { useEffect } from 'react';

function useJsonLd(jsonLdData) {
  useEffect(() => {
    // Serialize the JSON data as a string
    const jsonLdString = JSON.stringify(jsonLdData, null, 2);

    // Create the script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = jsonLdString;

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLdData]);
}

export default useJsonLd;