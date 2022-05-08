import { Action } from "@ngrx/store";
import { CourseItem } from "../models/course-item";


export enum CourseActionType {
  ADD_ITEM = '[COURSE] ADD Course',
}

export class AddCourseItemAction implements Action {

  readonly type = CourseActionType.ADD_ITEM;

  constructor(
    public payload: CourseItem
  ) {}
}

export type CourseAction = AddCourseItemAction;
