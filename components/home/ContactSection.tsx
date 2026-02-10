"use client";

import { Mail, Github } from "lucide-react";
import ContactCard from "./ContactCard";

const contacts = [
  {
    icon: Mail,
    label: "Gmail",
    value: "kronalyst@gmail.com",
    href: "mailto:kronalyst@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/krisapat",
    href: "https://github.com/krisapat",
    external: true,
  },
]

export default function ContactSection() {
  return (
    <section>
      <div className="mx-auto max-w-md md:max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.label} {...contact} />
        ))}
      </div>
    </section>
  );
}
