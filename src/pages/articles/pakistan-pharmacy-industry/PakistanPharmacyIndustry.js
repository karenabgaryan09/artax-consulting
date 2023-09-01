import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar, Skeleton } from "../../../components";
import localData from "../../../localData";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context";
import useJsonLd from "../../../hooks/useJsonLd";

// HEADER INNER
// function HeaderInner() {
//     return <div className="hero-inner"></div>;
// }

const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://artaxconsulting.com/expert-advice/pakistan-pharmacy-industry",
    },
    headline: "Pakistan Pharmacy Business Guide",
    image: "",
    author: {
        "@type": "Person",
        name: "Muhammad S. Ali, PharmD",
    },
    publisher: {
        "@type": "Organization",
        name: "",
        logo: {
            "@type": "ImageObject",
            url: "",
        },
    },
    datePublished: "2023-08-16",
};

export default function PakistanPharmacyIndustry() {
    const { pageFade } = useGlobalContext().animations;
    const { ms } = localData.images;
    useJsonLd(jsonLdData);

    useEffect(() => {
        document.title = "Pakistan Pharmaceutical Industry Outlook";
    }, []);
    

    const [isBioHidden, setIsBioHidden] = useState(true);

    return (
        <motion.div {...pageFade}>
            <SmallNavbar />
            {/* <Header title="home" className="hero-pakistan-pharmacy-industry">
                <HeaderInner />
            </Header> */}
            <main className="pakistan-pharmacy-industry-page">
                <section className="showcase">
                    <div className="container-sm">
                        <h1 className="showcase-title">Pakistan Pharmacy Business Guide</h1>

                        <em>Written by Muhammad S. Ali, PharmD</em>
                        <br />
                        <p style={{ fontSize: "16px" }}> Last updated: Aug 16, 2023 • 8 min read</p>

                        <br />

                        <p className="showcase-description">
                            According to a{" "}
                            <a href="/#/" target="_blank" className="link-dark" underline="always">
                                cross-sectional survey
                            </a>
                            , the number of registered pharmacies in Pakistan is ranging from 45000 to 50000.
                            Lahore, which is the capital of the most populated province of Pakistan, Punjab,
                            has 3600{" "}
                            <a href="/#/" target="_blank" className="link-dark" underline="always">
                                + pharmacies
                            </a>{" "}
                            that are registered and licensed.
                            <br />
                            <br />
                            The number of the pharmacies are increasing day by day due to profitability and
                            increase in drugs’ demand due to exponential increase in the population.
                            <br />
                            <br />
                            The pharmacy business as a whole is good for Pakistan as it provides jobs and
                            takes part in the economy of the country. According to some stats, there are about
                            one lac people working in pharmacy business and pharmacy business generates a
                            yearly revenue of about $1 billion.
                        </p>
                        <br />
                        <br />

                        <h2> Becoming a Pharmacist in Pakistan</h2>
                        <p className="showcase-description">
                            To become a pharmacist in Pakistan, you have to take admission in a professional
                            degree called PharmD, Doctor of Pharmacy, which is a 5 years long educational
                            program. The student seeking admission must have an intermediate or A-level
                            certificate to be eligible for admission into pharmacy colleges in Pakistan.
                        </p>
                        <br />
                        <br />

                        <h2>Admission Criteria</h2>
                        <p className="showcase-description">
                            Pharmacy colleges that fall under the UHS,{" "}
                            <a href="/#/" target="_blank" className="link-dark" underline="always">
                                {" "}
                                University of Health Sciences
                            </a>{" "}
                            , demand MDCAT entry test for admissions. HEC,{" "}
                            <a href="/#/" target="_blank" className="link-dark" underline="always">
                                Higher Education Commission
                            </a>{" "}
                            , also has recently introduced an entry test called USAT-medical and students must
                            have taken this test to be eligible for admission into pharmacy colleges under its
                            umbrella. UHS and HEC’s pharmacy colleges offer both, merit-based and
                            self-financed admissions. Affiliated pharmacy colleges, that are linked to either
                            UHS or HEC, offer admissions on self-financed basis and do not require any entry
                            test, but money.
                        </p>
                        <br />
                        <br />

                        <h2>Fee Structure</h2>
                        <p className="showcase-description">
                            The fee of the students who get admission on merit-based into pharmacy colleges
                            under HEC is almost $90/yearly while those who are enrolled on self-financed basis
                            pay $240/yearly. The students who are enrolled into pharmacy colleges under UHS
                            pay $500/yearly.
                            <br />
                            <br />
                            The affiliated pharmacy colleges charge the most. They charge almost $550/semester
                            and there are two semesters a year and it makes $1100/yearly.
                        </p>
                        <br />
                        <br />

                        <h2>Best Pharmacy Colleges</h2>
                        <p className="showcase-description">
                            There are many infamous pharmacy colleges in Pakistan. Following is a list of
                            pharmacy colleges with the best ones in order from top to the bottom:
                            <br />
                            <br />
                            <li>
                                Punjab University, College of Pharmacy, it is the pioneer pharmacy college and
                                the best in Pakistan
                            </li>
                            <li>Quaid-e-Azam University, College of Pharmacy</li>
                            <li>University of Veterinary & Animal Sciences, College of Pharmacy</li>
                            <li>University of Karachi, College of Pharmacy</li>
                            <li>The Islamia University of Bahawalpur, College of Pharmacy</li>
                            <li>The University of Lahore, College of Pharmacy</li>
                        </p>
                        <br />
                        <br />

                        <h2>Salary of a Pharmacist and Best Cities to Practice</h2>
                        <p className="showcase-description">
                            On average, the starting salary for a fresh graduate pharmacist working in
                            community pharmacy and hospital pharmacy is around $126/month. The salary goes up
                            as the experience mounts but it is always low relative to the experience of the
                            pharmacist.
                            <br />
                            <br />
                            The best cities to practice pharmacy in Pakistan are Karachi, Lahore & Islamabad
                            for pharmacists there are paid higher as compared to other cities.
                        </p>
                        <br />
                        <br />

                        <h2>Validity of Pakistan’s PharmD Degree in other Countrie</h2>
                        <p className="showcase-description">
                            To work as a pharmacist in countries like the UK, USA, Canada, Australia, New
                            Zealand, Switzerland, Norway, Finland, etc Pakistani pharmacists have to clear the
                            registration exam of the countries.
                            <br />
                            <br />
                            Every country has a pharmacy registration exam in place and the Pakistani
                            pharmacists must pass them in order to work there. Like, US has NAPLEX, UK has
                            OSPAP and Australia has KAPS. The Pakistani pharmacists who desire to work in the
                            stated countries must pass the mentioned exams in order to work there as a
                            pharmacist.
                        </p>
                        <br />
                        <br />

                        <h2>Pharmacy Supply Chain</h2>
                        <p className="showcase-description">
                            Pharmacy supply chain in Pakistan is simple and easy to comprehend for anyone. It
                            consists of three levels: Pharmaceutical Manufacturing Unit (Pharmaceutical
                            Industry), Distributors/Franchisers, and Pharmacies.
                            <br />
                            <br />
                            Distributors and Franchisers exist as an intermediary between the Pharmaceutical
                            Manufacturing Units and Pharmacies. Every area has a specific distributor that
                            distributes the drugs to the pharmacies of the area.
                            <br />
                            <br />
                            Distributors are in direct contact with the Pharmaceutical Manufacturing Units,
                            they procure drugs from them and store them in their warehouses. Distributors have
                            salespersons who go to the pharmacies of the area the distribution setup is
                            supplying drugs to and take the orders. On the placement of the order by the
                            pharmacy, a distributor releases the drugs to the pharmacy.
                            <br />
                            <br />
                            Local pharmacies do not buy drugs directly from the Pharmaceutical Manufacturing
                            Units, as their buying and storage capacity is too low while Pharmaceutical
                            Manufacturing Units produce the drugs in bulk.
                            <br />
                            <br />
                            Moreover, chain pharmacies, a pharmacy setup that has a large number of pharmacies
                            under its name forming a chain, buy directly from the manufacturers as they have
                            great capacity and own a warehouse where they can keep the drugs.
                        </p>
                        <br />
                        <br />

                        <h2>Major Pharmaceutical Brands Active in Pakistan</h2>
                        <p className="showcase-description">
                            Following is the list of major multi-international pharmaceutical brands working
                            in Pakistan:
                            <br />
                            <br />
                            <li>GlaxoSmithKline</li>
                            <li>Abott Laboratories</li>
                            <li>Pfizer</li>
                            <li>Novartis</li>
                            <li>Sanofi</li>
                            <li>Bayer</li>
                            <li>Roche</li>
                            <li>Amgen</li>
                            <li>Eli Lilly</li>
                            <li>Astellas Pharma</li>
                            <li>Bayer</li>
                            <li>Merck</li>
                            <li>Johnson & Johnson</li>
                            <li>Takeda Pharmaceuticals</li>
                            <li>Boehringer Ingelheim</li>
                            <li>Bristol Myers Squibb</li>
                            <br />
                            <br />
                            Below mentioned are the major national or local pharmaceutical brands working in
                            Pakistan:
                            <br />
                            <br />
                            <li>AGP</li>
                            <li>CCL</li>
                            <li>Getz Pharma</li>
                            <li>Sami Pharmaceuticals</li>
                            <li>Pharmacare</li>
                            <li>Searle</li>
                            <li>Ferozsons Laboratories</li>
                            <li>High-Q Pharmaceuticals</li>
                            <li>Hilton Pharma</li>
                            <li>Indus Pharma</li>
                            <li>Medisure</li>
                            <li>Herbion Pakistan</li>
                            <li>Pharmevo</li>
                            <li>Epla Laboratories</li>
                        </p>
                        <br />
                        <br />

                        <h2>How to Start a Pharmacy Business in Pakistan</h2>
                        <p className="showcase-description">
                            To start a pharmacy business in Pakistan, the business owner or the manager must
                            be a registered pharmacist and if the owner is not a registered pharmacist then he
                            hires one.
                            <br />
                            <br />
                            The pharmacy must have premises of 100 square feet in size. The premises must be
                            well ventilated and lit. It should be equipped with necessary furniture, equipment
                            to store and dispense drugs: shelves, counters, refrigerator, air conditioner and
                            a dispensing counter.
                            <br />
                            <br />
                            To sell the drugs the pharmacy owner must have procured a “Drug Selling License”
                            from DRAP. The pharmacy must have a good stock of OTC and prescription drugs and
                            they should be checked regularly to find out if any drug is near expiry.
                            <br />
                            <br />A registered pharmacist must be present at the pharmacy all the time who
                            could dispense medicines and advise patients.
                        </p>
                        <br />
                        <br />

                        <h2>Cost of Medicine in Pakistan, and Ordering Online</h2>
                        <p className="showcase-description">
                            Cost of the medicine in Pakistan is competitively low as compared to the developed
                            countries owing to its robust pharmaceutical industry. In fact, Pakistan exports
                            drugs to more than 55 countries.
                            <br />
                            <br />
                            You can guess the relative price from the example that in Pakistan the average
                            price of a pack of 20 paracetamol tablets is PKR 100, which makes up $0.34, as per
                            the current rate $1 = PKR 291.43, while the average price of the same pack of
                            paracetamol tablets in USA is $5. Therefore, there is a huge gap between the
                            prices and the drugs in Pakistan are quite cheaper when compared to developed
                            countries.
                            <br />
                            <br />
                            Within Pakistan, there are a lot of online pharmacy websites and applications
                            through which you can buy drugs by uploading your prescription; one such online
                            platform is{" "}
                            <a href="/#/" target="_blank" className="link-dark" underline="always">
                                dawai.pk.
                            </a>
                            <br />
                            <br />
                            For the people living outside Pakistan they cannot buy drugs online from Pakistan,
                            as it is the policy of the countries that you cannot import the drug for personal
                            use.
                        </p>
                        <br />
                        <br />

                        <h2>Risks and Outlook for the Pharmaceutical Business in Pakistan</h2>
                        <p className="showcase-description">
                            Corruption is the major issue that is being faced by the pharmaceutical business
                            in Pakistan. The drug inspectors who come to inspect the pharmacy premises before
                            the establishment of the pharmacy demand bribes and it all starts from there.
                            <br />
                            <br />
                            Even if the pharmacy is fully complying with the law, the drug inspectors coerce
                            them into paying them some monthly amount and if the pharmacy owners take up the
                            stand against it, they are made to taste the consequences. In short, the
                            regulatory body is in shambles in Pakistan.
                            <br />
                            <br />
                            Moreover, counterfeit drugs are a serious problem in Pakistan. Counterfeit drugs
                            are made using substandard active ingredients and excipients and they prove to be
                            of no benefit to the patient.
                            <br />
                            <br />
                            The outlook for pharmaceutical business in Pakistan is mixed. On the one hand, the
                            country’s population is growing rapidly which drives demand for pharmaceutical
                            products while on the other hand; the risks that the pharmaceutical businesses are
                            facing are serious and could hamper the growth.
                            <br />
                            <br />
                            The pharmaceutical industry in Pakistan is at the crossroads. If the government
                            addresses the risks and the problems being faced by it then it has great chances
                            of rapid growth and contributing to Pakistan's economy.
                        </p>
                        <br />

                        <hr />
                        <br />
                        <br />

                        <h2> Author bio</h2>
                        <p className="showcase-description">
                            Muhammad S. Ali, PharmD (Punjab University, College of Pharmacy) currently works
                            at Dozz Pharmacy and Medlite Pharmacy in Lahore Pakistan.{" "}
                            <Button
                                className={`${isBioHidden ? "" : "hidden"}`}
                                name="read more"
                                style={{ float: "right" }}
                                onClick={() => setIsBioHidden(false)}
                            />
                            <br />
                            <br />
                            <span className={`${isBioHidden ? "hidden" : ""}`}>
                                That’s why Bankrate’s experts rated and reviewed over 250 cards of the top
                                card offers on the market to create our list of the best credit cards of 2023.
                                We’ve evaluated each card based on its rewards value, rates and fees, welcome
                                offers, customer experience, cardholder perks and more to give you a clear
                                sense of where it shines and where it may fall short. In addition to
                                Bankrate’s review scores, check out our deep dive into each card to see if
                                it’s a good fit for your wallet (and pick up pro tips for maximizing its
                                value).
                                <br />
                                <br />
                                So whether you’re looking for a rewards powerhouse, a money-saving 0-percent
                                intro APR or a reliable way to build credit, one of these cards from our
                                partners should be a great fit.
                                <Button
                                    style={{ marginTop: "10px" }}
                                    name="show less"
                                    onClick={() => setIsBioHidden(true)}
                                />
                            </span>
                        </p>

                        <br />

                        <hr />
                        <br />
                        <br />

                        <img
                            className="showcase-image"
                            src={ms}
                            alt="Dr. Muhammad S. Ali (Pharmacist, Lahore Pakistan)"
                        />
                        <br />

                        <em>By Dr. Muhammad S. Ali (Pharmacist, Lahore Pakistan)</em>
                        <br />
                        <br />
                        <br />
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
