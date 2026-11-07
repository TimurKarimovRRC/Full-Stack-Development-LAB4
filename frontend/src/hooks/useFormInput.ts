import { useState } from "react";

interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export function useFormInput(initialValue: string = "") {
    const [value, setValue] = useState(initialValue);
    const [messages, setMessages] = useState<string[]>([]);

    function validate(
        validationCallback: (value: string) => ValidationResult
    ): ValidationResult {
        const result = validationCallback(value);

        setMessages(result.errors);

        return result;
    }

    function reset() {
        setValue(initialValue);
        setMessages([]);
    }

    return {
        value,
        setValue,
        messages,
        setMessages,
        validate,
        reset,
    };
}