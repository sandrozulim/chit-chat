import ChatPanel from "../components/ChatPanel";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <ChatPanel />
    </div>
  );
}

export default Home;
