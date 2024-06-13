import { LoginForm } from "@/components/auth/login-form";

export default function Page() {
  console.log("Enters login page");
  return (
    <div className="grid gap-8">
      <div className="font-medium text-xl text-center">Log In</div>
      <LoginForm />
    </div>
  );
}
