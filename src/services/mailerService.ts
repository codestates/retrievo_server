import sgMail from "@sendgrid/mail";
import { errorKeys, generateApolloError } from "../utils/ErrorFactory";

interface MailerIFC {
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
      html: `
			
			
  <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe"
	style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;"
	data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">

	<div style="
background-color: #31d5bf;
width: 100%;
padding: 2rem 0;
">

		<p style="margin-top: 1rem; color: #ff55da; 
		text-align: center;">Woof Woof!</p>
		<p style="
	margin: 0 0 1rem 0;
	font-size: 2rem;
	color: #7e24fc;
	font-weight: lighter;
	text-align: center;
">
			<strong>Retrievo</strong> brought you an <strong>invitation</strong>!
		</p>
		<img src="https://images.velog.io/images/dongoc21hj/post/63436d23-3441-4f78-9960-61a66e5d6581/1606525105214.png"
			alt="retrievo invites you!" style="margin:0 auto" />
	</div>
	<div>
		<p style="margin: 2rem 0 0 0; font-size: 1.2rem; color: rgb(105, 105, 105)">
			<strong style="color: black; font-size: 1.3rem">${userInfo.senderName}</strong>
			sent you an invitation to work on the
			<strong style="color: black; font-size: 1.3rem">${userInfo.projectName}</strong>
			project together!
		</p>
		<p style="margin: 1rem 0 0 0; font-size: 1.2rem; color: rgb(105, 105, 105)">
			Click the button below if you want to join the project 🥳
		</p>
		<button style="
	cursor: pointer;
	margin: 2rem 0;
	padding: 1rem;
	width: 20rem;
	font-size: 1.2rem;
	color: #fff;
	background: #31d5bf;
	border: none;
	border-radius: 2rem;
	-webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
"><a href=${userInfo.invitationLink} style="
		text-decoration: none; color: inherit;
">
				Accept Invitation
			</a>
		</button>
	</div>


	<p style="font-size:12px; line-height:20px;">
		<a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank"
			style="font-family:sans-serif;text-decoration:none;">
			Unsubscribe
		</a>
		-
		<a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences"
			style="font-family:sans-serif;text-decoration:none;">
			Unsubscribe Preferences
		</a>
	</p>
</div>

			
			`, // html body
    });
    console.log("email sent successfully 👀");
    return undefined;
  } catch (error) {
    return generateApolloError(errorKeys.INTERNAL_SERVER_ERROR);
  }
};

export default mailSender;
