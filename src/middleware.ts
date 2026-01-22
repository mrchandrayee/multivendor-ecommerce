import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import countries from "@/data/countries.json";
import { Country } from "./lib/types";

// Temporarily disabled Clerk middleware - uncomment when you have valid Clerk keys
// export default clerkMiddleware(async (auth, req, next) => {

// Temporary basic middleware without Clerk
export default async function middleware(req: any) {
  // Creating a basic response
  let response = NextResponse.next();

  /*---------Handle Country detection----------*/
  // Step 1: Check if country is already set in cookies
  const countryCookie = req.cookies.get("userCountry");

  const DEFAULT_COUNTRY: Country = {
    name: "United States",
    code: "US",
    city: "",
    region: "",
  };

  if (countryCookie) {
    // If the user has already selected a country, use that for subsequent requests
    response = NextResponse.next();
  } else {
    // Step 2: Get the user country using the helper function
    const geo = geolocation(req);
    let userCountry = {
      name:
        countries.find((c) => c.code === geo.country)?.name ||
        DEFAULT_COUNTRY.name,
      code: geo.country || DEFAULT_COUNTRY.code,
      city: geo.city || DEFAULT_COUNTRY.city,
      region: geo.region || DEFAULT_COUNTRY.region,
    };
    response.cookies.set("userCountry", JSON.stringify(userCountry), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }

  return response;
}

// Temporarily disabled Clerk middleware - uncomment when you have valid Clerk keys
//   return response;
// });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
