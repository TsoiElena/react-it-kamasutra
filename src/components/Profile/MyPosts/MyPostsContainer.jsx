import {
    addPost,
    likesCountChange,
    updateNewPostText
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";

 let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
 }

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost,
    likesCountChange,
}) (MyPosts)
export default MyPostsContainer