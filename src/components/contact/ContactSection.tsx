export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="mt-12 rounded-2xl border border-black p-6">
      <h2 id="contact-heading" className="text-2xl font-semibold">Contacto</h2>
      <p className="mt-2 text-sm text-black/70">¿Tienes una idea, colaboración o encargo? Escríbeme.</p>

      <form className="mt-6 grid gap-4" aria-label="Formulario de contacto">
        <label className="grid gap-1 text-sm">
          Nombre
          <input className="rounded-lg border border-black px-3 py-2" type="text" name="name" />
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input className="rounded-lg border border-black px-3 py-2" type="email" name="email" />
        </label>
        <label className="grid gap-1 text-sm">
          Mensaje
          <textarea className="min-h-28 rounded-lg border border-black px-3 py-2" name="message" />
        </label>
        <button type="button" className="w-fit rounded-full border border-black px-5 py-2 text-sm transition hover:bg-black hover:text-white">
          Enviar (UI)
        </button>
      </form>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-black px-4 py-2 hover:bg-black hover:text-white">Instagram</a>
        <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer" className="rounded-full border border-black px-4 py-2 hover:bg-black hover:text-white">WhatsApp</a>
        <a href="mailto:hello@lucascarri.art" className="rounded-full border border-black px-4 py-2 hover:bg-black hover:text-white">hello@lucascarri.art</a>
      </div>
    </section>
  );
}
