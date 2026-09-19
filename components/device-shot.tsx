import { clsx } from "clsx";

/**
 * A real app screenshot in a device bezel. The screens are 620x1256 crops of
 * the App Store shots (see public/screens), so they keep their own aspect.
 */
export function DeviceShot({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={clsx(
        "rounded-phone-outer bg-[#0f1113] p-[7px] shadow-[0_22px_48px_rgba(20,23,26,0.26)]",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={620}
        height={1256}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full rounded-phone-inner"
      />
    </div>
  );
}
