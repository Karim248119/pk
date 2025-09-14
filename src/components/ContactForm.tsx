import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState("SEND ");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_lzjgvso", // Replace with your EmailJS service ID
          "template_rj7speh", // Replace with your EmailJS template ID
          form.current,
          "JTlpYoyrrGRpqcC0r" // Replace with your EmailJS user/public key
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            // Optionally show a success message to the user
          },
          (error) => {
            console.error("There was an error sending the email:", error.text);
            // Optionally show an error message to the user
          }
        );
      // Reset the form after submission
      e.currentTarget.reset();
      setButtonText("Email Sent!");
      setTimeout(() => {
        setButtonText("SEND");
      }, 4000);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="md:w-[80%] w-[90%] space-y-3 mt-5"
    >
      <div className="flex md:flex-row flex-col gap-2">
        <input
          type="text"
          name="user_name" // Must match the key in your EmailJS template
          placeholder="Your Name"
          className="md:w-1/2 p-3 md:py-4 py-2 md:text-base text-xs bg-transparent border placeholder-accent/50 border-accent/50 focus:border-accent duration-300 focus:outline-none"
          required
        />
        <input
          type="email"
          name="user_email" // Must match the key in your EmailJS template
          placeholder="Your Email"
          className="md:w-1/2 p-3 md:py-4 py-2 md:text-base text-xs bg-transparent border placeholder-accent/50 border-accent/50 focus:border-accent duration-300 focus:outline-none"
          required
        />
      </div>
      <textarea
        name="message" // Must match the key in your EmailJS template
        placeholder="Your Message"
        className="w-full p-3 h-20 md:text-base text-xs bg-transparent border placeholder-accent/50 border-accent/50 focus:border-accent duration-300 focus:outline-none"
        required
      />
      <Button type="submit" secondary className="md:w-52 w-44 md:h-12 h-8">
        {buttonText}
      </Button>
    </form>
  );
};

export default ContactForm;
