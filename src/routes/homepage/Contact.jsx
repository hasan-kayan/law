import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import "./../../css/sections/homepage/Contact.css";

const userSchema = z.object({
  name: z.string().min(3, { message: "İsim en az 3 karakter olmalıdır." }).max(50),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  message: z.string().min(10, { message: "Mesaj en az 10 karakter olmalıdır." }).max(500),
});

export default function Contact() {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = () => {
    emailjs
      .sendForm("service_124amh3", "template_wvdunw7", formRef.current, "mOv_06zT4hqmBeZyl")
      .then((result) => {
        console.log("Mesaj gönderildi:", result.text);
        reset();
      })
      .catch((error) => {
        console.log("Mesaj gönderilemedi:", error.text);
      });
  };

  return (
    <section
      id="contact"
      className="contactSection"
      aria-labelledby="contact-heading"
      role="region"
    >
      <div className="contactForm">
        <div className="contactHeader">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.7 }}
            viewport={{ once: true }}
          >
            <h1 id="contact-heading" className="contactTitle subheading">
              İletişim
            </h1>
          </motion.div>

          <motion.div
            className="contactSubTitle__section"
            initial={{ x: 100, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.7 }}
            viewport={{ once: true }}
          >
            <h4 className="contactSubTitle">
              Hukuki danışmanlık ve profesyonel destek için bizimle iletişime geçin.
            </h4>
          </motion.div>

          <hr className="hrContact" />
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7 }}
          viewport={{ once: true }}
          className="input__section"
        >
          <form
            ref={formRef}
            className="inputFields"
            onSubmit={handleSubmit(onSubmit)}
            aria-describedby="form-description"
          >
            <input
              id="name"
              name="name"
              className="inputField"
              {...register("name")}
              placeholder="Adınız *"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <div className="errorWrapper">
              {errors.name && (
                <p id="name-error" className="errorText">
                  {errors.name.message}
                </p>
              )}
            </div>

            <input
              id="email"
              name="email"
              className="inputField"
              {...register("email")}
              placeholder="E-posta adresiniz *"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <div className="errorWrapper">
              {errors.email && (
                <p id="email-error" className="errorText">
                  {errors.email.message}
                </p>
              )}
            </div>

            <textarea
              id="message"
              name="message"
              className="inputField"
              {...register("message")}
              placeholder="Mesajınız *"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            <div className="errorWrapper">
              {errors.message && (
                <p id="message-error" className="errorText">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="submitBtn__section">
              <input
                className="submitBtn"
                type="submit"
                value="Mesaj Gönder"
                aria-label="İletişim formunu gönder"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
