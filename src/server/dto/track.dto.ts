import * as Joi from "joi";


export interface TrackRequestDto {
  tracks: TrackDto[]
}

export interface TrackDto {
    event:  string;
    tags: string[];
    url: string;
    title: string;
    ts: string;
}

export const TrackRequestSchema = Joi.array().required().items(Joi.object({
    event :Joi.string().required(),
    tags :Joi.array().required().items(Joi.string()),
    url :Joi.string().required(),
    title :Joi.string().required(),
    ts :Joi.string().required()
}))


