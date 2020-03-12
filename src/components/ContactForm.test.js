import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Renders correctly", () => {
    render(<ContactForm />);
}); 

// tests . . .
// input text into fields
// hit submit
// see data

test("Contact form accepts all inputs and displays them", () => {
    const { getByLabelText, findByTestId, findByText} = render(<ContactForm/>);

    // query for form inputs
    const firstNameInput = getByLabelText(/first Name*/i);
    const lastNameInput = getByLabelText(/last Name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message/i);

    // use fireEvent to fill in inputs
    fireEvent.change(firstNameInput,
        { target: {name: 'firstName', value: 'Jimmy'}
    });

    fireEvent.change(lastNameInput,
        { target: {name: 'lastName', value: 'Lemon'}
    });

    fireEvent.change(emailInput,
        { target: {name: 'email', value: 'Jimmy@Lemon.gov'}
    });

    fireEvent.change(messageInput,
        { target: {name: 'message', value: 'Jimmy does indeed like lemons'}
    });

    // query for submit button
    const submitButton = findByTestId(/testsubmit/i).then((res) => {
        fireEvent.click(res);
    });

    // use fireEvent to click the button
    //fireEvent.click(submitButton);

    // assert
    findByText(`{
        "firstName": "Jimmy",
        "lastName": "Lemon",
        "email": "Jimmy@Lemon.gov",
        "message": "Jimmy does indeed like lemons" 
    }`);

});