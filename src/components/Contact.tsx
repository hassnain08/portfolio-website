import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { cn } from "lib/utils";
import Reveal from "./Reveal";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sending, setSending] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage(null);
    setErrorMessage(null);

    const isNameValid = name.trim() !== "";
    const isEmailValid = email.trim() !== "";
    const isMessageValid = message.trim() !== "";

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      setSending(true);

      const notificationParams = {
        user_name: name,
        user_email: email,
        message: message,
      };

      const autoresponderParams = {
        user_name: name,
        user_email: email,
        message: message,
      };

      const serviceId = "service_wf1yai2";
      const notificationTemplateId = "template_elixulb";
      const autoresponderTemplateId = "template_hjqsk26";
      const publicKey = "LAAUaQY-b-BPSAm9Q";

      emailjs.send(serviceId, notificationTemplateId, notificationParams, publicKey).then(
        (response) => {
          console.log("NOTIFICATION SENT TO YOU!", response.status, response.text);

          emailjs.send(serviceId, autoresponderTemplateId, autoresponderParams, publicKey).then(
            (autoResponse) => {
              console.log("AUTORESPONDER SENT TO USER!", autoResponse.status, autoResponse.text);
              setSuccessMessage(
                "Your message has been sent successfully! A confirmation has been sent to your email."
              );
              setSending(false);
            },
            (autoError) => {
              console.log("AUTORESPONDER FAILED...", autoError);
              setSuccessMessage("Your message has been sent successfully! I will respond to you soon.");
              setSending(false);
            }
          );
        },
        (error) => {
          console.log("NOTIFICATION FAILED...", error);
          setErrorMessage("Failed to send your message. Please try again later.");
          setSending(false);
        }
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="mb-2 text-center font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </p>
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Contact Me</h2>

          {successMessage && (
            <div className="mb-6 flex items-start gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-500">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}
          {errorMessage && (
            <div className="mb-6 flex items-start gap-2 rounded-md border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-500">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form noValidate onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <Input
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError(false);
                  }}
                  error={nameError}
                />
                {nameError && <p className="mt-1 text-xs text-red-500">Please enter your name</p>}
              </div>
              <div className="flex-1">
                <Input
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(false);
                  }}
                  error={emailError}
                />
                {emailError && (
                  <p className="mt-1 text-xs text-red-500">Please enter your email or phone number</p>
                )}
              </div>
            </div>

            <div>
              <Textarea
                placeholder="Send me any inquiries or questions"
                rows={8}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (messageError) setMessageError(false);
                }}
                error={messageError}
              />
              {messageError && <p className="mt-1 text-xs text-red-500">Please enter the message</p>}
            </div>

            <Button type="submit" size="lg" disabled={sending} className={cn("mx-auto mt-2")}>
              <Send className="h-4 w-4" />
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
