import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { data } = await request.json();

    // Define the path to the public folder to store the file
    const filePath = path.join(process.cwd(), "public", "data.txt");

    // Write the data to the file
    fs.writeFileSync(filePath, data);

    // Respond with a success message
    return NextResponse.json({ message: "Data written to file successfully" });
  } catch (error) {
    console.error("Error writing to file:", error);
    return NextResponse.json(
      { message: "Error writing to file" },
      { status: 500 }
    );
  }
}
