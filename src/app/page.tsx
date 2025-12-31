export default function Home() {
  return (
    <div className="p-10 space-y-4 relative min-h-screen w-full bg-cover sm:bg-[url(/bg-desktop-light.svg)] sm:dark:bg-[url(/bg-desktop.svg)] bg-[url(/bg-mobile-light.svg)] dark:bg-[url(/bg-mobile.svg)]">
      <p className="text-md">
        This is the "text-md" specification. (Medium weight)
      </p>
      <p className="text-sm">
        This is the "text-sm" specification. (Regular weight)
      </p>
    </div>
  );
}
