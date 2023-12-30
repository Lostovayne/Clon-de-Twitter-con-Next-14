import { PropsPosts } from "@/data/data-post";
import { CardPost } from "./card-post";
import { Dispatch, SetStateAction } from "react";

interface Props {
    posts: PropsPosts[];
    setPosts: Dispatch<SetStateAction<PropsPosts[]>>;
}

const PostBoard = ({ posts, setPosts }: Props) => {
    const postReverse = posts.slice().reverse();
    console.log(postReverse);

    return (
        <div>
            {/* <CardPost />
            <CardPost />
            <CardPost /> */}

            {postReverse.map((post) => (
                <CardPost key={post.id} post={post} setPosts={setPosts} />
            ))}
        </div>
    );
};
export default PostBoard;
