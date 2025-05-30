import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Styles/TravelRequestForm.css';
const travelRequestSchema = Yup.object().shape({
    destination: Yup.string().required('Destination is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date()
        .required('End date is required')
        .min(Yup.ref('startDate'), 'End date must be after start date'),
    purpose: Yup.string().required('Purpose is required'),
});
const TravelRequestForm = () => {
    return (_jsx(Formik, { initialValues: { destination: '', startDate: '', endDate: '', purpose: '' }, validationSchema: travelRequestSchema, onSubmit: (values) => {
            console.log('Travel Request:', values);
        }, children: () => (_jsxs(Form, { className: "form-container", children: [_jsxs("div", { className: "class-container", children: [_jsx("h1", { className: "class-title", children: "Class 5" }), _jsx("p", { className: "class-description", children: "Form Handling and Validation." }), _jsx("a", { href: "../../../../../src/class3/a01029079/public/menu2.html", className: "class-button-link", children: "Go to Menu" })] }), _jsx("h1", { className: "form-title", children: "Travel Request Form" }), _jsxs("div", { className: "form-group", children: [_jsx(Field, { type: "text", name: "destination", placeholder: "Destination", className: "form-input" }), _jsx(ErrorMessage, { name: "destination", component: "div", className: "form-error" })] }), _jsxs("div", { className: "form-group", children: [_jsx(Field, { type: "date", name: "startDate", placeholder: "Start Date", className: "form-input" }), _jsx(ErrorMessage, { name: "startDate", component: "div", className: "form-error" })] }), _jsxs("div", { className: "form-group", children: [_jsx(Field, { type: "date", name: "endDate", placeholder: "End Date", className: "form-input" }), _jsx(ErrorMessage, { name: "endDate", component: "div", className: "form-error" })] }), _jsxs("div", { className: "form-group", children: [_jsx(Field, { as: "textarea", name: "purpose", placeholder: "Purpose", className: "form-textarea" }), _jsx(ErrorMessage, { name: "purpose", component: "div", className: "form-error" })] }), _jsx("button", { type: "submit", className: "form-button", children: "Submit" })] })) }));
};
export default TravelRequestForm;
