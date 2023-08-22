import { Posts } from "../../../../../types/usersDataType"

type Props = {
    promise: Promise<Posts[]>
}

export default async function UserPosts({promise}: Props){
    
    const posts = await promise;

    const content = posts.map(post => {
        return(
            <article key={post.id} className="max-w-2xl border-b-2 border-emerald-300 bg-slate-900 p-5">
                <h2 className="font-bold text-2xl">{post.title}</h2>
                <p className="text-l">{post.body}</p>
                <br />
            </article>
        )
    })

    return content;
}