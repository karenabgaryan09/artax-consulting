import React, { useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../components";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function PrivacyPolicy() {
    const { pageFade } = useGlobalContext().animations;
    const {anglesLeft} = localData.svgs

    useEffect(() => {
        document.title = "Privacy Policy";
    }, []);

    return (
        <motion.div {...pageFade}>
           <SmallNavbar/>
            <main className="privacy-policy-page">
                <section className="privacy-policy">
                    <div className="container">
                        <h2 className="privacy-policy-title display-4">Privacy Policy for Consulting Business</h2>
                        <p className="privacy-policy-text">
                            At Artax Consulting, we are committed to protecting the privacy of our clients and website
                            users.
                        </p>
                        <br />
                        <p className="privacy-policy-content">
                             This Privacy Policy explains how we collect, use, and disclose personal information
                            collected through our website and in the course of providing consulting services.
                            Information Collection and Use We collect personal information, such as name, email address,
                            and phone number, when you provide it to us through our website, or when you engage our
                            services. We may also collect non-personal information, such as the type of browser you are
                            using or the pages you visit on our website, to improve our website and services. We use
                            your personal information to provide consulting services, communicate with you, and send you
                            information about our services. We may also use your information to personalize your
                            experience on our website and to send you marketing communications, which you may opt-out of
                            at any time. Information Sharing and Disclosure We will not sell, trade, or otherwise
                            transfer your personal information to outside parties without your consent, except as
                            necessary to provide consulting services, comply with legal obligations, or protect our
                            rights and interests. We may share your personal information with third-party service
                            providers who assist us in providing consulting services or managing our website. We require
                            these service providers to protect your personal information and use it only for the
                            purposes for which we disclose it. We may also disclose your personal information to
                            government authorities or law enforcement officials if required by law or necessary to
                            protect our rights or the rights of our clients. Data Security We take reasonable measures
                            to protect your personal information from unauthorized access, use, or disclosure. We
                            maintain administrative, technical, and physical safeguards to protect against accidental or
                            unlawful destruction, loss, alteration, or unauthorized access to or disclosure of personal
                            information. However, please note that no transmission of data over the internet is
                            completely secure. While we strive to protect your personal information, we cannot guarantee
                            the security of any information you transmit to us, and you do so at your own risk.
                        </p>
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <br />
                        <br />

                        <h2 className="privacy-policy-title display-4">Data Retention</h2>
                        <p className="privacy-policy-content">
                            We will retain your personal information for as long as necessary to provide consulting
                            services and to comply with legal obligations. Your Rights You have the right to access,
                            correct, and delete your personal information that we have collected. You also have the
                            right to object to the processing of your personal information, restrict its use, or request
                            that we transfer it to another party. To exercise these rights, please contact us using the
                            contact information provided below. Updates to this Policy We may update this Privacy Policy
                            from time to time to reflect changes in our information practices or applicable laws. If we
                            make material changes to this Policy, we will notify you by email or by posting a notice on
                            our website. Contact Us If you have any questions or concerns about this Privacy Policy or
                            our data practices, please contact us at info@artaxconsulting.com
                        </p>
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
