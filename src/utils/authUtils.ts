import argon2 from "argon2";

export const verifyPassword = async (
  dbPassword: string,
  password: string
): Promise<boolean> => {
  try {
    const verified = await argon2.verify(dbPassword, password);
    if (verified) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const hashPassword = async (
  password: string
): Promise<string | Error> => {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (err) {
    return new Error(err);
  }
};
