var OKTA_BASE_URL = "https://dev-842917.oktapreview.com";
var OKTA_CLIENT_ID = "0oahpmeuckanYrGWu0h7";
var CHALLENGE_API = "https://reinvent18-challenge-server.herokuapp.com";

var signIn = new OktaSignIn({
  baseUrl: OKTA_BASE_URL,
  clientId: OKTA_CLIENT_ID,
  authParams: {
    issuer: OKTA_BASE_URL + "/oauth2/default",
    responseType: ["token", "id_token"],
    display: "page"
  }
});

if (signIn.token.hasTokensInUrl()) {
  signIn.token.parseTokensFromUrl(
    function success(res) {
      let accessToken = res[0];
      let idToken = res[1];

      signIn.tokenManager.add("accessToken", accessToken);
      signIn.tokenManager.add("idToken", idToken);

      window.location.hash = "";
      onSignIn();
    },
    function error(err) {
      console.error(err);
    }
  );
} else {
  signIn.session.get(function(res) {
    if (res.status === "ACTIVE") {
      onSignIn();
    }
  });
}

function onSignIn() {
  toggleSignInButton("#signin-button");

  fetch(CHALLENGE_API, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: signIn.tokenManager.get("idToken").claims.email })
  })
    .then(resp => {
      toggleSignInButton("#congrats");
      document.querySelector("#email").innerHTML = signIn.tokenManager.get("idToken").claims.email;
    });
}

function renderSignIn(selector) {
  signIn.renderEl({ el: selector });
  toggleSignInButton("#signin-button");
}

function toggleSignInButton(selector) {
  document.querySelector(selector).classList.toggle("d-none");
}
