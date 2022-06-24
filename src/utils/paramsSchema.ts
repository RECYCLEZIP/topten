import Joi from "joi";

export const identifierSchema = Joi.object({
    id: Joi.string().length(24).required(),
});

export const postIdentifierSchema = Joi.object({
    postId: Joi.string().length(24).required(),
});
