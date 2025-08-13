import Button from "./ui/Button";
import Envelop from "../assets/envelope_vector.png";
function ContactForm() {
  return (
    <div className="flex flex-wrap md:flex-nowrap mt-15 z-20">
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <img src={Envelop} alt="Envelop Icon" className="w-110" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
        <div>
          <label className="block text-md mb-1 text-gray-700 mt-7">
            First & Last Name :
          </label>
          <input
            type="text"
            className="w-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-4xl p-2 bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-md mb-1 text-gray-700 mt-7">
            E-mail :
          </label>
          <input
            type="text"
            className="w-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-4xl p-2 bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-md mb-1 text-gray-700 mt-7">
            Your Message :
          </label>
          <textarea className="w-xs h-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl p-2 bg-gray-50"></textarea>
        </div>
        <Button variant="success">SEND MESSAGE</Button>
      </div>
    </div>
  );
}

export default ContactForm;
