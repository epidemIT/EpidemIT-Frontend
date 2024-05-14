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
          <div className="px-[6%] mt-8 fixed w-screen">
            <Navbar user={user} />
          </div>
        )}
      </UserFetcher>
      <div>{children}</div>
    </>
  );
}
