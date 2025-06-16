import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import { InstagramIcon, GithubIcon, MailIcon } from "lucide-react";

function ContactMe() {
  return (
    <Container>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6a11cb11" />
              <stop offset="100%" stopColor="#2575fc11" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8e2de222" />
              <stop offset="100%" stopColor="#4a00e022" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a4508b33" />
              <stop offset="100%" stopColor="#5f0a8733" />
            </linearGradient>
          </defs>

          <path
            fill="url(#gradient1)"
            fillOpacity="0.6"
            d="M0,160L60,154.7C120,149,240,139,360,149.3C480,160,600,192,720,208C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L0,0Z"
          />
          <path
            fill="url(#gradient2)"
            fillOpacity="0.4"
            d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,0L0,0Z"
          />
          <path
            fill="url(#gradient3)"
            fillOpacity="0.3"
            d="M0,224L100,218.7C200,213,400,203,600,213.3C800,224,1000,256,1200,250.7C1400,245,1440,224,1440,224L1440,0L0,0Z"
          />
        </svg>
      </div>
      <div className="mx-10 relative z-10">
        <h1 className="font-extrabold text-4xl text-center my-20">
          Contact Me
        </h1>
        <p className="text-2xl my-10 ">
          Here are the platforms you can contact me with:
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
