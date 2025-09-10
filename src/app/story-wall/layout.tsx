import { Footer } from "@/features/home-page/components/common/footer";
import { Header } from "@/features/home-page/components/common/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header floating={false} />
      {children}
      <Footer />
    </>
  );
}
