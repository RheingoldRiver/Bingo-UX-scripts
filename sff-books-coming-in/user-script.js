// ==UserScript==
// @name         Replace SFF Titles with Goodreads Search
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace book titles in Reddit posts with Goodreads search links
// @author       RheingoldRiver (+ prompting chatGPT I'm too lazy to do this myself)
// @match        *://*.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the page matches the criteria
    // Note - may want a slightly stricter check here (e.g.  username check, subreddit check?) but it's not particularly harmful if it overmatches so I'm not concerned
    const entries = document.querySelectorAll('.entry .top-matter .title a');
    let found = false;

    entries.forEach(entry => {
        if (entry.textContent.includes("SFF books coming in")) {
            found = true;
        }
    });

    if (!found) {
        return; // Exit if the criteria is not met
    }

    // Select the target container
    const bookListContainers = document.querySelectorAll('.usertext-body .md');

    bookListContainers.forEach(container => {
        const listItems = container.querySelectorAll('li'); // Select all list items

        listItems.forEach(li => {
            const match = li.textContent.match(/^(.*) - (.*)$/);
            if (match) {
                const title = match[1].trim();
                const author = match[2].trim();
                const goodreadsLink = `<a href="https://www.goodreads.com/search?query=${encodeURIComponent(title)}" target="_blank">${title}</a>`;
                li.innerHTML = `${goodreadsLink} - ${author}`;
            }
        });
    });
})();
