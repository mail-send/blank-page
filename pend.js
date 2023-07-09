


// const container = document.querySelector("#react_app");
// const aTag = document.createElement('a');
// aTag.setAttribute('href', './repo.html');
// // aTag.textContent = 'click'
// container.appendChild(aTag)

window.addEventListener('load', ()=>{
    // window.location.assign()
    setTimeout(()=>{
        window.location.replace(window.location.origin + '/' + 'repo.html' + window.location.hash)
    }, 4500)
});




let h = window.location.hash

// let u = 