import { NextResponse } from "next/server";

// Force-update / maintenance config consumed by the Bindy mobile app
// (lib/appConfig.ts checkAppGate). This is the app's remote kill-switch:
//   - bump `minBuild` to force every build below it to update (the app compares
//     the NATIVE build number — iOS buildNumber / Android versionCode)
//   - flip `maintenance` to true to show the "back soon" screen to everyone
//   - `message` (optional) overrides the default copy on the blocking screen
// Store URLs need the real Apple App ID once the app is submitted to App Store
// Connect (the numeric id after "/app/id...").
export const dynamic = "force-static";
export const revalidate = 300; // rebuild the static payload every 5 min

export function GET() {
  return NextResponse.json(
    {
      maintenance: false,
      message: null,
      ios: {
        // 41 = the build behind App Store version 1.2, live since 2026-09-14
        // (verified via the public iTunes lookup before this was raised — raising
        // it earlier would trap 1.0/1.1 users on an update screen pointing at a
        // store that did not yet have 1.2). Raise to 43 once 1.2.1 is live.
        minBuild: 41,
        storeUrl: "itms-apps://apps.apple.com/app/id6794384936",
      },
      android: {
        minBuild: 1,
        storeUrl: "market://details?id=tech.nearmint.binder",
      },
    },
    { headers: { "Cache-Control": "public, max-age=60, s-maxage=300" } },
  );
}
