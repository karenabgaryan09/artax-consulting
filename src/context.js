import React, { useState, useEffect, createContext, useContext } from "react";
import localData from "./localData";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import useFetch from "./hooks/useFetch";
export const Context = createContext();

export default function Provider({ children }) {
    const [state, setState] = useState({
        fetchedData: null,
        localData,
    });

    const [animations, setAnimations] = useState({
        pageFade: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 },
        },
        lazyLoad: {
            fadeUp: {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                // exit:{ opacity: 0 },
                // transition:{ duration: 0.5 }
            },
        },
    });

    // ALERT
    const notify = () => toast("Wow so easy!");
    // const notify = () => {
    //     toast("Default Notification !");

    //     toast.success("Success Notification !", {
    //         position: toast.POSITION.TOP_CENTER,
    //         // autoClose: false,
    //         autoClose: 7000,
    //         // icon: false,
    //         icon: "🚀",
    //         delay: 1000,
    //         // draggablePercent: 60,
    //         // type: toast.TYPE.INFO,
    //         // onOpen: () => window.alert('Called when I open'),
    //         // onClose: () => window.alert('Called when I close')
    //     });

    // };

    const successAlert = (message = "success") => {
        toast.success(message);
    };
    const errorAlert = (message = "error") => {
        toast.error(message);
    };
    // SEND/RECEIVE MESSAGE
    const [isMessageSending, setIsMessageSending] = useState(false);
    const sendMessageToAdmin = (
        form,
        message = "Your application was succcessfully sent",
        successCallback = () => {},
        errorCallback = () => {}
    ) => {
        setIsMessageSending(true);
        emailjs.sendForm("service_6fbyiy3", "template_krolvca", form, "Nyfe0gSIb8TlPNiVB").then(
            (result) => {
                successAlert(message);
                setIsMessageSending(false);
                sendMessageToUser(form);
                successCallback()
            },
            (error) => {
                errorAlert();
                setIsMessageSending(false);
                errorCallback()
            }
        );
    };

    const [isMessageSendingToUser, setIsMessageSendingToUser] = useState(false);
    const sendMessageToUser = (form) => {
        setIsMessageSendingToUser(true)
        emailjs.sendForm("service_6fbyiy3", "template_o4yehwt", form, "Nyfe0gSIb8TlPNiVB").then(
            (result) => {
                console.log("successfully sent message to user");
                setIsMessageSendingToUser(false)
            },
            (error) => {
                console.log("failed to send message to user");
                setIsMessageSendingToUser(false)
            }
        );
    };

    // BUSINESS GLOSSARY DATA
    const [businessGlossaryData,setBusinessGlossaryData] = useState({})
    const [businessPeopleData,setBusinessPeopleData] = useState({})
    const { getBusinessGlossaryData,getBusinessPeopleData } = useFetch();

    const getBusinessGlossaryConvertedData = (data) => {
        const convertedData = {};
        data.table.rows.forEach((item, index) => {
            const obj = {};
            obj.metaTitle = item.c[1]?.v;
            obj.metaDescription = item.c[2]?.v;
            obj.h1 = item.c[5]?.v;
            obj.paragraph = item.c[6]?.v;
            obj.image = item.c[7]?.v;
            convertedData[item.c[0]?.v.toLowerCase()] = obj;
        });
        return convertedData
    };
    const getBusinessPeopleConvertedData = (data) => {
        const convertedData = {};
        data.table.rows.forEach((item, index) => {
            const obj = {};
            obj.metaTitle = item.c[1]?.v;
            obj.metaDescription = item.c[2]?.v;
            obj.h1 = item.c[3]?.v;
            obj.paragraph = item.c[4]?.v;
            convertedData[item.c[0]?.v.toLowerCase()] = obj;
        });
        return convertedData
    };

    useEffect(() => {
        getBusinessGlossaryData((err, data) => {
            const tempData = JSON.parse(data.substr(47).slice(0, -2));
            const convertedData =  getBusinessGlossaryConvertedData(tempData);
            setBusinessGlossaryData(convertedData);
        });
        getBusinessPeopleData((err, data) => {
            const tempData = JSON.parse(data.substr(47).slice(0, -2));
            const convertedData =  getBusinessPeopleConvertedData(tempData);
            setBusinessPeopleData(convertedData);
        });
    }, []);

    return (
        <Context.Provider
            value={{
                state,
                ...state,
                setState,
                animations,
                successAlert,
                errorAlert,
                sendMessageToAdmin,
                isMessageSending,
                isMessageSendingToUser,
                businessGlossaryData,
                businessPeopleData
            }}
        >
            {children}
        </Context.Provider>
    );
}

export const useGlobalContext = () => useContext(Context);
