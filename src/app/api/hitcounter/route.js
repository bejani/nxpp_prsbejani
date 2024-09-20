import db from "../../../../lib/db"; // Your database connection

export async function GET(request) {
  // Get the page path from the query string (you can adjust this as needed)
  const page = request.nextUrl.searchParams.get("page") || "/";

  // Check if the page exists in the database
  const hitQuery = db.prepare("SELECT * FROM page_hits WHERE page = ?");
  const pageHit = hitQuery.get(page);

  if (pageHit) {
    // Increment the hit count if the page exists
    const updateHitCount = db.prepare(
      "UPDATE page_hits SET hits = hits + 1 WHERE page = ?"
    );
    updateHitCount.run(page);

    return new Response(JSON.stringify({ hits: pageHit.hits + 1 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    // If the page doesn't exist, create an entry for it
    const insertPage = db.prepare(
      "INSERT INTO page_hits (page, hits) VALUES (?, 1)"
    );
    insertPage.run(page);

    return new Response(JSON.stringify({ hits: 1 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
