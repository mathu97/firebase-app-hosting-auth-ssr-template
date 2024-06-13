import { SignUpForm } from "@/components/auth/signup-form";

export default function Page() {
  return (
    <div className="grid gap-8">
      <div className="font-medium text-2xl text-center">Sign Up</div>
      <SignUpForm />
    </div>
  );
}
