import Footer from "@/components/Footer";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20">
      {children}
      <Footer />
    </div>
  );
}
