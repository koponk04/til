let applyLanguage = () => {
    let languageSetting = determineLanguageSetting();
    // languageSetting is either "en" or "id"
    const elements = document.querySelectorAll(`[data-${languageSetting}]`);
    elements.forEach(element => {
        const translation = element.getAttribute(`data-${languageSetting}`);
        if (translation !== null && translation !== '') {
            element.innerHTML = translation;
        }
    });
};

let setLanguageSetting = (languageSetting) => {
  localStorage.setItem("lang", languageSetting);

  document.documentElement.setAttribute("data-language-setting", languageSetting);
  document.getElementById("lang-toggle").setAttribute("data-active", languageSetting);

  applyLanguage();
};

let determineLanguageSetting = () => {
  let languageSetting = localStorage.getItem("lang");
  if (languageSetting != "en") {
    languageSetting = "id";
  }
  return languageSetting;
};

let initLanguage = () => {
  let languageSetting = determineLanguageSetting();

  setLanguageSetting(languageSetting);

  // Add event listener to the theme toggle button.
  document.getElementById("lang-toggle-id").addEventListener("click", function () {
    setLanguageSetting("id");
  });
  document.getElementById("lang-toggle-en").addEventListener("click", function () {
    setLanguageSetting("en");
  });
};