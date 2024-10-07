import { getAssignment } from "../_lib/dataService";
import { auth } from "../_lib/auth";
import Dashboad from "../_components/Dashboad";

export const metadata = {
  title: "dashboard",
};

export default async function Page() {
  const session = await auth();
  const data = await getAssignment(session.user.userId);

  return (
    <main>
      <Dashboad assignmentData={data} />
    </main>
  );
}
