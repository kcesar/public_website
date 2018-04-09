window.onload = function() {
    // Switch the hover dropdowns to JavaScript based. Benefits of doing this are that if JavaScript is disabled
    // or fails to load, site still works for mouse users. Additionally, the HTML doesn't have to be changed with
    // this option! And click handlers don't have to manually be added to each element.
    [].forEach.call(Array.from(document.getElementsByClassName("w3-dropdown-hover")), function(dropdownHeaderEl) {
        dropdownHeaderEl.className = dropdownHeaderEl.className.replace("w3-dropdown-hover", "w3-dropdown-click");
        dropdownHeaderEl.onclick = onDropdownClick.bind(null, dropdownHeaderEl);
        dropdownHeaderEl.onmouseover = onDropdownMouseOver.bind(null, dropdownHeaderEl);
        dropdownHeaderEl.onmouseout = onDropdownMouseOut.bind(null, dropdownHeaderEl);
    });
};

// Properties that support Edge-specific behavior where user using touch screen
// needs to show and keep the menu shown, and then also close when clicking again
var s_currClickedDropdownHeader;
var s_timeInMillisecondsWhenClickedDropdownHeader;
var s_shouldNonMobileClickClose = false;

function onDropdownClick(dropdownHeaderEl) {

    // Cache and reset should close flag
    var shouldNonMobileClickClose = s_shouldNonMobileClickClose && s_currClickedDropdownHeader == dropdownHeaderEl;
    s_shouldNonMobileClickClose = false;

    // Remember that this header was just clicked (later used in mouse out)
    s_currClickedDropdownHeader = dropdownHeaderEl;
    s_timeInMillisecondsWhenClickedDropdownHeader = new Date().getTime();

    // Cache whether clicked dropdown is currently visible
    var dropdownContentEl = getDropdownContentEl(dropdownHeaderEl);
    var isCurrentlyVisible = isDropdownContentVisible(dropdownContentEl);

    // If currently visible and in non-Mobile mode, don't do anything (don't collapse).
    // We'll let the mouse out collpase. Note that we DO want clicks to show if currently
    // dont visible, since iPads would be using the non-Mobile but don't work with mouse events.
    if (isCurrentlyVisible && !isMobileView(dropdownHeaderEl)) {

        // But if was tapped from touch, click should close. This specifically supports Edge
        // scenarios where if user is using touch, they can never close
        if (shouldNonMobileClickClose) {
            setDropdownContentVisibility(dropdownContentEl, false);
        }

        return;
    }

    // Hide all dropdowns
    hideAllDropdowns();

    // If it wasn't previously visible, show it
    if (!isCurrentlyVisible) {
        setDropdownContentVisibility(dropdownContentEl, true);
    }

}


function onDropdownMouseOver(dropdownHeaderEl) {

    // Clear curr clicked if different
    if (s_currClickedDropdownHeader != dropdownHeaderEl) {
        s_currClickedDropdownHeader = null;
    }

    // On Mobile, don't use mouse over events. See onDropdownMouseOut for explanation.
    if (isMobileView(dropdownHeaderEl)) {
        return;
    }

    // Hide all dropdowns (in case one failed to hide in other code)
    hideAllDropdowns();

    // Show this dropdown
    setDropdownVisibility(dropdownHeaderEl, true);
}

function onDropdownMouseOut(dropdownHeaderEl) {

    // On Mobile, don't use mouse out events as it leads to incorrect clicks being
    // performed on Android devices when expanding a different menu when the current
    // menu is expanded, since mouse out event occurs before the click, causing the
    // layout to move, and then the click gets executed on different content.
    // Additionally, when in Mobile view, only using clicks makes more sense from UX perspective.
    if (isMobileView(dropdownHeaderEl)) {
        return;
    }

    // If this header was just clicked in last 10 milliseconds, ignore the mouse out.
    // This is to support Microsoft Edge when user uses touch on non-Mobile, since first
    // the click event occurs, and then immediatelly after the mouse out event occurs, which
    // would cause the menu to disappear.
    if (dropdownHeaderEl == s_currClickedDropdownHeader && s_timeInMillisecondsWhenClickedDropdownHeader + 10 > new Date().getTime()) {
        s_shouldNonMobileClickClose = true;
        return;
    }

    s_currClickedDropdownHeader = null;
    s_shouldNonMobileClickClose = false;

    setDropdownVisibility(dropdownHeaderEl, false);

}

function hideAllDropdowns() {
    [].forEach.call(document.getElementsByClassName("w3-dropdown-content"), function(dropdownContentEl) {
        setDropdownContentVisibility(dropdownContentEl, false);
    });
}

function setDropdownVisibility(dropdownHeaderEl, shouldBeVisible) {
    
    // Have to get the content element
    var dropdownContentEl = getDropdownContentEl(dropdownHeaderEl);
    setDropdownContentVisibility(dropdownContentEl, shouldBeVisible);

}

function setDropdownContentVisibility(dropdownContentEl, shouldBeVisible) {

    if (isDropdownContentVisible(dropdownContentEl)) {

        // If shouldn't be visible, hide it
        if (!shouldBeVisible) {
            dropdownContentEl.className = dropdownContentEl.className.replace(" w3-show", "");
        }

    }

    else {
        
        // If should be visible, show it
        if (shouldBeVisible) {
            dropdownContentEl.className += " w3-show";
        }

}

}

function isDropdownContentVisible(dropdownContentEl) {
    return dropdownContentEl.className.indexOf(" w3-show") != -1;
}

function getDropdownContentEl(dropdownHeaderEl) {
    return dropdownHeaderEl.getElementsByClassName("w3-dropdown-content").item(0);
}

function isMobileView(dropdownHeaderEl) {
    // Determining mobile view by inspecting the computed style of the dropdown header element.
    // The CSS applies center text alignment when width < 600. We could hardcode behavior based on
    // width, but then if CSS gets updated to use a different width value, this would also break.
    // Theoretically the center alignment behavior could change too, but is less likely.
    return window.getComputedStyle(dropdownHeaderEl).textAlign === "center";
}