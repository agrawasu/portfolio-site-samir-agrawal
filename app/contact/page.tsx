"use client";

import { useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

import { PanelHeading } from "@/components/shell/PanelHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/content";

const INQUIRY_TYPES = [
  "Full-time role",
  "Contract or freelance",
  "Collaboration",
  "Something else",
];

// Phone number and street address are deliberately not published — the form and
// the email address are enough for anyone who needs to make contact.
const details = [
  { id: "email", icon: FiMail, label: "Email", value: profile.email },
  { id: "location", icon: FiMapPin, label: "Location", value: profile.location },
];

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

export default function ContactPage() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus({ state: "sending" });

    try {
      const response = await emailjs.sendForm(
        "service_var7cqq",
        "template_a2fc4ek",
        form,
        "l8HAdBwDJ3MpQmSkW",
      );

      if (response.status === 200) {
        setStatus({ state: "sent" });
        form.reset();
      } else {
        setStatus({
          state: "error",
          message: "That didn't go through. Please email me directly.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "That didn't go through. Please email me directly.",
      });
    }
  };

  return (
    <div className="animate-panel-in">
      <PanelHeading>Contact</PanelHeading>

      <p className="mt-8 max-w-[68ch] text-[15px] leading-relaxed text-white/70">
        Open to full-time roles. Use the form below, or reach me directly at the
        address on the left.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {details.map((detail) => {
          const Icon = detail.icon;

          return (
            <li
              key={detail.id}
              className="card flex items-center gap-4 bg-surface-sunken p-5"
            >
              <span className="icon-tile h-11 w-11">
                <Icon aria-hidden="true" className="text-lg" />
              </span>
              <div className="min-w-0">
                <p className="meta-label">{detail.label}</p>
                {detail.id === "email" ? (
                  <a
                    href={`mailto:${detail.value}`}
                    className="block truncate text-sm text-white/85 transition-colors hover:text-accent"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm text-white/85">{detail.value}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleSubmit} className="mt-12">
        <h2 className="h2">Send a message</h2>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Input name="firstname" type="text" placeholder="First name" required />
          <Input name="lastname" type="text" placeholder="Last name" required />
          <Input name="email" type="email" placeholder="Email" required />

          {/* `name` makes Radix submit the value with the form, as a native
              select would, so EmailJS still picks it up from FormData. */}
          <Select name="service" required>
            <SelectTrigger aria-label="Inquiry type">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Textarea
          name="message"
          placeholder="Your message"
          required
          className="mt-5 h-[180px]"
        />

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Button type="submit" size="lg" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending…" : "Send message"}
            <FiSend aria-hidden="true" className="ml-2" />
          </Button>

          {/*
            Inline, polite status instead of alert() — a modal dialog for a form
            result is jarring, and screen readers announce this in place.
          */}
          <p aria-live="polite" className="text-sm">
            {status.state === "sent" ? (
              <span className="text-trinary">
                Thanks — your message is on its way.
              </span>
            ) : null}
            {status.state === "error" ? (
              <span className="text-accent">{status.message}</span>
            ) : null}
          </p>
        </div>
      </form>
    </div>
  );
}
