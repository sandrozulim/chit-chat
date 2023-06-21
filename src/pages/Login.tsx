import Input from "../components/shared/Input";
import Button from "../components/shared/Button";

function Login() {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-xl flex-col items-center justify-center">
      <form className="flex w-full flex-col gap-10 rounded-lg bg-white p-8 shadow-lg shadow-neutral-600">
        <h3 className="mb-6 text-center text-4xl font-medium text-purple-400">Login</h3>
        <Input type="email" id="email" placeholder="Email" />
        <Input type="password" id="psw" placeholder="Password" />
        <p className="text-s text-right text-purple-500">Don't have an account? Register</p>
        <Button onClick={() => console.log("alo")}>Sign in</Button>
      </form>
    </div>
  );
}

export default Login;
