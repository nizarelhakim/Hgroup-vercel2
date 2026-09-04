import { contact } from "../../data/content";

export default function Privacy() {
  return (
    <section id="privacy" className="bg-gray-50 text-gray-600 py-10 px-6 md:px-20 text-sm">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-base font-semibold mb-3 text-navy-900">Privacy Policy</h3>
        <p className="mb-2">
          We respect your privacy. Any personal information shared through this website will be treated with confidentiality.
          We do not sell or share your data with third parties unless required by law.
        </p>
        <p>
          By using our website, you agree to our privacy practices. For questions, contact us at{" "}
          <a href={`mailto:${contact.email}`} className="underline hover:text-navy-900">{contact.email}</a>.
        </p>
      </div>
    </section>
  );
}
