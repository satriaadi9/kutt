const env = require("../env");
const protocol = env.DEFAULT_DOMAIN.includes('localhost') ? 'http://' : 'https://';

module.exports.verifyMailText = `You're attempting to change your email address on {{site_name}}.

Please verify your email address using the link below.

${protocol}{{domain}}/verify/{{verification}}`;

module.exports.changeEmailText = `Thanks for creating an account on {{site_name}}.

Please verify your email address using the link below.

${protocol}{{domain}}/verify-email/{{verification}}`;

module.exports.resetMailText = `A password reset has been requested for your account.

Please click on the button below to reset your password. There's no need to take any action if you didn't request this.

${protocol}{{domain}}/reset-password/{{resetpassword}}`;
