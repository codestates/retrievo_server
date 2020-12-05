import sgMail from "@sendgrid/mail";
import { errorKeys, generateApolloError } from "../utils/ErrorFactory";
import generateInvitationHtml from "../bin/invitation";

export interface MailerIFC {
  email: string;
  senderName: string;
  projectName: string;
  invitationLink: string;
}

const mailSender = async (userInfo: MailerIFC): Promise<Error | undefined> => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "noApiKey");
  try {
    await sgMail.send({
      from: "admin@rockpaperqueens.com", // sender address
      to: userInfo.email, // "bar@example.com, baz@example.com", // list of receivers
      subject: "[Retrievo] You have been invited to a project!💁", // Subject line
      html: generateInvitationHtml(userInfo), // html body
    });
    console.log("email sent successfully 👀");
    return undefined;
  } catch (error) {
    return generateApolloError(errorKeys.INTERNAL_SERVER_ERROR);
  }
};

export default mailSender;
