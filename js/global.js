// burger dropdown menu
function burgerDropdown() {

    const burger = document.querySelector('#burger');
    const menu = document.querySelector('.navbar-menu');
    burger.onclick = () => {
        if (burger.classList.contains('is-active')) {
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        } else {
            burger.classList.add('is-active');
            menu.classList.add('is-active');
        }
    }

}

// copy link button
function copyLinkButton() {

    const copyBtn = document.querySelector('#link');
    copyBtn.onclick = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                console.log('Link copied to clipboard!');
                // popup window
                document.querySelector('#linkCopied').classList.remove('is-hidden');
                setTimeout(() => {
                    linkCopied.classList.add('is-hidden');
                  }, 1000); // hide after 1 second
            })
            .catch((error) => {
                console.error('Failed to copy link: ', error);
            });
    }

}

// check if user has already previously acknowledged
if (sessionStorage.getItem('cookieAcknowledge')) {
    const card = document.querySelector('div.notification');
    card.classList.add('is-hidden');
}

// close cookie popup and set acknowledgement to session storage
function remove() {
    const button = document.querySelector('button.delete');
    button.onclick = () => {
        const card = document.querySelector('div.notification');
        card.classList.add('is-hidden');
        sessionStorage.setItem('cookieAcknowledge', true);
    }
}

// go to Top
function goTop() {
    const button = document.querySelector('#top');

    window.onscroll = () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            button.classList.remove('is-hidden');
        } else {
            button.classList.add('is-hidden');
        }
    }

    button.onclick = () => {
        document.body.scrollTop = 0; // safari
        document.documentElement.scrollTop = 0; // chrome, firefox, ie, and opera
    }
}
  

document.addEventListener('DOMContentLoaded', () => {
    remove();
    burgerDropdown();
    copyLinkButton();
    goTop();
});
