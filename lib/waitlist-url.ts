const DEFAULT_WAITLIST_URL = "https://forms.gle/NYDWMkJwzWLuUcBh9";

export function getWaitlistUrl(): string {
  return process.env.NEXT_PUBLIC_WAITLIST_URL || DEFAULT_WAITLIST_URL;
}
