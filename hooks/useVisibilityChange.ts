import React from "react";

export const useVisibilityChange = () => {
  const isBrowser = typeof window !== "undefined";

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (isBrowser) {
      setMounted(true);
    }
  }, [isBrowser]);

  const originalDocumentTitleRef = React.useRef("");

  React.useEffect(() => {
    if (!isBrowser || !mounted) return;

    originalDocumentTitleRef.current = document.title;

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
  }, [isBrowser, mounted]);

  return null;
};
