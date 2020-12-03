import React, { useState } from "react";

import NavigationList from "../../components/NavigationList/NavigationList";
import Button from "../../components/UI/Button/Button";
import FormElement from "../../components/UI/FormElement/FormElement";
import * as actionCreators from "../../store/actions";
import { checkValidations } from "../../utils/utils";
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
    const [contactForm, setContactForm] = useState({
        name: {
            type: "input",
            configs: {
                type: "text",
                placeholder: "Name",
                name: "name",
                required: true,
            },
            value: "",
            validations: {
                minLength: 3,
                required: true,
                maxLength: 20,
            },
            touch: false,
            valid: false,
        },
        email: {
            type: "input",
            configs: {
                type: "email",
                placeholder: "Email",
                name: "email",
                required: true,
            },
            value: "",
            validations: {
                required: true,
                email: true,
            },
            valid: false,
            touch: false,
        },
        method: {
            type: "select",
            configs: {
                options: [
                    { value: "select", displayValue: "Select one..." },
                    { value: "chat", displayValue: "Just chat" },
                    { value: "hire", displayValue: "Hire me" },
                    { value: "collabrate", displayValue: "Collabrate projects" },
                ],
            },
            value: "select",
            validations: {
                value: true,
            },
            valid: false,
        },
        message: {
            type: "textarea",
            configs: {
                placeholder: "Message",
                name: "message",
                rows: 6,
            },
            value: "",
            validations: {
                required: true,
                minLength: 10,
                maxLength: 100,
            },
            valid: false,
            touch: false,
        },
    });
    const [contactFormValid, setContactFormValid] = useState(false);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (contactFormValid) {
            console.log("ready");
        }
    };

    const onChangeHandler = (e, type) => {
        const updatedContactForm = { ...contactForm };
        const updatedFormElement = { ...updatedContactForm[type] };

        updatedFormElement.value = e.target.value;
        updatedFormElement.touch = true;
        updatedFormElement.valid = checkValidations(
            updatedFormElement.value,
            updatedFormElement.validations
        );
        updatedContactForm[type] = updatedFormElement;
        let valid = true;
        for (let key in updatedContactForm) {
            valid = updatedContactForm[key].valid && valid;
        }
        console.log(valid);
        setContactForm(updatedContactForm);
        setContactFormValid(valid);
    };
    const contactInfo = contactData.info.map((item) => (
        <li key={item.type}>
            <ion-icon name={item.icon} size="large"></ion-icon>
            <span>{item.content}</span>
        </li>
    ));
    const contactMedia = contactData.socials.map((item) => (
        <li key={item.type}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
                <ion-icon name={item.icon} size="large"></ion-icon>
            </a>
        </li>
    ));

    const formElements = [];
    for (let el in contactForm) {
        formElements.push({ id: el, config: contactForm[el] });
    }
    const contactFormDom = formElements.map((el) => (
        <FormElement
            key={el.id}
            type={el.config.type}
            configs={el.config.configs}
            value={el.config.value}
            valid={el.config.valid}
            touch={el.config.touch}
            className={classes.Input}
            onChangeHandler={(e) => onChangeHandler(e, el.id)}
        />
    ));
    return (
        <React.Fragment>
            <NavigationList />
            <div className={classes.Contact}>
                <div className={classes.Info}>
                    <div className={classes.InfoBox}>
                        <h2>Contact information</h2>
                        <ul>{contactInfo}</ul>
                    </div>
                    <div>
                        <h2>Keep in touch on social media</h2>
                        <ul className={classes.SocialList}>{contactMedia}</ul>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className={classes.Form}>
                    {contactFormDom}
                    {/* <FormElement type="text" placeholder="Name" className={classes.Input} />
                    <FormElement type="email" placeholder="Email" className={classes.Input} />
                    <FormElement className={classes.Input} type="select" />
                    {/* <option>Select one...</option>
                        <option value="just chat">Just chat</option>
                        <option value="hire me">Hire me</option>
                        <option value="freelance projects">Freelance projects</option> */}
                    {/* <FormElement
                        rows="6"
                        className={classes.Input}
                        placeholder="Message"
                        type="textarea"
                    />{" "}
                    */}
                    <Button type="submit" disabled={!contactFormValid}>
                        I'd love your message
                    </Button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Contact;
