# My Compute App

Hiya this is an app that runs at the edge!

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/SueSmith/my-compute-app)

Try the app out by opening it in a codespace: 

* Create a fork of this repo
* Click **Code** > **Codespaces**
* Create a codespace on the current branch

Your codespace will perform a few setup tasks including automatically running your new Compute app on a local server – _it might take a couple of minutes to start up._

This starter kit changes the behavior of a website at the edge. Check out the <a href="https://suesmith.github.io/" target="_blank">origin version of the site</a> – you might notice that the style is different at the edge, that's because our Compute code switches the stylesheet.

In your codespace preview:

* Try opening a page that doesn't exist: `/ohno`
* Now try a page that the origin returns as JSON: `/data.json`
* Take a look in the `src/index.js` file for the code!

Explore the code:

* Your `fastly.toml` file includes the service config
* The `src/index.js` file includes the application logic

The functionality:

* The app changes the stylesheet from `style.css` to `edge.css`
* It also adds a cookie to the response (the origin website writes it into the page)
* If the request is for a `json` file, send the data back in a synthetic HTML page
* We send synthetic pages back for any 404 or 500 errors

Make a change to the `index.js` code, like changing the content in the synthetic HTML page! The Fastly CLI will automatically rebuild and run the app – you'll see the effects in the preview.
