import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

@modelOptions({
  schemaOptions: { collection: "college_description" },
  options: {
    allowMixed: undefined,
  },
})
export class CollegeDescription {
  @prop({ required: true })
  public college_name!: string;

  @prop({ required: true })
  public founded_on!: number;

  @prop({ required: true })
  public city_name!: string;

  @prop({ required: true })
  public state_name!: string;

  @prop({ required: true, default: 0 })
  public no_students!: number;

  @prop({ required: true, default: "" })
  public country_name!: string;

  @prop({ required: true, default: [""] })
  public courses_offered!: string[];
}

@modelOptions({
  schemaOptions: { collection: "student_description" },
  options: {
    allowMixed: undefined,
  },
})
export class StudentDescription {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public batch_date!: string;

  @prop({ required: true })
  public college_id!: ObjectId;

  @prop({ required: true, default: [""] })
  public skills!: string[];
}

export const CollegeDescriptionModel = getModelForClass(CollegeDescription);
export const StudentDescriptionModel = getModelForClass(StudentDescription);
