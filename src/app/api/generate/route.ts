import { NextResponse } from "next/server";
import { addFeed } from "../../../lib/data";

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ message: "URL is required" }, { status: 400 });
  }

  addFeed(url);

  return NextResponse.json(
    { message: "RSS feed generated successfully" },
    { status: 200 }
  );
}
