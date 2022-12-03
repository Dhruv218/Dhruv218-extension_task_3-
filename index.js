const submit = document.querySelector("#submit");

var l = false;
var c = false
let like, comment

const inputl = document.querySelector("#like");
inputl.addEventListener('input', function (e) {
  l = true
  like = e.target.value
  console.log(like, l);
  if (!l || !c) {
    submit.style.display = 'none';
  }
  else {
    submit.style.display = 'block';
  }
})

const inputc = document.querySelector("#comment");
inputc.addEventListener('input', function (e) {
  c = true
  comment = e.target.value
  console.log(comment, c);
  if (!l || !c) {
    submit.style.display = 'none';
  }
  else {
    submit.style.display = 'block';
  }
})


submit.addEventListener("click", () => {

  openTab('https://www.linkedin.com/feed/');

});


async function openTab(url) {
  let tab = await chrome.tabs.create({ url: url });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: logInfo,
  });
}


function logInfo() {

  setTimeout(() => {
    let likebtn = document.querySelectorAll("span.react-button__text")
    for (let i = 0; i <= like; i++) {
      likebtn[i].click();
      document.querySelectorAll('.comment-button')[i].click()
    }
  }, 1000);

  setTimeout(() => {
    let commentinp = document.querySelectorAll('.editor-content p')
    for (let i = 0; i <= like; i++) {
      commentinp[i].innerHTML = comment
    }
  }, 3000);

  setTimeout(() => {
    for (let i = 0; i <= like; i++) {
      document.querySelectorAll('.comments-comment-box__submit-button')[i].click()
    }
  }, 6000);
}

