import { RiAddBoxFill } from "react-icons/ri"
import "./Comment.css"
const Comment = () => {
    return (
        <section className="comment-container">
            <div className="comment-action">
                <input placeholder="How's the video" />
                <RiAddBoxFill className="comment-btn" />
            </div>
            <div className="comment-display">
                <div className="comment">comments</div>

            </div>
        </section>
    )
}

export default Comment