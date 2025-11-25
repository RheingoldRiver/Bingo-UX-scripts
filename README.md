## What's in this repo

This repo contains a bunch of small user script utilities I (/u/RheingoldRiver) use to make my life better on /r/fantasy and also when doing things related to /r/fantasy Bingo or other reading-related things online. Mostly I write them by prompting chatgpt. Here's [an example convo](https://chatgpt.com/share/6777666a-d770-8001-b40e-328edd199b50).

## Installation instructions for all scripts
1. Install Tampermonkey for either [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey) or [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. Open the JS file of the script you want to install right now:
    * [this one for author name formatter](https://github.com/RheingoldRiver/Bingo-UX-scripts/blob/main/author-name-formatter/script.js)
    * [this one for book title copier](https://github.com/RheingoldRiver/Bingo-UX-scripts/blob/main/book-title-copier/script.js)
    * [this one for upcoming SFF books posts](https://github.com/RheingoldRiver/Bingo-UX-scripts/blob/main/sff-books-coming-in/user-script.js)
3. Copy ALL of the code in that file, including the comments (all the way from line 1 to the end). You will paste it in a later step.
4. Tampermonkey should have an extension icon in your toolbar, if not then customize your toolbars and click and drag that into your toolbar so it's showing up
5. Left-click the tampermonkey icon and click the + to add a script
6. Paste the code you copied in step 2 (you may have to go back and re-copy if you used your clipboard in between)
7. Save
8. Open one of the pages the script should apply on (you will need to refresh it if you were already there)
9. it should now work!
10. Repeat steps 2-9 for the other script(s) you want to install

If you are using Chrome you may additionally need to enable developer mode for your Chrome extensions and then click "Update" after you do that. You can also see the [tampermonkey FAQ](https://www.tampermonkey.net/faq.php?locale=en) for additional installation instructions.

## A note on trusting user scripts in general

Please keep in mind that running untrusted JavaScript can always inject malicious code into your browser. If you don't understand what the code is doing, you can paste it into an LLM such as ChatGPT and ask if any malicious code is being run, and also how certain is it of the response. Code that makes no network calls is pretty likely to be safe but you should still check.
