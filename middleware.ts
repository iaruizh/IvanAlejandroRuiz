import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const ES_PATHS = ["/sobre-mi", "/conferencias", "/prensa", "/blog"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/en") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

  if (preferredLang === "en" && !ES_PATHS.some((p) => pathname.startsWith(p))) {
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/en";
      return NextResponse.redirect(url, { status: 302 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
