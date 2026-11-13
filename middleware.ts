import { NextRequest, NextResponse } from "next/server";

const canonicalHost = "consultoriomoiras.com.ar";

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const requestHost = (forwardedHost ?? request.headers.get("host") ?? request.nextUrl.hostname)
    .split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase();

  if (requestHost !== `www.${canonicalHost}`) {
    return NextResponse.next();
  }

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    `https://${canonicalHost}`,
  );

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: "/:path*",
};
