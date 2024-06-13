import { SignUpForm } from "@/components/auth/signup-form";

export default function Page() {
  return (
    <div className="grid gap-8">
      <div className="font-medium text-xl text-center">Sign Up</div>
      <SignUpForm />
    </div>
  );
}
