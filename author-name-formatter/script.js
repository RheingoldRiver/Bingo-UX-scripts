// ==UserScript==
// @name         Author Name Formatter for Goodreads
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Reformat author name from "LastName, FirstName" to "FirstName LastName" on Goodreads
// @author       You
// @match        *://*.goodreads.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to reformat the author names
    function reformatAuthorNames() {
        const elements = document.querySelectorAll('.field.author > .value > a');
        elements.forEach(function(element) {
            const currentText = element.textContent;
            const parts = currentText.split(', ');
            if (parts.length === 2) {
                const newText = `${parts[1]} ${parts[0]}`;
                element.textContent = newText;
            }
        });
    }

    // Create a MutationObserver to handle changes in the DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                reformatAuthorNames();
            }
        });
    });

    // Configuration of the observer:
    const config = { childList: true, subtree: true };

    // Start observing the body for added elements
    observer.observe(document.body, config);

    // Also run once on page load
    window.addEventListener('load', reformatAuthorNames);
})();
