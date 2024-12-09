let widget = `<span class="sso-icon" id="mysoft-sso-handle">
                    <img src="data:image/png;base64,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">
                </span>
                <div id="mysoft-sso-box" class="apps-icon" style="display: none;">
                    <ul id="getDynamicWidgets"></ul>
                </div>`;
let absolute_widget_url = app_url + "/api/mysoft-widgets";
// Make a request for a user with a given access token
fetch(absolute_widget_url, {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer "+token,
    Widget: widgets_id
  },
})
  .then((response) => response.json())
  .then((data) => {
    let oidcClients = data.clients;

    let innerWidgets = "";

    oidcClients.map((item) => {

      // citizen user and non verified
      if (permit_id=='false') {
        innerWidgets += `<li>
                            <a href="javascript:nidValidMsg()">
                                <div class="app-info">
                                    <div class="app-logo">
                                    ${
                                      item.logo
                                        ? `<img src="${item.logo}" class="img-fluid" title="${item.name}">`
                                        : item.name
                                    }
                                        
                                    </div>
                                </div>
                            </a>
                        </li>`;
      }else{
        innerWidgets += `<li>
                            <a href="${item.url ? item.url : `#`}">
                                <div class="app-info">
                                    <div class="app-logo">
                                    ${
                                      item.logo
                                        ? `<img src="${item.logo}" class="img-fluid" title="${item.name}">`
                                        : item.name
                                    }
                                        
                                    </div>
                                </div>
                            </a>
                        </li>`;
      }
      
    });

    document.getElementById("getDynamicWidgets").innerHTML = innerWidgets;
  })
  .catch((e) => {
    // Handle Errors
    document.getElementById(
      "getDynamicWidgets"
    ).innerHTML = `<b>Processing ...</b>`;
  });
document.getElementById("mysoft-sso-widget").innerHTML = widget;

/***Toggled for Widgest Button**/
document.getElementById("mysoft-sso-handle").addEventListener("click", (e) => {
  let x = document.getElementById("mysoft-sso-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  e.stopPropagation();
});

/***Hide Elements after click any dom***/
document.addEventListener("click", function () {
  document.getElementById("mysoft-sso-box").style.display = "none";
});

function nidValidMsg(){
  alert("অন্যান্য সার্ভিস গুলো ব্যবহার করতে এনআইডি ভেরিফিকেশণ করুন।");
}