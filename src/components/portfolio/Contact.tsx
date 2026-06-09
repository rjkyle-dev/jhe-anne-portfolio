import { useState } from "react";
import { z } from "zod";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const info = [
  { label: "Email", value: "jheanneselle28@gmail.com", icon: "✉️", href: "mailto:jheanneselle28@gmail.com" },
  { label: "Phone", value: "+63 963 745 6219", icon: "📞", href: "tel:+639637456219" },
  { label: "Location", value: "Panabo City, PH", icon: "📍", href: "#" },
  { label: "Facebook", value: "facebook.com/jheanneypilselle", icon: "📘", href: "https://www.facebook.com/jheanneypilselle" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact" eyebrow="Contact" title={"Let's |work together"} subtitle="Open to opportunities, collaborations, and conversations. Drop a message!">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4 animate-fade-up">
          {info.map((c) => (
            <a key={c.label} href={c.href} className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow transition block">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center text-xl shadow-glow">{c.icon}</div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                <p className="font-medium">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-7 space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Full Name" error={errors.name} />
            <Field name="email" label="Email" type="email" error={errors.email} />
          </div>
          <Field name="subject" label="Subject" error={errors.subject} />
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Message</label>
            <textarea name="message" rows={5} maxLength={1000} className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none" />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-xl shadow-glow hover:scale-[1.01] transition w-full sm:w-auto">
            {sent ? "Message sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground uppercase tracking-wider">{label}</label>
      <input name={name} type={type} maxLength={255} className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
