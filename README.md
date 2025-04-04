# My Compute App

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/SueSmith/my-compute-app)

Try the app out by opening it in a codespace: 

* Create a fork of this repo
* Click **Code** > **Codespaces**
* Create a codespace on the current branch

Your codespace will perform a few setup tasks including automatically running your new Compute app on a local server – _it might take a couple of minutes to start up._

## Get to know the app

This starter kit changes the behavior of a website at the edge. Check out the <a href="https://suesmith.github.io/" target="_blank">origin version of the site</a>.

In your codespace preview:

* Try opening a page that doesn't exist: `/ohno`
* Now try a page that the origin returns as JSON: `/data.json`

> 💡 **TIP**: Split the editor into two panes and drag the preview into the second one so that you can see your code and the website at the same time.

Explore the code:

* Your `fastly.toml` file includes the service config
* The `src/index.js` file includes the application logic

The functionality:

* The app changes the stylesheet from `style.css` to `edge.css`
* It grabs geolocation info about the request (this won't work reliably on the local server, read on to deploy to the Fastly network)
* It also adds a cookie to the response (the origin website writes it into the page)
* If the request is for a `json` file, we send the data back in a synthetic HTML page
* We send synthetic pages back for any 404 or 500 errors

## Make a change

Make a change to the `index.js` code, like changing the content in the synthetic HTML page! The Fastly CLI will automatically rebuild and run the app – you'll see the effects in the preview.

## Deploy to Fastly

When you're ready to deploy your app to the Fastly network, you'll need an API key and one command entered into the Terminal:

* Sign up for a <strong><a href="https://www.fastly.com/signup/" target="_blank">free Fastly developer account</a></strong>
* Grab an **API Token** from **Account** > **API Tokens** > **Personal Tokens**
  * _Type_: Automation
  * _Role_: Engineer
  * _Scope_: Global (deselect the _Read-only access_ box)
  * _Access_: All services
  * _Expiration_: Never expire
* Copy the value of your new token

In your GitHub fork of this repo, in **Settings** open **Secrets and variables** > **Codespaaces**

* Create a **new repository secret**
* Name the secret `FASTLY_API_TOKEN`
* Enter the token value you copied from your Fastly account
* Back in your codespace hopefully you see a prompt to update for your new repository secret

In the **Terminal** exit the local server with `CTRL+C`

* Enter `npx @fastly/cli compute publish`
  * Include `--auto-yes` and/or `--accept-defaults` if you just want to use the default options instead of responding to each prompt

The Terminal will output the address of your new app – open it in the browser!

## Keep going!

What else can you build on Compute? Check out the [code examples](https://www.fastly.com/documentation/solutions/examples/) for inspiration.

You can also [clone the example website](https://github.com/suesmith/suesmith.github.io) and deploy it to GitHub Pages if you like by following the instructions in its README (make sure you update the `toml` and `index.js` `root` values in your clone of the Compute app).

**Get help on the [Fastly community forum](https://community.fastly.com)**
