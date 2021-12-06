function eventDelegation(event, nodeType, className) {
    //attaching eventListeners to the main books div, checks if target is what we want
    if (event.target && event.target.nodeName === nodeType.toUpperCase()) {
        if (event.target.classList.contains(className)) {
            return true;
        }
    }
}

function eventDelegationCheck(node, nodeType, className) {
    //attaching eventListeners to the main books div, checks if target is what we want
    if (node && node.nodeName === nodeType.toUpperCase()) {
        if (node.classList.contains(className)) {
            return true;
        }
    }
}

export {eventDelegation, eventDelegationCheck}