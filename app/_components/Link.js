import Link from "next/link";

export default function CustomLink() {
  return (
    <Link
      className=" w-[30px] rounded-md  ml-5 bg-blue-500 p-2 text-white"
      href={"/dashboard"}
    >
      Back
    </Link>
  );
}
