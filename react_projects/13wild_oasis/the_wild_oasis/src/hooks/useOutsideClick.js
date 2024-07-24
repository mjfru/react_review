import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  // Detecting a click outside the modal window:
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      // Adding true as a third argument allows the event to be handled in the capturing phase, while it's moving down the tree.
      document.addEventListener("click", handleClick, listenCapturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing]
  );

  return ref;
}
