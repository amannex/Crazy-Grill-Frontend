import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../../styles/Contact.css";
import "../../styles/Contact.mediaqueries.css";
import { SectionTitle } from "../sectionTitle";
import { COLORS } from "../../configs/constants";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as yup from "yup";
import { CheckSquareFill, XSquareFill } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

const Contact = ({ bottomSpace }) => {
   const { t } = useTranslation();
   const { pathname, hash, key } = useLocation();
   const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
   const [submissionMessage, setSubmissionMessage] = useState("");
   const [isForm, setIsForm] = useState({ isSubmitted: false, hasError: false });
   const [isFormFocus, setIsFormFocus] = useState({
      isNameFocus: false,
      isPhoneFocus: false,
      isEmailFocus: false,
      isMessage: false
   });

   const schema = yup.object().shape({
      name: yup.string().required(),
      phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
      email: yup.string().email().required(),
      message: yup.string().required()
   });

   useEffect(() => {
      // if not a hash link, scroll to top
      if (hash === "") {
         window.scrollTo(0, 0);
      }
      // else scroll to id
      else {
         setTimeout(() => {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
               element.scrollIntoView();
            }
         }, 0);
      }
   }, [pathname, hash, key]); // do this on route change

   const onNameFocus = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isNameFocus: true }));
      setSubmissionMessage("");
      setIsForm(isForm => ({ ...isForm, isSubmitted: false, hasError: false }));
   };
   const onNameBlur = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isNameFocus: false }));
   };
   const onPhoneNumberFocus = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isPhoneFocus: true }));
      setSubmissionMessage("");
      setIsForm(isForm => ({ ...isForm, isSubmitted: false, hasError: false }));
   };
   const onPhoneNumberBlur = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isPhoneFocus: false }));
   };
   const onEmailFocus = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isEmailFocus: true }));
      setSubmissionMessage("");
      setIsForm(isForm => ({ ...isForm, isSubmitted: false, hasError: false }));
   };
   const onEmailBlur = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isEmailFocus: false }));
   };
   const onMessageFocus = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isMessageFocus: true }));
      setSubmissionMessage("");
      setIsForm(isForm => ({ ...isForm, isSubmitted: false, hasError: false }));
   };
   const onMessageBlur = () => {
      setIsFormFocus(() => ({ ...isFormFocus, isMessageFocus: false }));
   };

   const onFormSubmit = async (values, { resetForm }) => {
      try {
         const response = await fetch("https://taburestaurant.ca/api/emails/contact", {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
         });

         if (!response.ok) {
            setIsForm(isForm => ({ ...isForm, isSubmitted: true, hasError: true }));
            setSubmissionMessage(t("CONTACT_ERROR_MESSAGE"));
            return;
         }
         setIsForm(isForm => ({ ...isForm, isSubmitted: true, hasError: false }));
         setSubmissionMessage(t("CONTACT_SUCCESS_MESSAGE"));
         resetForm({ values: "" });
      } catch (err) {
         setIsForm(isForm => ({ ...isForm, isSubmitted: true, hasError: true }));
         setSubmissionMessage(t("CONTACT_ERROR_MESSAGE"));
         throw new Error(err);
      }
   };

   return (
      <div className="contactSectionContainer" style={{ marginBottom: bottomSpace }} id="send_us_a_message">
         <SectionTitle
            subTitle={t("HEADER.CONTACT")}
            title={t("WRITE_US")}
            firstLineDescription={t("CONTACT_FIRST_DESCRIPTION")}
            secondLineDescription={t("CONTACT_SECOND_DESCRIPTION")}
            bgColor={COLORS.tertiary}
         />
         <div className="contactContainer">
            <div className="formContainer">
               <div className="contactUsContainer">
                  <h4 className="contactUsText">{t("CONTACT_US")}</h4>
               </div>
               <Formik
                  validationSchema={schema}
                  onSubmit={onFormSubmit}
                  initialValues={{
                     name: "",
                     phoneNumber: "",
                     email: "",
                     message: ""
                  }}
               >
                  {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
                     <Form noValidate onSubmit={handleSubmit}>
                        <Row>
                           <Col xs={12} sm={6}>
                              <FloatingLabel
                                 controlId="floatingInput"
                                 label={`${t("NAME")}*`}
                                 className="mb-3"
                                 style={!isFormFocus.isNameFocus && errors.name ? { color: "red" } : { color: "black" }}
                              >
                                 <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isValid={touched.name && !errors.name}
                                    style={
                                       !isFormFocus.isNameFocus && errors.name
                                          ? { border: "1px solid red" }
                                          : { border: "1px solid transparent" }
                                    }
                                    onFocus={onNameFocus}
                                    onBlur={onNameBlur}
                                 />
                              </FloatingLabel>
                           </Col>
                           <Col xs={12} sm={6}>
                              <FloatingLabel
                                 controlId="floatingInput"
                                 label={`${t("PHONE_NUMBER")}`}
                                 className="mb-3"
                                 style={
                                    !touched.phoneNumber && errors.phoneNumber ? { color: "red" } : { color: "black" }
                                 }
                              >
                                 <Form.Control
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Your phone number"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    isValid={touched.phoneNumber && !errors.phoneNumber}
                                    style={
                                       !touched.phoneNumber && errors.phoneNumber
                                          ? { border: "1px solid red" }
                                          : { border: "1px solid transparent" }
                                    }
                                    onFocus={onPhoneNumberFocus}
                                    onBlur={onPhoneNumberBlur}
                                 />
                              </FloatingLabel>
                           </Col>
                        </Row>
                        <Row>
                           <Col>
                              <FloatingLabel
                                 style={
                                    !isFormFocus.isEmailFocus && errors.email ? { color: "red" } : { color: "black" }
                                 }
                                 controlId="floatingInputEmail"
                                 label={`${t("EMAIL_ADDRESS")}*`}
                                 className="mb-3"
                              >
                                 <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    style={
                                       !isFormFocus.isEmailFocus && errors.email
                                          ? { border: "1px solid red" }
                                          : { border: "1px solid transparent" }
                                    }
                                    onFocus={onEmailFocus}
                                    onBlur={onEmailBlur}
                                 />
                              </FloatingLabel>
                           </Col>
                        </Row>
                        <Row>
                           <Col>
                              <FloatingLabel
                                 style={!touched.message && errors.message ? { color: "red" } : { color: "black" }}
                                 controlId="floatingTextarea2"
                                 label={`${t("MESSAGE")}*`}
                              >
                                 <Form.Control
                                    name="message"
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    value={values.message}
                                    onChange={handleChange}
                                    isValid={touched.message && !errors.message}
                                    style={
                                       !touched.message && errors.message
                                          ? { border: "1px solid red", height: "100px" }
                                          : { border: "1px solid transparent", height: "100px" }
                                    }
                                    onFocus={onMessageFocus}
                                    onBlur={onMessageBlur}
                                 />
                              </FloatingLabel>
                           </Col>
                        </Row>
                        <Button type="submit" className="buttonForm" disabled={!isValid && true}>
                           {`${t("SEND_MESSAGE")}`}
                        </Button>
                        {isForm.isSubmitted ? (
                           <div className="submissionMessage">
                              {!isForm.hasError ? (
                                 <CheckSquareFill className="messageIcon" size={20} color="green" />
                              ) : (
                                 <XSquareFill className="messageIcon" size={20} color="red" />
                              )}
                              <p style={!isForm.hasError ? { color: "green" } : { color: "red" }}>
                                 {submissionMessage}
                              </p>
                           </div>
                        ) : null}
                     </Form>
                  )}
               </Formik>
            </div>
            <div className="imageSection"></div>
         </div>
      </div>
   );
};

export default Contact;
