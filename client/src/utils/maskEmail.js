export function maskEmail(email) {
  // Split the email address into local and domain parts
  const [localPart, domainPart] = email.split("@");

  // Get the first two characters of the local part
  const maskedLocalPart = localPart.slice(0, 2);

  // Create the masked email by combining the masked local part, asterisks, and the domain part
  const maskedEmail = `${maskedLocalPart}*****${domainPart}`;

  return maskedEmail;
}
