import "./Contact.css";

import emailIlustration from "../../../imgs/email-ilustration.svg";
import imgMessage from "../../../imgs/message.svg";
import imgSendMessage from "../../../imgs/send-message.svg";

const Contact = () => {
   return (
      <section id="contact-session">
         <div id="image-contact">
            <img src={emailIlustration} alt="email ilustration" />
         </div>
         <div id="content-contact">
            <p>
               Entre em contato comigo e transforme suas ideias em soluções
               digitais incríveis! Seja para projetos, dúvidas ou novas
               conexões, estou à disposição.
            </p>
            <p>
               Entre em contato pelo e-mail abaixo ou conecte-se pelo{" "}
               <a
                  href="https://www.linkedin.com/in/pedro-s%C3%A1vio-244073219/"
                  target="_blank"
                  rel="noreferrer"
               >
                  Linkedin
               </a>
               . Será um prazer colaborar e criar algo inovador juntos!
            </p>
            <span id="email">pedrosaviolima618@gmail.com</span>
         </div>
         <img src={imgMessage} alt="message" id="img-message-design" />
         <img
            src={imgSendMessage}
            alt="send message"
            id="img-send-message-design"
         />
      </section>
   );
};

export default Contact;
