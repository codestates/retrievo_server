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
  <html>
    <head>
      <title></title>
    </head>
    <body>
      <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
        <div class="Unsubscribe--addressLine">
          <p class="Unsubscribe--senderName"
            style="font-size:12px;line-height:20px"
          >
            {{Sender_Name}}
          </p>
          <p style="font-size:12px;line-height:20px">
            <span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span>
          </p>
        </div>
        
        <div
			style="
				background-color: #31d5bf;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				padding: 2rem 0;
			"
		>
			<p style="margin: 1rem 0 0 0; color: #ff55da">Woof Woof!</p>
			<p
				style="
					margin: 0 0 1rem 0;
					font-size: 2rem;
					color: #7e24fc;
					font-weight: lighter;
				"
			>
				<strong>Retrievo</strong> brought you an <strong>invitation</strong>!
			</p>
			<img
				src="https://images.velog.io/images/dongoc21hj/post/63436d23-3441-4f78-9960-61a66e5d6581/1606525105214.png"
				alt="retrievo invites you!"
			/>
		</div>
		<div
			style="
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
			"
		>
			<p
				style="margin: 2rem 0 0 0; font-size: 1.2rem; color: rgb(105, 105, 105)"
			>
				<strong style="color: black; font-size: 1.3rem">${userInfo.senderName}</strong>
				sent you an invitation to work on the
				<strong style="color: black; font-size: 1.3rem">${userInfo.projectName}</strong>
				project together!
			</p>
			<p style="margin: 0 0 0; font-size: 1.2rem; color: rgb(105, 105, 105)">
				Click the button below if you want to join the project 🥳
			</p>
			<button
				style="
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
				"
			><a href=${userInfo.invitationLink}
					style="
						text-decoration: none;
				"
			>
				Accept Invitation
			</a>
			</button>
		</div>
        
        
        <p style="font-size:12px; line-height:20px;">
          <a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="font-family:sans-serif;text-decoration:none;">
            Unsubscribe
          </a>
          -
          <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="font-family:sans-serif;text-decoration:none;">
            Unsubscribe Preferences
          </a>
        </p>
      </div>
    </body>
  </html>
`, // html body
    });
    console.log("email sent successfully 👀");
    return undefined;
  } catch (error) {
    return generateApolloError(errorKeys.INTERNAL_SERVER_ERROR);
  }
};

export default mailSender;
