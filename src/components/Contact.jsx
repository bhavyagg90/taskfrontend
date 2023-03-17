import { useState } from "react";
import contactImg from "../Assets/contact-img.svg";
import { useToast } from "@chakra-ui/react";

export const Contact = () => {
  const toast = useToast();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  console.log("form data", formDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formDetails.email.length <= 0) {
      return;
    }
    setButtonText("Sending...");
    let response = await fetch("https://social-2s6e.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      toast({
        title: "Message sent Succesfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "LSomething went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      toast({
        title: "LSomething went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <img
        className={"animate__animated animate__zoomIn"}
        src={contactImg}
        alt="Contact Us"
      />

      <div className={"animate__animated animate__fadeIn"}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="First Name"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />

          <input
            type="text"
            value={formDetails.lastName}
            placeholder="Last Name"
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
          />

          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />

          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Phone No."
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />

          <textarea
            rows="6"
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>

          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};
