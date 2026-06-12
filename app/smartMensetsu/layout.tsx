export default function SmartMensetsuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* Suppress the site header/footer for this embed-only route */}
      <style
        dangerouslySetInnerHTML={{
          __html: `header, footer { display: none !important; }`,
        }}
      />
      {children}
    </div>
  );
}
