let main = document.querySelector('body > main');

window.addEventListener('popstate', function (e) {
    requestPage(e.state, false);
});

function requestPage (url, push) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            main.innerHTML = xhr.responseText;
            attachLinkClickHandlers(main);

            document.title = xhr.getResponseHeader('Page-Title');

            if (push)
                history.pushState(url, document.title, url);

            document.body.classList.remove('loading');
        }
    };

    xhr.open('get', url, true);
    xhr.setRequestHeader('Content-Only', 1);
    xhr.send();

    document.body.classList.add('loading');
}

function attachLinkClickHandlers (parent) {
    let links = parent.querySelectorAll('a:not([href^="http"])');

    [].forEach.call(links, function (link) {
        link.addEventListener('click', function (e) {
            requestPage(link.href, true);

            e.preventDefault();
            return false;
        });
    });
}

attachLinkClickHandlers(document);

history.replaceState(location.href, document.title, location.href);
