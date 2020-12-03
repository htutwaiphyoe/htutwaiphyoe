import React from "react";
import NavigationList from "../../components/NavigationList/NavigationList";
import Button from "../../components/UI/Button/Button";
import * as actionCreators from "../../store/actions";
import classes from "./Contact.module.css";
const contactData = {
    info: [
        { type: "location", icon: "map marker alternate", content: "Mandalay, Myanmar" },
        { type: "email", icon: "envelope", content: "htutwaiphyoe@mtu.edu.mm" },
        { type: "mobile", icon: "mobile", content: "+95979865290" },
    ],
    socials: [
        { type: "facebook", icon: "facebook f", link: "https://www.facebook.com/real.hwp" },
        { type: "instagram", icon: "instagram", link: "https://www.instagram.com/htutwaiphyoe" },
        { type: "twitter", icon: "twitter", link: "https://twitter.com/Htut_Wai_Phyoe" },
        { type: "snapchat", icon: "snapchat ghost", link: "" },
        {
            type: "linkedin",
            icon: "linkedin",
            link: "https://www.linkedin.com/in/htut-wai-phyoe-876a21190",
        },
        { type: "github", icon: "github", link: "https://github.com/htutwaiphyoe" },
    ],
};

const Contact = (props) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <React.Fragment>
            <NavigationList />
            <div className={classes.Contact}>
                <div className={classes.Info}>
                    <div className={classes.InfoBox}>
                        <h2>Contact information</h2>
                        <ul>
                            {contactData.info.map((item) => (
                                <li key={item.type}>
                                    <i className={`${item.icon} icon big`}></i>
                                    <span>{item.content}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Keep in touch on social media</h2>
                        <ul className={classes.SocialList}>
                            {contactData.socials.map((item) => (
                                <li key={item.type}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <i className={`${item.icon} icon big`}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={classes.Form}>
                    <h1>Collaborate with me</h1>
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <select>
                            <option value=""></option>
                        </select>
                        <textarea rows="6" />
                        <Button>Send it to me</Button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;
