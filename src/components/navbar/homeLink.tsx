import Link from "next/link";
import CloudinaryImg from "../ui/cloudinaryImg";

export default function HomeLink() {
  return (
    <Link href="/" className="ml-14 mr-4">
      <CloudinaryImg
        src="avatar-transparente_vnaeni"
        alt="logo"
        width={60}
        height={60}
      />
    </Link>
  );
}
