import playlists from "./data/playlists.json"
import apps from "./data/apps.json"
import cursors from "./data/cursors.json"

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const path: string = url.pathname

    let responseData = {}
    let status: number = 200

    switch (path) {
      case "/apps":
        responseData = apps
        break
      case "/cursors":
        responseData = cursors
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
