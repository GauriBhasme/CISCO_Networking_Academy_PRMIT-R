import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";
import ContactInfo from "../components/ContactInfo";
import SocialHandles from "../components/SocialHandles";
import Banner from "../components/Banner";

function Contact() {
    return (<>

        <Banner title="Contact Us" description="Having Any Issue ? Or wants to connect with us ?" />
        <div className="container">
            <ContactForm></ContactForm>
            <div className="socials">
                <ContactInfo></ContactInfo>
                <SocialHandles></SocialHandles>
            </div>

        </div>

    </>);
}


export default Contact;