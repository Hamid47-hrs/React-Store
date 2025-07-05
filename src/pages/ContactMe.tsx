import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import { InstagramIcon, GithubIcon, MailIcon } from "lucide-react";
import GradientWaves from "../components/ui/GradientWaves";

function ContactMe() {
  return (
    <Container>
      <GradientWaves />
      <div className="mx-10 relative z-10">
        <h1 className="font-extrabold text-4xl text-center my-20">
          Contact Me
        </h1>
        <p className="text-2xl text-center my-10">
          Here are the platforms you can contact me with
        </p>
        <div>
          <ul className="flex justify-around mb-30">
            <li className="px-8 py-6 border-0 rounded-xl shadow-2xl hover:text-sky-700 transition hover:scale-105 duration-300 bg-white">
              <a
                href="https://instagram.com/hamid47hrs"
                className="flex gap-2 items-center text-xl"
              >
                <InstagramIcon className="size-8 text-gray-600" />
                <span>Instagram: </span>
                <span>@Hamid47hrs</span>
              </a>
            </li>
            <li className="px-8 py-6 border-0 rounded-xl shadow-2xl hover:text-sky-700 transition hover:scale-105 duration-300 bg-white">
              <a
                href="https://github.com/Hamid47-hrs"
                className="flex gap-2 items-center text-xl"
              >
                <GithubIcon className="size-8 text-gray-600" />
                <span>GitHub: </span>
                <span>Hamid47-hrs</span>
              </a>
            </li>
            <li className="px-8 py-6 border-0 rounded-xl shadow-2xl hover:text-sky-700 transition hover:scale-105 duration-300 bg-white">
              <a
                href="mailto:hamid47.hrs@gmail.com"
                className="flex gap-2 items-center text-xl"
              >
                <MailIcon className="size-8 text-gray-600" />
                <span>Email: </span>
                <span>Hamid47.hrs@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-extrabold text-7xl text-center my-5">Or</p>
          <p className="font-extrabold text-7xl text-center">
            Let's Start a Conversation.
          </p>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactMe;
