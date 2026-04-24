import { BrowseFeed } from "@/components/mockup/browse-feed";
import { ChatOffer } from "@/components/mockup/chat-offer";
import { DistrictGrid } from "@/components/mockup/district-grid";
import { ListingDetail } from "@/components/mockup/listing-detail";
import { NewListing } from "@/components/mockup/new-listing";
import { PhoneFrame } from "@/components/phone-frame";

export default function Mockups() {
  return (
    <main className="p-12 flex flex-wrap gap-10 bg-surface-alt">
      <PhoneFrame>
        <BrowseFeed />
      </PhoneFrame>
      <PhoneFrame>
        <ListingDetail />
      </PhoneFrame>
      <PhoneFrame>
        <NewListing />
      </PhoneFrame>
      <PhoneFrame>
        <ChatOffer />
      </PhoneFrame>
      <PhoneFrame>
        <DistrictGrid />
      </PhoneFrame>
    </main>
  );
}
