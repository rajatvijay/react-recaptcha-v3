const loadReCaptcha = siteKey => {
  const scriptLocal = document.createElement("script");
  const scriptGlobal = document.createElement("script");

  scriptLocal.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  scriptGlobal.src = `https://www.recaptcha.net/recaptcha/api.js?render=${siteKey}`;

  document.body.appendChild(scriptLocal);
  document.body.appendChild(scriptGlobal);
};

export default loadReCaptcha;
