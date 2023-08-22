import Link from "next/link";
import getAllUsers from "../../../lib/getAllUsers";
import { User } from "../../../types/usersDataType";

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section className="p-5">
      <h2>
        <Link href="/" className="text-3xl text-emerald-400 font-bold">Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
