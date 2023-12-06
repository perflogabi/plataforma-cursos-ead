import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../models";
import { categoryResourceOptions } from "../adminjs/resources/category";
import { courseResourceOptions } from "../adminjs/resources/course";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions
  },
  {
    resource: Category,
    options: categoryResourceOptions
  },
]