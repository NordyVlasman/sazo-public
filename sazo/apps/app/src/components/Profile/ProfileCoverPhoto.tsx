import Image from "next/image";

type Props = {
  src: string | null;
};

export function ProfileCoverPhoto(props: Props) {
  const { src } = props;

  if (!src) return null;

  return (
    <div className="px-0 mb-2 -mx-4 sm:mx-auto max-w-7xl">
      <Image
        priority
        width={1248}
        height={416}
        src={src}
        className="object-cover object-center  mx-auto mt-0 w-full aspect-[3/1] max-w-7xl sm:rounded-b-xl place-content-start ring-1 ring-black ring-opacity-5"
        alt="cover photo"
      />
    </div>
  );
}
