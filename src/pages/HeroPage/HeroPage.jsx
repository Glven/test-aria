import hero from "./HeroPage.module.css"
import {links, statistics} from "../../data/data.js";
import StatisticCard from "../../components/StatisticCard/StatisticCard.jsx";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import LinkButton from "../../components/LinkButton/LinkButton.jsx";
import ReviewsList from "../../components/ReviewsList/ReviewsList.jsx";

const HeroPage = () => {
    return (
        <section className={hero.hero}>

            <div className="container">

                <h1 className={hero.hero__title}>
                    Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span>
                </h1>

                <h2 className={hero.hero__subtitle}>
                    Subscribe to our channel to learn more
                </h2>

                <div className={hero.hero__statistic}>
                    {statistics.map(statistic =>
                        <StatisticCard
                            key={statistic.id}
                            statistic={statistic}
                        />
                    )}
                </div>

                <PrimaryButton>join whatsapp</PrimaryButton>

                <div className={hero.hero__buttons}>
                    {links.map(link =>
                        <LinkButton
                            key={link.title}
                            link={link}
                        />
                    )}
                </div>

                <div className={hero.hero__reviews}>
                    <ReviewsList/>
                </div>
            </div>
        </section>
    );
};

export default HeroPage;