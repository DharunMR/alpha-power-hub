import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Alpha Power | Abu Dhabi, UAE" },
    { name: "description", content: "Contact Alpha Power Electromechanical Contracting LLC in Abu Dhabi about power, electrical, automation or solar projects." },
    { property: "og:title", content: "Contact Alpha Power" },
    { property: "og:description", content: "Start a conversation with our Abu Dhabi engineering team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    [Phone, "+971 2 679 7215 / 056 547 8556"],
    [Mail, "mail@alphapowergroups.com"],
    [MapPin, "Office 7, Mezzanine Floor, Shabia ME12, Abu Dhabi, UAE"],
    [Clock, "Monday–Saturday · 9:00–15:00 · 16:30–22:00"],
  ] as const;

  return (
    <PageShell>
      <main>
        <section className="page-intro"><p className="eyebrow">Start a conversation</p><h1>Your next project deserves a precise first step.</h1><p>Tell our team what you are planning. We will connect you with the right engineering specialist.</p></section>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:pb-24">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-t border-border pt-7 text-muted-foreground md:grid-cols-1 md:gap-y-8 md:pt-8">
            {details.map(([Icon, text]) => <div className="flex min-w-0 items-start gap-2.5 sm:gap-4" key={text}><Icon className="mt-1 size-4 shrink-0 text-primary sm:size-5" /><span className="min-w-0 break-words text-sm leading-6 sm:text-base sm:leading-7">{text}</span></div>)}
          </div>
          <form action="mailto:mail@alphapowergroups.com" method="post" encType="text/plain" className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-xl sm:gap-4 sm:p-6 md:p-8">
            <Input name="name" required placeholder="Name" aria-label="Name" className="min-w-0" />
            <Input name="email" type="email" required placeholder="Email" aria-label="Email" className="min-w-0" />
            <Input name="phone" placeholder="Phone" aria-label="Phone" className="min-w-0" />
            <Input name="company" placeholder="Company" aria-label="Company" className="min-w-0" />
            <Textarea name="message" required placeholder="Tell us about your project" aria-label="Project details" className="col-span-2 min-h-36" />
            <Button type="submit" size="lg" className="col-span-2 rounded-xl">Send enquiry</Button>
          </form>
        </section>
      </main>
    </PageShell>
  );
}
