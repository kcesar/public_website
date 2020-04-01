let navBar = document.createElement('div');
navBar.classList.add('w3-row');
navBar.style = 'max-width: 1200px; margin: auto;';

navBar.appendChild(getNavBarButton('Home', './index.html'));
navBar.appendChild(getNavBarButton('Donate', './donate.html'));
navBar.appendChild(getNavBarDropdown('About Us', [
    getDropdownItem('About KCESAR', './about.html'),
    getDropdownItem('Contacts', './contacts.html')
    //getDropdownItem('Sponsors', './sponsors.html')
]));
navBar.appendChild(getNavBarDropdown('Members', [
    getDropdownItem('Member Resources', './members.html'),
    getDropdownItem('Respond to a Mission', 'https://respond.kcesar.org', 'newWindow'),
    //getDropdownItem('RAD Signup', 'https://www.signupgenius.com/index.cfm?go=s.SignupLogin&urlid=10C0945AAAB28A3F94-radteam', 'newWindow'),
    getDropdownItem('CARE Team', 'https://sarcareteam.wixsite.com/home', 'newWindow'),
    getDropdownItem('KCSARA Database', 'https://database.kcsara.org/', 'newWindow'),
    getDropdownItem('ESAR SharePoint', 'https://esar.sharepoint.com/', 'newWindow'),
    getDropdownItem('Page Out', 'https://page.kcesar.org', 'newWindow')
]));
navBar.appendChild(getNavBarButton('Join ESAR', './recruiting.html'));
navBar.appendChild(getNavBarFacebookButton());

document.getElementById('navbar').appendChild(navBar);


function getNavBarButton(label, src) {
    let navBarButton = document.createElement('a');
    navBarButton.classList.add('w3-bar-item', 'w3-button', 'w3-padding-16', 'w3-mobile');
    navBarButton.appendChild(document.createTextNode(label));
    navBarButton.href = src;
    return navBarButton;
}

function getNavBarFacebookButton() {
    let navBarButton = document.createElement('a');
    navBarButton.classList.add('w3-bar-item', 'w3-button', 'w3-padding-16', 'w3-mobile');
    navBarButton.append(getFaIcon('fa-facebook-official', 'font-size:18px;'));
    navBarButton.target = '_blank';
    return navBarButton;
}

function getNavBarDropdown(label, items) {
    let navBarDropdown = document.createElement('div');
    navBarDropdown.classList.add('w3-dropdown-hover', 'w3-mobile');
    navBarDropdown.appendChild(getDropdownLabel(label));
    navBarDropdown.appendChild(getDropdownItems(items));
    return navBarDropdown;
}

function getDropdownLabel(label) {
    let dropdownLabel = document.createElement('span');
    dropdownLabel.classList.add('w3-button', 'w3-padding-16');
    dropdownLabel.appendChild(document.createTextNode(label + ' '));
    dropdownLabel.appendChild(getFaIcon('fa-caret-down'));
    return dropdownLabel;
}

function getDropdownItems(items) {
    let dropdownItems = document.createElement('div');
    dropdownItems.classList.add('w3-dropdown-content', 'w3-card-4', 'w3-bar-block');
    let i;
    for (i = 0; i < items.length; i++) {
        dropdownItems.appendChild(items[i]);
    }
    return dropdownItems;
}

function getDropdownItem(label, src, modifier) {
    let dropdownItem = document.createElement('a');
    dropdownItem.classList.add('w3-bar-item', 'w3-button');
    dropdownItem.appendChild(document.createTextNode(label));
    if (modifier !== null) {
        if (modifier === 'newWindow') {
            dropdownItem.appendChild(document.createTextNode(' '));
            dropdownItem.appendChild(getFaIcon('fa-external-link'));
            dropdownItem.target = '_blank';
        }
    }
    dropdownItem.href = src;
    return dropdownItem;
}

function getFaIcon(iconType, style) {
    let faIcon = document.createElement('i');
    faIcon.classList.add('fa', iconType);
    if (style !== null) {
        faIcon.style = style;
    }
    return faIcon;
}