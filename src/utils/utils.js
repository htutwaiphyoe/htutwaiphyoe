import React from "react";

export const updateObject = (oldObj, newObj) => {
    return {
        ...oldObj,
        ...newObj,
    };
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const checkValidations = (value, validations) => {
    let valid = true;
    if (validations.required) {
        valid = value.trim() !== "" && valid;
    }
    if (validations.minLength) {
        valid = value.trim().length >= validations.minLength && valid;
    }
    if (validations.maxLength) {
        valid = value.trim().length <= validations.maxLength && valid;
    }
    if (validations.email) {
        valid = validateEmail(value) && valid;
    }
    if (validations.value) {
        valid = value !== "Select one..." && valid;
    }
    return valid;
};

export const beautifyDate = (date) =>
    new Date(date).toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

export const loadPage = (path) =>
    React.lazy(() => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(import(path)), 0);
        });
    });
