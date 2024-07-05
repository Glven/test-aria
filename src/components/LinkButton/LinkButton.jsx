import btn from "./LinkButton.module.css"
const LinkButton = ({link}) => {
    return (
        <a href="#" className={btn.link}>
            <div className={btn.link__icon}>
                <img src={link.img} alt={`${link.title}`}/>
            </div>
            <div>
                <span className={btn.link__text}>{link.text}</span>
                <p className={btn.link__title}>{link.title}</p>
            </div>
        </a>
    );
};

export default LinkButton;