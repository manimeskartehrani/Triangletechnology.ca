// src/app/api/posts/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export function GET() {
  const posts = getAllPosts();
  return NextResponse.json({ posts });
}
