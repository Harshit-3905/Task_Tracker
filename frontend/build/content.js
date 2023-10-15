async function getBlockedWebsites() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("blockedWebsites", (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(result.blockedWebsites);
      }
    });
  });
}

window.onload = async function () {
  const blockedWebsites = await getBlockedWebsites();
  const url = window.location.href;
  blockedWebsites.forEach((web) => {
    if (url.includes(web.website)) {
      alert("You are on blocked site!.");
      window.location.replace("https://tasktracker-stayfocused.netlify.app/");
    }
  });
};
