const Cookies = ({ setState }: { setState: (arg0: boolean) => void }) => {
  return (
    <div
      id="cookie-block"
      className="z-20 fixed bottom-0 right-0 left-0 bg-gray-200 p-2 text-xs shadow"
    >
      <p className="mb-2 text-center">
        <span>We use cookies on our website. You can read more in our </span>
        <a href="/privacy" className="text-yw-cta-default">
          Privacy Policy.
        </a>
      </p>
      <div className="flex justify-center">
        <button
          id="cookie-accept"
          className="btn btn-secondary py-1 px-3 text-xs"
          onClick={() => setState(true)}
        >
          Accept cookies
        </button>
      </div>
    </div>
  );
};

export default Cookies;
