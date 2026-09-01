import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy (tidigare "middleware" – omdöpt i Next 16).
 *
 * Tvingar HTTPS: Passenger/Apache terminerar SSL och skickar vidare
 * X-Forwarded-Proto. Kommer requesten in som http omdirigerar vi 301 till
 * https. Cert (Let's Encrypt wildcard) finns redan – detta fixar "Not Secure".
 */
export function proxy(request: NextRequest) {
  if (request.headers.get("x-forwarded-proto") === "http") {
    const host = request.headers.get("host");
    if (host) {
      const { pathname, search } = request.nextUrl;
      return NextResponse.redirect(`https://${host}${pathname}${search}`, 301);
    }
  }
  return NextResponse.next();
}

export const config = {
  // Kör på allt utom Next-interna statiska filer (de ärver sidans protokoll).
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
