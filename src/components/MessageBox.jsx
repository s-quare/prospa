import React, { useState } from "react";
import { useTheme } from "../context/useTheme";

const MessageBox = () => {
  const { isDark, showToast } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const themeClass = isDark ? "dark-theme" : "light-theme";
  const inputClass = `form-control shadow-none border-2 ${
    isDark ? "bg-black text-light border-secondary" : "bg-white text-dark"
  }`;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isFormValid =
    formData.name && (formData.email || formData.phone) && formData.message;

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqezoazw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showToast("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {

        const errorMsg = data.errors?.[0]?.message || "Submission failed";
        showToast(`Error: ${errorMsg}`);
      }
    } catch {
      showToast("Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`${themeClass} mx-auto my-3 max-350`}
      style={{ width: "90%" }}
    >
      <form
        onSubmit={handleManualSubmit}
        className={`p-4 rounded-4 ${isDark ? "shadow-lite" : "shadow"}`}
      >
        {/* Name Input */}
        <div className="custom-floating mb-3">
          <input
            type="text"
            name="name"
            className={inputClass}
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>

        {/* Email Input */}
        <div className="custom-floating mb-3">
          <input
            type="email"
            name="email"
            className={inputClass}
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
          />
          <label>Email Address</label>
        </div>

        {/* Phone Input */}
        <div className="custom-floating mb-3">
          <input
            type="tel"
            name="phone"
            className={inputClass}
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
          />
          <label>Phone Number</label>
        </div>

        {/* Message Textarea */}
        <div className="custom-floating mb-4">
          <textarea
            name="message"
            className={inputClass}
            style={{ height: "120px" }}
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label>Your Message</label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className={`btn ${
            isDark ? "btn-light" : "btn-dark"
          } w-75 mx-auto d-block rounded-pill py-1 my-4 f-12 fw-bold shadow-sm`}
        >
          {isSubmitting ? "Sending.." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default MessageBox;
