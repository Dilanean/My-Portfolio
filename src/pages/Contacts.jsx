import React from "react";
import contactsBg from "../../images/contacts.jpg";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts-bg">
        <img src={contactsBg} />
      </div>
      <div className="location">
        <h2>Location</h2>
        <p>Turin,Italy</p>
      </div>

      <div className="phone">
        <h2>Telegram/WhatsApp</h2>
        <a href="tel: +393927705156">+39 392 770 51 56</a>
      </div>

      <div className="email">
        <h2>Email</h2>
        <a href="mailto: dilaneanarman@gmail.com">dilaneanarman@gmail.com</a>
      </div>
    </section>
  );
};
export default Contacts;
