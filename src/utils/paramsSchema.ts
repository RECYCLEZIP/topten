import Joi from "joi";

export const identifierSchema = Joi.object({
    id: Joi.string().length(24).required(),
});

export const postIdentifierSchema = Joi.object({
    postId: Joi.string().length(24).required(),
});

export const commentIdentifierSchema = Joi.object({
    postId: Joi.string().length(24).required(),
    commentId: Joi.string().length(24).required(),
});

export const userIdentifierSchema = Joi.object({
    userId: Joi.string().length(24).required(),
});

export const gameStepSchema = Joi.object({
    step: Joi.string().valid("0", "1", "2"),
});
