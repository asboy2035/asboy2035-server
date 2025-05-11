import playlists from "./data/playlists.json"

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const path = url.pathname

    let responseData = {}
    let status = 200

    switch (path) {
      case "/apps":
        responseData = (await import("./data/apps.json")).default
        break
      case "/cursors":
        responseData = (await import("./data/cursors.json")).default
        break
      case "/playlists":
        responseData = playlists
        break
      default:
        responseData = { error: "Not Found" }
        status = 404
    }

    return new Response(JSON.stringify(responseData), {
      status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  },
}