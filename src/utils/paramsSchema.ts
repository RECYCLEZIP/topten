import Joi from "joi";

export const identifierSchema = Joi.object({
    id: Joi.string().length(24).required(),
});
