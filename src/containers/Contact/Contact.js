import React from "react";
import NavigationList from "../../components/NavigationList/NavigationList";
import Button from "../../components/UI/Button/Button";
import * as actionCreators from "../../store/actions";
import classes from "./Contact.module.css";
const contactData = {
    info: [
        { type: "location", icon: "location-sharp", content: "Mandalay, Myanmar" },
        { type: "email", icon: "mail-unread-sharp", content: "htutwaiphyoe@mtu.edu.mm" },
        { type: "mobile", icon: "call-sharp", content: "+95979865290" },
    ],
    socials: [
        { type: "facebook", icon: "logo-facebook", link: "https://www.facebook.com/real.hwp" },
        {
            type: "instagram",
            icon: "logo-instagram",
            link: "https://www.instagram.com/htutwaiphyoe",
        },
        { type: "twitter", icon: "logo-twitter", link: "https://twitter.com/Htut_Wai_Phyoe" },
        { type: "snapchat", icon: "logo-snapchat", link: "" },
        {
            type: "linkedin",
            icon: "logo-linkedin",
            link: "https://www.linkedin.com/in/htut-wai-phyoe-876a21190",
        },
        { type: "github", icon: "logo-github", link: "https://github.com/htutwaiphyoe" },
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
                                    <ion-icon name={item.icon} size="large"></ion-icon>
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
                                        <ion-icon name={item.icon} size="large"></ion-icon>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className={classes.Form}>
                    <input type="text" placeholder="Name" className={classes.Input} />
                    <input type="email" placeholder="Email" className={classes.Input} />
                    <select className={classes.Input}>
                        <option>Select one...</option>
                        <option value="just chat">Just chat</option>
                        <option value="hire me">Hire me</option>
                        <option value="freelance projects">Freelance projects</option>
                    </select>
                    <textarea rows="6" className={classes.Input} placeholder="Message" />
                    <Button>I'd love your message</Button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Contact;
