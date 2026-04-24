import { BrowseFeed } from "@/components/mockup/browse-feed";
import { ChatOffer } from "@/components/mockup/chat-offer";
import { DistrictGrid } from "@/components/mockup/district-grid";
import { ListingDetail } from "@/components/mockup/listing-detail";
import { NewListing } from "@/components/mockup/new-listing";
import { PhoneFrame } from "@/components/phone-frame";

export default function Bake() {
  return (
    <main className="p-12 bg-white flex flex-wrap gap-10">
      <div id="phone-browse">
        <PhoneFrame>
          <BrowseFeed />
        </PhoneFrame>
      </div>
      <div id="phone-listing-detail">
        <PhoneFrame>
          <ListingDetail />
        </PhoneFrame>
      </div>
      <div id="phone-new-listing">
        <PhoneFrame>
          <NewListing />
        </PhoneFrame>
      </div>
      <div id="phone-chat">
        <PhoneFrame>
          <ChatOffer />
        </PhoneFrame>
      </div>
      <div id="phone-district">
        <PhoneFrame>
          <DistrictGrid />
        </PhoneFrame>
      </div>
    </main>
  );
}
