export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />

      <input
        type="text"
        name="name"
        id="yourname"
        placeholder="Votre Nom et prénom"
      />

      <input
        type="email"
        name="email"
        id="youremail"
        placeholder="Votre email"
      />

      <textarea
        name="message"
        id="yourmessage"
        rows="10"
        defaultValue="Message"
      ></textarea>

      <button type="submit" className="contact-send">
        Envoyer
      </button>
    </form>
  );
}
