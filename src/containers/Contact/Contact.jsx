import { Container, ContactInfo, HiItem, ParaItem, ContactItem, Item, MediaItems, MItem } from "./ContactStyle.js";
import Nav from "../../components/Nav/index.jsx";

const contactData = {
  title: "Contact.",
  paraText: "Hi!👋 Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch",
  items: [
    { label: "Email:", value: "contact@benyahya.com", link: "mailto:contact@benyahya.com" },
    { label: "Phone:", value: "+212 694356854", link: "https://wa.me/212694356854" },
    {
      label: "On the Internet:",
      mediaItems: [
        { name: "LinkedIn", link: "https://fr.linkedin.com/" },
        { name: "Github", link: "https://github.com/" },
        { name: "Instagram", link: "https://www.instagram.com/" },
      ],
    },
  ],
};

function Contact() {
  return (
    <Container>
      <Nav />

      <ContactInfo>
        <HiItem>
          <h1>{contactData.title}</h1>
        </HiItem>
        <ParaItem>
          <p>{contactData.paraText}</p>
        </ParaItem>
        <ContactItem>
          {contactData.items.map((item, index) => (
            <Item key={index}>
              {item.label && <span>{item.label}</span>}
              {item.value && <span><a href={item.link}>{item.value}</a></span>}
              {item.mediaItems && (
                <MediaItems>
                  {item.mediaItems.map((mediaItem, i) => (
                    <MItem key={i} >
                      <p>
                        <a href={mediaItem.link}>{mediaItem.name}</a>
                      </p>
                    </MItem>
                  ))}
                </MediaItems>
              )}
            </Item>
          ))}
        </ContactItem>
      </ContactInfo>
    </Container>
  );
}

export default Contact;
