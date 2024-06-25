import React, { FC } from "react";

interface ContactProps {
  titulo: string;
  description: string;
  phone: string;
}

export const Contact: FC<ContactProps> = ({
  titulo,
  description,
  phone,
}) => (
  <div className="contact-container">
    <div className="contact-content">
      <h3>{titulo}</h3>
      <p>{description}</p>
      <p>{phone}</p>
    </div>
    <div>
      <iframe
        className="map"
        title="onevan-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d800455.3427391762!2d-0.429082!3d38.400366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62398ae25c5f21%3A0x97ad91adacb1bdb1!2sAv.%20de%20Miguel%20Hern%C3%A1ndez%2C%2003550%20San%20Juan%20de%20Alicante%2C%20Alicante!5e0!3m2!1ses!2ses!4v1699810262890!5m2!1ses!2ses"
        width="400"
        height="300"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);
