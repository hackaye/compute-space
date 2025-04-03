/**
 * THIS COMPUTE CODE RUNS ON THE FASTLY EDGE
 *
 * 🚀 🚀 🚀 Make sure you deploy again whenever you make a change here 🚀 🚀 🚀
 *
 */

// We use a function to handle requests to the origin
addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(_event) {
  //The request the user made
  let req = _event.request;
  let url = new URL(req.url);

  //Find out the user location info
  try {

    // Set the stylesheet
    let style = "/edge.css";
    
    // 🚧 🚧 🚧 Add the code from the README on the next line 🚧 🚧 🚧
    
    if (url.pathname.indexOf(".css") >= 0) url.pathname = style;

    // Build a new request
    req = new Request(url, req);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }

  //Get the origin response
  let backendResponse = await fetch(req, {
    backend: "website",
  });

  return backendResponse;
}
