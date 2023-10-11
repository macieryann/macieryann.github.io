// import { Button, TextField } from "@mui/material";
// import { useState } from "react";


// const initialFormValues = {
//     fullName: "",
//     email: "",
//     message: "",
//     formSubmitted: false,
//     success: false
// }

// export const useFormControls = () => {
//     // update "values" as the form updates
//     const [values, setValues] = useState(initialFormValues);
//     const [errors, setErrors] = useState({});

//     const validate = (fieldValues = values) => {
//         let temp = { ...errors }

//         if ("fullName" in fieldValues)
//             temp.fullName = fieldValues.fullName ? "" : "This field is required."

//         if ("email" in fieldValues) {
//             temp.email = fieldValues.email ? "" : "This field is required."
//             if (fieldValues.email)
//                 temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
//                     ? ""
//                     : "Email is not valid."
//         }

//         if ("message" in fieldValues)
//             temp.message =
//                 fieldValues.message ? "" : "This field is required."

//         setErrors({
//             ...temp
//         });
//     }

//     const handleInputValue = () => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//         validate({ [name]: value });
//     };

//     const handleFormSubmit = async () => {
//         e.preventDefault();
//         if (formIsValid()) {
//             await postContactForm(values);
//             alert("You've posted your form!")
//         }
//     };

//     const formIsValid = (fieldValues = values) => {
//         const isValid =
//             fieldValues.fullName &&
//             fieldValues.email &&
//             fieldValues.message &&
//             Object.values(errors).every((x) => x === "");

//         return isValid;
//     };

//     return {
//         handleInputValue,
//         handleFormSubmit,
//         formIsValid,
//         errors
//     };
// }

// const inputFieldValues = [
//     {
//         name: "fullName",
//         label: "Full Name",
//         id: "my-name"
//     },
//     {
//         name: "email",
//         label: "Email",
//         id: "my-email"
//     },
//     {
//         name: "message",
//         label: "Message",
//         id: "my-message",
//         multiline: true,
//         rows: 10
//     }
// ];

// export const ContactForm = () => {
//     const {
//         handleInputValue,
//         handleFormSubmit,
//         formIsValid,
//         errors
//     } = useFormControls();
//     return (
//         <form onSubmit={handleFormSubmit}>
//             {inputFieldValues.map((inputFieldValue, index) => {
//                 return (
//                     <TextField
//                         key={index}
//                         onBlur={handleInputValue}
//                         onChange={handleInputValue}
//                         name={inputFieldValue.name}
//                         label={inputFieldValue.label}
//                         multiline={inputFieldValue.multiline ?? false}
//                         rows={inputFieldValue.rows ?? 1}
//                         autoComplete="none"
//                         {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}

//                     />
//                 );
//             })}
//             <Button
//                 type="submit"
//                 disabled={!formIsValid()}
//             >
//                 Send Message
//             </Button>
//         </form>
//     )
// }