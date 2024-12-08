// ==UserScript==
// @name         Goodreads Book Title Copier with Icon
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button with an icon to copy book titles on Goodreads
// @author       RheingoldRiver
// @match        https://www.goodreads.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // Function to create the copy button with the SVG icon
    function createCopyButton(textToCopy) {
        const button = document.createElement('button');
        button.style.marginLeft = '10px';
        button.style.border = 'none';
        button.style.background = 'none';
        button.style.cursor = 'pointer';
        button.style.display = 'flex';

        // Add SVG icon
        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/>
            </svg>
        `;
        button.innerHTML = svg;

        button.addEventListener('click', function(e) {
            e.preventDefault();
            copyToClipboard(textToCopy);
            button.style.color = '#146700';
            setTimeout(() => {
                button.style.color = 'unset';
            }, 3000);
        });

        return button;
    }

    function insertCopyButton(bookTitleElement) {
      if (!bookTitleElement) return;
      const textToCopy = bookTitleElement.textContent;
      // Wrap the book title contents in a span
      const span = document.createElement('span');
      span.innerHTML = bookTitleElement.innerHTML;
      bookTitleElement.innerHTML = '';
      bookTitleElement.appendChild(span);
      bookTitleElement.style.display = 'flex';
      bookTitleElement.style.justifyContent = 'space-between';
      bookTitleElement.style.alignItems = 'center';

      // Create and insert the copy button
      const copyButton = createCopyButton(textToCopy);
      bookTitleElement.appendChild(copyButton);
    }
  
    // Wait for the page to load
    window.addEventListener('load', function() {
        insertCopyButton(document.querySelector('h1[data-testid="bookTitle"]'));
        document.querySelectorAll('.ContributorLink__name').forEach(insertCopyButton);
        document.querySelector('.ContributorLink__badge').style.display = 'none';
    });
})();
