import ConversationList from "./ConversationList";
import Navbar from "./Navbar";

function Sidebar() {
  return (
    <>
      <aside className="h-screen w-2/5 bg-neutral-800 sm:w-1/3">
        <Navbar />
        <ConversationList />
      </aside>
    </>
  );
}

export default Sidebar;
