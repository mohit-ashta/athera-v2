import { Footer } from "@/features/home-page/components/common/footer";
import { Header } from "@/features/home-page/components/common/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        floating={false}
        className="bg-blend-multiply !bg-black/60 bg-[url('/assets/card-banner.webp')]  bg-cover bg-center pb-4"
      />
      {children}
      <Footer />
    </>
  );
}
