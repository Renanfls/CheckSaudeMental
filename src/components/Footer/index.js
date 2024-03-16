export default function Footer() {
  return (
    <footer
      id="contato"
      className="d-flex flex-column flex-lg-row justify-content-lg-around align-items-center gap-4 p-5 px-4 px-md-5"
    >
      <a
        href="https://www.instagram.com/check.saudemental"
        className="d-inline-flex"
        target="_blank"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.75 1H7.25C3.79822 1 1 3.79822 1 7.25V19.75C1 23.2018 3.79822 26 7.25 26H19.75C23.2018 26 26 23.2018 26 19.75V7.25C26 3.79822 23.2018 1 19.75 1Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.5 12.7125C18.6543 13.7528 18.4766 14.8153 17.9922 15.7487C17.5078 16.6822 16.7414 17.4392 15.802 17.9121C14.8626 18.3849 13.7981 18.5495 12.7597 18.3824C11.7214 18.2153 10.7622 17.7251 10.0185 16.9814C9.2749 16.2378 8.78467 15.2786 8.61758 14.2402C8.4505 13.2019 8.61508 12.1373 9.08791 11.1979C9.56073 10.2585 10.3177 9.49216 11.2512 9.00778C12.1847 8.52341 13.2472 8.34572 14.2875 8.49998C15.3487 8.65734 16.3311 9.15181 17.0896 9.91036C17.8482 10.6689 18.3426 11.6513 18.5 12.7125Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.375 6.625H20.3876"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="ms-2">check.saudemental</span>
      </a>
      <a href="mailto:ckecksaudemental@gmail.com" className="d-inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-envelope-at"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
          <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
        </svg>
        <span className="ms-2">ckecksaudemental@gmail.com</span>
      </a>
      <span className="mx-auto mx-lg-0">© 2024 - Check.SaúdeMental</span>
    </footer>
  );
}
