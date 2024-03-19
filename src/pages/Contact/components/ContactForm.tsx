import { FormEvent, useState, useEffect } from 'react';

const ContactForm = () => {
    const accessKey = import.meta.env.VITE_WEB3FORMS
    const inputStyle = "shadow appearance-none border rounded w-full py-2 text-[.875em] md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    const labelStyle = "block text-gray-700 font-bold mb-3 md:text-[1.025em]";

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("Enviar Correo");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", accessKey);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setResult("¡Correo enviado con éxito!");
            setEmail("");
            setMessage("");
        } else {
            setResult("Error al enviar el correo. Por favor, intentalo de nuevo");
        }
    };

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (result === "¡Correo enviado con éxito!") {
            timer = setTimeout(() => {
                setResult("Enviar Correo");
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [result]);

    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center lg:absolute gap-[1rem] lg:px-8 pt-6 pb-8 sm:m-4 w-full lg:h-[80%] ">
            <div className="lg:w-1/4 w-full mb-4">
                <label className={labelStyle} htmlFor="email">Correo Electrónico</label>
                <input
                    id="email"
                    className={inputStyle}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Escribe tu correo electrónico"
                    required
                />
            </div>
            <div className="lg:w-1/4 w-full mb-6">
                <label className={labelStyle} htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    className={inputStyle}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje"
                    required
                ></textarea>
            </div>
            <input type="hidden" name="subject" value="Nuevo correo desde mi portfolio" />
            <div className="h-captcha" data-captcha="true"></div>
            <button
                className="text-[#fff] bg-[#000] w-full lg:w-1/4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                {result}
            </button>
        </form>
    )
}

export default ContactForm;
