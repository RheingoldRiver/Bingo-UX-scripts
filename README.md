## What's in this repo

This repo contains a bunch of small user script utilities I (/u/RheingoldRiver) use to make my life better on /r/fantasy and also when doing things related to /r/fantasy Bingo or other reading-related things online. Mostly I write them by prompting chatgpt. Here's [an example convo](https://chatgpt.com/share/6777666a-d770-8001-b40e-328edd199b50).

## Installation instructions for all scripts

1. Install Tampermonkey for either [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey) or [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. In [this page](https://github.com/RheingoldRiver/Bingo-UX-scripts/blob/main/sff-books-coming-in/user-script.js) copy all of the code (ALL OF IT including the comments, lines 1 through 45)
3. Tampermonkey should have an extension icon in your toolbar, if not then customize your toolbars and click and drag that into your toolbar so it's showing up
4. Right-click the tampermonkey icon and click the + to add a script
5. Paste the code you copied in step 2 (you may have to go back and re-copy if you used your clipboard in between)
6. Save
7. Open one of your "SFF books coming in..." posts (you will need to refresh if it's already open) (and make sure u are in old.reddit)
8. it should now work!

If you are using Chrome you may additionally need to enable developer mode for your Chrome extensions and then click "Update" after you do that. You can also see the [tampermonkey FAQ](https://www.tampermonkey.net/faq.php?locale=en) for additional installation instructions.

## A note on trusting user scripts in general

Please keep in mind that running untrusted JavaScript can always inject malicious code into your browser. If you don't understand what the code is doing, you can paste it into an LLM such as ChatGPT and ask if any malicious code is being run, and also how certain is it of the response. Code that makes no network calls is pretty likely to be safe but you should still check.
