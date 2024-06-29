import React from "react";

export const useVisibilityChange = () => {
  const originalDocumentTitleRef = React.useRef(document.title);

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.title = originalDocumentTitleRef.current;
      } else {
        // Update the ref value and change the document title when the tab is hidden
        originalDocumentTitleRef.current = document.title;
        document.title = "🥺 We miss you in Wonderland!";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
};
