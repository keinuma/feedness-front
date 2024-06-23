import { NextResponse } from "next/server";
import { getFeeds } from "../../../lib/data";

export async function GET() {
  const feeds = getFeeds();
  return NextResponse.json({ feeds }, { status: 200 });
}
