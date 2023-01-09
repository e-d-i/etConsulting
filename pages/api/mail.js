const mail = require("@sendgrid/mail");
const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

mail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, anfragesteller, anliegen, message } = req.body;

    const data = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: "E.T. Consulting – Neue Anfrage!",
      html: `<p><strong>Name: </strong>${name}</p>
      <p><strong>Email: </strong>${email}</p>
      <p><strong>Anfragesteller: </strong>${anfragesteller}</p>
      <p><strong>Anliegen: </strong>${anliegen}</p>
      <p><strong>Message: </strong>${message}</p>`,
    };
    await mail.send(data);
    res.status(200).json({ status: "Ok" });
  }
}
