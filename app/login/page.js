import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "login",
};

export default async function Page() {
  return (
    <div className="bg-gray-100">
      <SignInButton />
    </div>
  );
}
