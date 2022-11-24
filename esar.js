window.onload = () => {
    addHeader();
    addDonateCallToAction();
    addFooter();

    // Toggle menu if user clicks menu button
    document.querySelector('.menu-btn').addEventListener('click', (e) => {
        document.querySelector('.main-menu').classList.toggle('show');
        e.stopPropagation(); // Prevent the hide when clicking outside menu
    });
    // Hide menu if user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.clientX <= (.5 * window.innerWidth) || e.clientY <= 60) {
            document.querySelector('.main-menu').classList.remove('show');
        }
    });
}
    
function addHeader() {
    let header = document.querySelector('header');
    if (header === null) {
        return;
    }

    let nav = getContainerDiv();
    nav.classList.add('nav');

    // Make Menu Button
    let menuBtn = document.createElement('i');
    menuBtn.classList.add('menu-btn','fas','fa-bars','fa-2x');
    nav.appendChild(menuBtn);

    // Make Nav Menu
    let navMenu = document.createElement('nav');

    // Add Logo
    let logo = document.createElement('img');
    logo.src = './assets/logo/logo_kcesar_300x300.png';
    logo.classList.add('wordmark-logo');
    //navMenu.appendChild(logo);
    navMenu.appendChild(getLink('./index.html', logo));

    // Add Wordmark
    let wordmark = document.createElement('h2');
    wordmark.classList.add('wordmark');
    wordmark.appendChild(getLink('./index.html', document.createTextNode('King County ESAR'), null));
    navMenu.appendChild(wordmark);

    // Add Main Menu
    let mainMenu = document.createElement('ul');
    mainMenu.classList.add('main-menu');
    mainMenu.appendChild(getListItem(getLink('./index.html', document.createTextNode('Home'), ['menu-item'])));
    mainMenu.appendChild(getListItem(getLink('./about.html', document.createTextNode('About Us'), ['menu-item'])));
    mainMenu.appendChild(getListItem(getLink('./donate.html', document.createTextNode('Donate'), ['menu-item'])));
    mainMenu.appendChild(getListItem(getLink('./recruiting.html', document.createTextNode('Join'), ['menu-item'])));
    mainMenu.appendChild(getListItem(getLink('https://accounts.google.com/AccountChooser?continue=https://sites.google.com/kcesar.org/members', document.createTextNode('Members'), ['menu-item'])));
    mainMenu.appendChild(getListItem(getLink('./contacts.html', document.createTextNode('Contact'), ['menu-item'])));
    navMenu.appendChild(mainMenu);

    // Add Social Menu
    let socialMenu = document.createElement('ul');
    socialMenu.classList.add('social-menu');
    let fbLink = getLink('https://www.facebook.com/kingcountyesar/', getFaIcon(['fab', 'fa-facebook-square']), ['menu-item']);
    fbLink.target = "_blank";
    socialMenu.appendChild(getListItem(fbLink));
    navMenu.appendChild(socialMenu);

    nav.appendChild(navMenu);

    header.appendChild(nav);
}

function addDonateCallToAction() {
    let cta = document.querySelector('.call-to-action-donate');
    if (cta === null) {
        return;
    }

    // Build Content
    let container = getContainerDiv();
    container.classList.add('flex-column');
    container.appendChild(getHeading('2', ['center', 'padding-bottom'], document.createTextNode(
        'King County Explorer Search & Rescue (ESAR) is a 501(c)(3) Volunteer Organization'
    )));
    container.appendChild(getParagraph(['bold','center','padding-bottom'], document.createTextNode(
        'Our members respond to over 150 emergencies every year.'
    )));
    container.appendChild(getParagraph(['padding-bottom','justify'], document.createTextNode(
        'ESAR is King County\'s primary wilderness ground search and rescue organization. Our ' +
        'members are outdoor enthusiasts with a passion for helping those in need. 100% of ' +
        'funding for training, operations, and critical, life-saving equipment comes from ' +
        'generous donations by local businesses, the communities that we serve, our volunteers, '+
        'and people like you.'
    )));
    container.appendChild(getParagraph(['center'],
        getLink('./donate.html', document.createTextNode('Donate Today'), ['btn','btn-yellow'])
    ));

    cta.appendChild(container);
}

function addFooter() {
    let footer = document.querySelector('footer');
    if (footer === null) {
        return;
    }

    // Build Content
    let container = getContainerDiv();
    container.classList.add('flex-row');

    // Add Logo
    container.appendChild(getImg('./assets/logo/logo_kcesar_300x300.png', ['wordmark-logo']));
    
    // Add Wordmark
    let wordmark = document.createElement('div');
    wordmark.classList.add('wordmark');
    wordmark.appendChild(getHeading('2', null, document.createTextNode('King County ESAR')));
    wordmark.appendChild(getParagraph(null, document.createTextNode('© KCESAR • PO Box 1266 • North Bend, WA 98045')));
    container.appendChild(wordmark);

    // Add Links
    let footerLinks = document.createElement('ul');
    footerLinks.appendChild(getListItem(getLink('./about.html', document.createTextNode('About Us'))));
    footerLinks.appendChild(getListItem(getLink('./contacts.html', document.createTextNode('Contact Us'))));
    footerLinks.appendChild(getListItem(getLink('./assets/doc/KCESAR_Code_of_Conduct.pdf', document.createTextNode('Code of Conduct'))));
    container.appendChild(footerLinks);

    footer.appendChild(container);
}

function getImg(src, classList) {
    let img = document.createElement('img');
    if (classList != null) {
        img.classList.add(...classList)
    }
    img.src = src;
    return img;
}

function getHeading(sizeAsText, classList, content) {
    let heading = document.createElement('h' + sizeAsText);
    if (classList != null) {
        heading.classList.add(...classList);
    }
    heading.appendChild(content);
    return heading;
}

function getParagraph(classList, content) {
    let par = document.createElement('p');
    if (classList != null) {
        par.classList.add(...classList);
    }
    par.appendChild(content);
    return par;
}

function getContainerDiv() {
    let container = document.createElement('div');
    container.classList.add('container');
    return container;
}

function getFaIcon(classList) {
    let faIcon = document.createElement('i');
    faIcon.classList.add(...classList);
    return faIcon;
}

function getLink(ref, label, classList) {
    let link = document.createElement('a');
    if (classList != null) {
        link.classList.add(...classList);
    }
    link.href = ref;
    link.appendChild(label);
    return link;
}

function getListItem(value) {
    let li = document.createElement('li');
    li.appendChild(value);
    return li;
}