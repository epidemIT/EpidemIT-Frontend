import Navbar from "@/components/Navbar";
import UserFetcher from "@/components/UserFetcher";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserFetcher>
        {({ user }) => (
          <div className="fixed w-screen">
            <Navbar home user={user} />
          </div>
        )}
      </UserFetcher>
      <div>{children}</div>
    </>
  );
}
