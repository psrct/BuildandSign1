import Image from 'next/image';

export default function Home() {
  return (
    <div className="mt-[135px] w-full relative aspect-[1920/740] max-sm:mt-[88px] [@media(max-width:960px)]:mt-[88px]">
  <Image
    src="/poster.jpg"
    alt="Poster1"
    fill
    className="object-cover"
    priority='1'
  />
</div>
    
  );
}