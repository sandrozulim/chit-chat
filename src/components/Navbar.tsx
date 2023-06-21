import Button from "./shared/Button";
import UserProfilePic from "./UserProfilePic";

function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-2 bg-neutral-900 p-1 sm:p-2">
      <UserProfilePic />
      <Button className="px-2 py-1" onClick={() => console.log("alo")}>
        Logout
      </Button>
    </div>
  );
}

export default Navbar;
