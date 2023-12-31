import React from "react";
import Joi from "joi";

export default function useValidation() {

    const validateContact = (obj) => {
        const contactSchema = new Joi.object({
            name:  Joi.string().min(3).required(),
            company:  Joi.string().min(3).required(),
            role:  Joi.string().min(3).required(),
            mobile:  Joi.number().min(3).required(),
            message:  Joi.string().min(20).allow('').optional(),
            email:  Joi.string().min(3).email({ tlds: { allow: false } }).required(),
        }).options({ abortEarly: false })
        return contactSchema.validate(obj);
    };
    const validateComplimentaryChat = (obj) => {
        const contactSchema = new Joi.object({
            name:  Joi.string().min(3).required(),
            email:  Joi.string().min(3).email({ tlds: { allow: false } }).required(),
            company:  Joi.string().min(3).required(),
        }).options({ abortEarly: false })
        return contactSchema.validate(obj);
    };

    return {validateContact,validateComplimentaryChat}
}
