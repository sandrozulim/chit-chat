import UserProfilePic from "./UserProfilePic";

function ConversationList() {
  return (
    <div>
      <ul className="flex flex-col gap-3 ">
        <li className="relative border-b border-purple-400 p-1 sm:p-2">
          <UserProfilePic />
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-neutral-400 sm:text-lg">
            text text texttext text texttext text texttext text texttext text texttext text text
          </p>

          <span className="absolute right-0 top-0 p-1 text-sm font-light text-neutral-400 sm:p-2 sm:text-base">
            13:31
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ConversationList;
