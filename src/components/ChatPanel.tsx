import Messages from "./Messages";
import Input from "./shared/Input";

function ChatPanel() {
  return (
    <div className="flex flex-col">
      <Messages />
      <Input id="message" className="w-full" />
    </div>
  );
}

export default ChatPanel;
