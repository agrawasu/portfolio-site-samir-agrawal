"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const contactMessage = "Let's Work Together";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (614) 707 2103",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "agrawasu@mail.uc.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "384 Silver Sage Lane, Saint Augustine, Florida 32095",
  },
];

import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (formValues) => {
    let formErrors = {};

    if (!formValues.service) {
      formErrors.service = "Service is required";
    }

    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const formErrors = validateForm(formValues);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await emailjs.sendForm(
        "service_var7cqq",
        "template_a2fc4ek",
        form,
        "l8HAdBwDJ3MpQmSkW"
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent font-bold">{contactMessage}</h3>
              <p className="text-white/60">
                Reach out to me using the form below or the contact information on the
                right side if you have any questions or inquiries. I am available for
                co-op/internship for the terms listed in the Inquiry Type dropdown menu.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="First name" required />
                <Input name="lastname" type="text" placeholder="Last name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" type="text" placeholder="Phone number" />
              </div>

              {/* select */}

              <Select
                name="service"
                onValueChange={(value) => {
                  setService(value);
                  setErrors((prev) => ({ ...prev, service: "" }));
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select inquiry type</SelectLabel>
                    <SelectItem value="Spring Co-op - Internship 2025">
                      Spring Co-op/Internship 2025
                    </SelectItem>
                    <SelectItem value="Summer Co-op - Internship 2025">
                      Summer Co-op/Internship 2025
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-red-500">{errors.service}</p>}
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />

              {/* button */}
              <Button
                variant="outline"
                size="md"
                className="flex justify-center items-center max-w-40 h-[45px] hover:text-white"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li className="flex items-center gap-6" key={index}>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
