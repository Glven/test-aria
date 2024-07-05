import ReviewItem from "../ReviewItem/ReviewItem.jsx";
import {reviews} from "../../data/data.js";
import style from "./ReviewsList.module.css"
const ReviewsList = () => {
    return (
        <div className={style.reviewsList}>
            {reviews.map(review =>
                <ReviewItem
                    key={review.id}
                    review={review}
                />
            )}
        </div>
    );
};

export default ReviewsList;