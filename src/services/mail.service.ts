import { ContactForm } from '@/types/contact-form';
import SendGrid from '@sendgrid/mail';

export default {
	sendEmail(form: ContactForm) {
		SendGrid.setApiKey(
			'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'
		);
		const msg = {
			to: 'sebastiaan@benjami.in', // Change to your recipient
			from: 'sebastiaan@benjami.in', // Change to your verified sender
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: `<strong>and easy to do anywhere, even with Node.js</strong><br/><br/>${form}`,
		};

		SendGrid.send(msg)
			.then(() => {
				console.log('Email sent');
			})
			.catch((error) => {
				console.error(error);
			});
	},
};
