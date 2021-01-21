import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavigationList from "../../components/NavigationList/NavigationList";
import Button from "../../components/UI/Button/Button";
import FormElement from "../../components/UI/FormElement/FormElement";
import * as actionCreators from "../../store/actions";
import { checkValidations } from "../../utils/utils";
import MessageBox from "../../components/UI/MessageBox/MessageBox";
import Toast from "../../components/UI/Toast/Toast";
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
                minLength: 5,
                required: true,
                maxLength: 10,
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

    useEffect(() => {
        document.title = "Contact | Htut Wai Phyoe";
    }, []);
    const error = useSelector((state) => state.ui.error);
    const toast = useSelector((state) => state.ui.toast);
    const [contactFormValid, setContactFormValid] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ui.loading);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (contactFormValid) {
            setContactFormValid(false);
            dispatch(
                actionCreators.submitForm({
                    name: contactForm.name.value,
                    email: contactForm.email.value,
                    message: contactForm.message.value,
                    method: contactForm.method.value,
                })
            );
            const updatedContactForm = {
                ...contactForm,
            };
            for (let key in updatedContactForm) {
                const updatedFormElement = { ...updatedContactForm[key] };
                if (key === "method") {
                    updatedFormElement.value = "select";
                } else {
                    updatedFormElement.value = "";
                }
                updatedContactForm[key] = updatedFormElement;
            }
            setContactForm(updatedContactForm);
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
    if (error) {
        return <MessageBox message={error.message} />;
    }
    return (
        <React.Fragment>
            <Toast message={"Message was sent."} toast={toast} />
            <NavigationList />
            <section className={classes.Contact}>
                <div className={classes.Info}>
                    <div className={classes.InfoBox}>
                        <h2>Contact information</h2>
                        <div className={classes.List}>
                            <ul>{contactInfo}</ul>
                        </div>
                    </div>
                    <div>
                        <h2>Get in touch on social media</h2>
                        <div className={classes.List}>
                            <ul className={classes.SocialList}>{contactMedia}</ul>{" "}
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className={classes.Form}>
                    {contactFormDom}

                    <Button type="submit" disabled={!contactFormValid} animation={false}>
                        {loading ? "I'd love your message" : "Send it to me"}
                    </Button>
                </form>
            </section>
        </React.Fragment>
    );
};

export default Contact;
