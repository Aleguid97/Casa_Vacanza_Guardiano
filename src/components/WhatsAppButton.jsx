import { RECAPITI } from "../data/sito";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${RECAPITI.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 rounded-full bg-[#25d366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
    >
      Scrivici su WhatsApp
    </a>
  );
}

export default WhatsAppButton;
