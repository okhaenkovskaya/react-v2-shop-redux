import {useDispatch, useSelector} from "react-redux";
import {addLikeAction, deleteLikeAction} from "../store/likesReducer.tsx"
interface RootState {
    likes: {
        like: number;
    }
}

const Likes = () => {
    const dispatch = useDispatch();
    const like: number = useSelector((state: RootState) => state.likes.like);

    const addLike = ():void => {
        dispatch(addLikeAction(1));
    };

    const deleteLike = ():void => {
        dispatch(deleteLikeAction(1));
    };

    return (
        <div>
            <h1>{like}</h1>
            <button onClick={() => addLike()}>add Like</button>
            <button onClick={() => deleteLike()}>delete Like</button>
            <hr />
        </div>
    );
};

export default Likes;
