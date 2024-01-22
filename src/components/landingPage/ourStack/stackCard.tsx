import CloudinaryImg from "~/components/ui/cloudinaryImg";

export default function StackCard({
  stackName,
  stackImgSrc,
}: {
  stackName: string;
  stackImgSrc: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <CloudinaryImg src={stackImgSrc} alt="next-logo" width={50} height={50} />
      <span>{stackName}</span>
    </div>
  );
}
