import { useState } from "react";

const WA_URL =
  "https://wa.me/917777047722?text=Hello%20Kanchan%20International%2C%20I%20would%20like%20to%20enquire%20about%20your%20chemical%20products.";

export function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-2 md:bottom-7 md:right-7">
      {hover && (
        <span className="hidden rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-white shadow-lg md:inline-block animate-in fade-in slide-in-from-right-2 duration-150">
          Chat with us
        </span>
      )}
      <a
        href={WA_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with Kanchan International on WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="wa-pulse grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl ring-1 ring-black/5 transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.21c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.51-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.54-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.03 5.33c-5.86 0-10.62 4.76-10.63 10.61 0 1.87.49 3.69 1.41 5.29L5.33 26.67l5.59-1.46c1.55.85 3.29 1.29 5.05 1.29h.01c5.86 0 10.62-4.76 10.63-10.61.01-2.83-1.1-5.5-3.1-7.51-2-2-4.66-3.11-7.48-3.11zm0 19.45h-.01c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.31.87.88-3.23-.21-.33a8.79 8.79 0 0 1-1.35-4.7c0-4.86 3.96-8.82 8.83-8.82 2.36 0 4.57.92 6.24 2.59a8.76 8.76 0 0 1 2.58 6.24c-.01 4.87-3.97 8.79-8.89 8.79z"/>
        </svg>
      </a>
    </div>
  );
}
