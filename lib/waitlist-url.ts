export function getWaitlistUrl(): string {
  const url = process.env.NEXT_PUBLIC_WAITLIST_URL;
  if (!url) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("NEXT_PUBLIC_WAITLIST_URL not set");
    }
    return "https://example.com/waitlist-placeholder";
  }
  return url;
}
