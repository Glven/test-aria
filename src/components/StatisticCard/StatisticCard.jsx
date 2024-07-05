import statCard from "./StatisticCard.module.css"
const StatisticCard = ({statistic}) => {
    return (
        <div className={statCard.statistic}>
            <p className={statCard.statistic__title}>
                {statistic.title}
            </p>
            <span className={statCard.statistic__subtitle}>
                {statistic.subtitle}
            </span>
        </div>
    );
};

export default StatisticCard;