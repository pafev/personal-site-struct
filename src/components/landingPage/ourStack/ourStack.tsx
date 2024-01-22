import StackCard from "./stackCard";

export default function OurStack() {
  return (
    <section className="my-8 flex justify-center gap-14 font-semibold">
      <StackCard
        stackImgSrc="nextjs-boilerplate-logo_j1ysaq"
        stackName="Next.js"
      />
      <StackCard stackImgSrc="tailwind-logo_k3yg7n" stackName="Tailwind" />
      <StackCard stackImgSrc="prisma_w0kgku" stackName="Prisma.io" />
      <StackCard
        stackImgSrc="digitalocean-icon_fixspa"
        stackName="Digital Ocean"
      />
    </section>
  );
}
