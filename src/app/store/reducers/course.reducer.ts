import { Action } from "@ngrx/store";
import { CourseAction, CourseActionType } from "../actions/course.action";
import { CourseItem } from "../models/course-item";

const initialState: Array<CourseItem> = [
  {
    id: '1',
    name: 'C++ Programming',
    department: 'Computer Science and Engineering'
  },
  {
    id: '2',
    name: 'Computer Fundamental',
    department: 'Computer Science and Engineering'
  },
  {
    id: '3',
    name: 'Engineering Maths',
    department: 'Computer Science and Engineering'
  },
];

export function courseReducer(
  state: Array<CourseItem> = initialState,
  action: Action
) {
  switch(action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, (action as CourseAction).payload];
    default:
      return state;
  }
}
