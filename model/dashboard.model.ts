import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "college_description" } })
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
  public country_name!: string;

  @prop({ required: true, default: [""] })
  public courses_offered!: string[];
}

@modelOptions({ schemaOptions: { collection: "student_description" } })
export class StudentDescription {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public batch_date!: string;

  @prop({ required: true, foreignField: "_id", localField: "college_id" })
  public college_id!: string;

  @prop({ required: true, default: [""] })
  public skills!: string[];
}

export const CollegeDescriptionModel = getModelForClass(CollegeDescription);
export const StudentDescriptionModel = getModelForClass(StudentDescription);
