import { useState } from "react";
import { AddContactRequestType } from "@/models/request/Contact/AddContactRequest";
import ContactService from "../../services/contactservice";

export const useContact = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const contactService = new ContactService();

    const sendContactForm = async (contactRequest: AddContactRequestType) => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            await contactService.addContact(contactRequest);
            setIsSuccess(true);
        } catch (error) {
            setError(error as Error);
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return { sendContactForm, isLoading, error, isSuccess };
};