import getUser from "../../../../lib/getUser";
import getUserPosts from "../../../../lib/getUserPosts";
import { Posts, User } from "../../../../types/usersDataType";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import Link from "next/link";

type Params={
    params:{
        userId:number;
    }
}

export default async function UserPage({params: {userId}}: Params){

    const userData:Promise<User> = await getUser(userId)
    const userPostsData:Promise<Posts[]> = await getUserPosts(userId)

    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData;

    return(
        <div className="p-5">
            <Link href="/users">Back to users page</Link>
            <h2 className="text-2xl text-emerald-400 font-bold text-center">{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <div className="grid grid-cols-3 gap-5">
                    <UserPosts promise={userPostsData}/>
                </div>
            </Suspense>
        </div>
    )
}