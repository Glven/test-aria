import style from "./ReviewItem.module.css"
const ReviewItem = ({review}) => {
    const {user, text} = review
    return (
        <div className={style.review}>
            <div className={style.reviewHeader}>
                <div className={style.reviewHeader__img}>
                    <img src={user.photo} alt={`user.username`}/>
                </div>
                <div>
                    <p className={style.reviewHeader__name}>{user.name}</p>
                    <span className={style.reviewHeader__nick}>{user.username}</span>
                </div>
            </div>
            <p className={style.review__text}>
                {text}
            </p>
        </div>
    );
};

export default ReviewItem;