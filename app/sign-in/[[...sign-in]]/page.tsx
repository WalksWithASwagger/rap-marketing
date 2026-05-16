import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-forest-950 py-24 px-6">
      <SignIn />
    </div>
  );
}
