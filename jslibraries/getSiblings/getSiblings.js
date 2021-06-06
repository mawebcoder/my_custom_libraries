//getElement siblings
function getSiblings(el) {
    let siblings = [];
    sibling = el.parentNode.firstElementChild;
    while (sibling) {
        if (el != sibling) {
            siblings.push(sibling)
        }
        sibling = sibling.nextElementSibling;

    }
    return siblings;
}