import { ApolloError } from "apollo-server-express";
import { FieldError } from "../resolvers/types/UserResponse";

interface errorIFC {
  [key: string]: {
    code: string;
    message: string;
  };
}

const errorTypes: errorIFC = {
  BAD_REQUEST: {
    code: "400",
    message: "Bad Request 😡",
  },
  AUTH_NOT_FOUND: {
    code: "401",
    message: "User Not Found ❗️",
  },
  DATA_NOT_FOUND: {
    code: "401",
    message: "No Data 😕",
  },
  AUTH_NOT_MATCH: {
    code: "402",
    message: "Email or Password Not Match 🥑",
  },
  AUTH_NO_PERMISSION: {
    code: "403",
    message: "No Permission 🔫",
  },
  DATA_ALREADY_EXIST: {
    code: "404",
    message: "Data Already Existed 👀",
  },
  AUTH_ALREADY_EXIST: {
    code: "404",
    message: "User Already Existed 👀",
  },
  AUTH_FAIL_DESERIALIZE: {
    code: "500",
    message: "Failed to deserialize",
  },
  INTERNAL_SERVER_ERROR: {
    code: "500",
    message: "Internal Server Error 😵",
  },
};

interface errorKey {
  [key: string]: string;
}

export const errorKeys = {
  ...Object.keys(errorTypes).reduce((obj: errorKey, key: string) => {
    // eslint-disable-next-line
    obj[key] = key;
    return obj;
  }, {}),
};

export type ErrorObject = {
  message: string;
  code: string;
  field?: string;
};

export const generateApolloError = (type: keyof errorIFC): Error => {
  const { code, message } = errorTypes[type];
  return new ApolloError(message, code);
};

export const generateError = (
  type: keyof errorIFC,
  field?: string
): FieldError => {
  console.log("type : ", type);
  console.log("errorTypes[type]:", errorTypes[type]);
  const { code, message } = errorTypes[type];
  return { message, code, field };
};

export default generateError;
