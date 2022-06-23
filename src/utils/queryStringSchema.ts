import Joi from "joi";

export const coordinateSchema = Joi.object({
    x: Joi.string().required(),
    y: Joi.string().required(),
});
