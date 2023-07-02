import React, { useEffect } from "react";
import {
    Header,
    Footer,
    Button,
    SmallNavbar,
    CounterOnScroll,
    SwiperCarousel,
    ControlledAccordion,
} from "../../components";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import { useObserver } from "../../hooks/lazy-load/useObserver";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// HEADER
function HeaderInner() {
    const { ref: blockRef, inView: heroInView } = useObserver();

    const scrollToContact = ()=>{
        console.log('clicke')
        setTimeout(()=>{
            const anchorLink = document.createElement('a')

            anchorLink.href = '#contact'
            // document.appendChild(anchorLink)
            anchorLink.click()
        },1000)
    }

    return (
        <div
            className={`container ${heroInView ? "lazy-animate" : ""}`}
            data-lazy="fade-up"
            ref={blockRef}
            // style={{ transitionDelay: (300 || 1 * 0.1) + "s" }}
        >
            <div className="wrapper">
                <h1 className="hero-sm-title display-3">Cost Reduction Consultants</h1>
                <h2 className="hero-sm-description display-6">
                    Unleash substantial savings every month - No upfront payment required until your monthly bills are
                    drastically reduced
                </h2>
                <div className="btn-group">
                    <Link to="/schedule-a-call">
                        <Button name="Schedule a FREE Assessment" variant="outlined" size="lg" color="light"  />
                    </Link>
                    
                    <Link to="/" onClick={scrollToContact} >
                        <Button name="Contact Us" variant="contained" size="lg" color="light" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function CounterBlock({ items, Card, options = {}, rest = {} }) {
    const { preloader, angleLeft, angleRight } = localData.svgs;

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <>
            <div className="swiper-custom-wrapper">
                <Swiper
                    touchStartPreventDefault={false}
                    // loop={true}
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            //   width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            //   width: 768,
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                    {...options}
                >
                    {/* {items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card {...{...item,index}} {...rest} />
                            </SwiperSlide>
                            );
                        })} */}

                    <SwiperSlide>
                        <CounterOnScroll
                            duration={10000}
                            color="primary"
                            progress={32}
                            description="Total savings found on average"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CounterOnScroll
                            duration={5000}
                            color="primary"
                            progress={78}
                            description="First-year value achieved"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`counter-on-scroll text-secondary`}>
                            <h2 className="counter-on-scroll-title">12x</h2>
                            <div className="counter-on-scroll-description">
                                Average ROI achieved by Accelerated Performance Transformation clients
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`counter-on-scroll text-secondary`}>
                            <h2 className="counter-on-scroll-title">4.9x</h2>
                            <div className="counter-on-scroll-description">
                                Average uplift from Accelerated Performance Transformation projects
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <div className="swiper-custom-center">
                    <button
                        className="swiper-custom-angle prev btn btn-circle-dark"
                        color="primary"
                        ref={navigationPrevRef}
                    >
                        {angleLeft}
                    </button>
                    <button
                        className="swiper-custom-angle next btn btn-circle-dark"
                        color="primary"
                        ref={navigationNextRef}
                    >
                        {angleRight}
                    </button>
                </div> */}
            </div>
        </>
    );
}

export default function ReductionConsultants() {
    const { pageFade } = useGlobalContext().animations;
    const { calendar, handshake, piggyBank, check } = localData.svgs;
    const { whiteLogo } = localData.images;
    const { consultants2, consultants3, consultants4, consultants5, consultants6 } = localData.images;

    const { ref: consultants2Ref, inView: consultants2InView } = useObserver();
    const { ref: consultants3Ref, inView: consultants3InView } = useObserver();
    const { ref: consultants4Ref, inView: consultants4InView } = useObserver();

    return (
        <motion.div {...pageFade}>
            <SmallNavbar />
            <Header title="reduct" className="hero-sm">
                <HeaderInner />
            </Header>
            <main className="reduction-consultants-page">
                <div className="container-md">
                    <div className="consultants-banner">
                        <div className="card consultants-card">
                            <div className="card-icon">{calendar}</div>
                            <h4 className="card-title">Schedule Your Call</h4>
                            <p className="card-description">
                                In just 15 minutes, we collect essential details about your business, unlocking insights
                                on your potential savings.
                            </p>
                        </div>
                        <div className="card consultants-card">
                            <div className="card-icon">{handshake}</div>
                            <h4 className="card-title">We Negotiate for You</h4>
                            <p className="card-description">
                                We actively negotiate with your service providers and tax agencies to secure maximum
                                savings for you
                            </p>
                        </div>
                        <div className="card consultants-card">
                            <div className="card-icon">{piggyBank}</div>
                            <h4 className="card-title">You Save Money</h4>
                            <p className="card-description">
                                Significantly reduce your monthly bills by thousands while maintaining the same
                                high-quality service standards.
                            </p>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="counter">
                            <h3 className="counter-title display-4">impact</h3>

                            <div className="counter-content">
                                <CounterBlock />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="details">
                    <div className="container-md">
                        <div className="wrapper">
                            <h2 className="details-title display-4">No Payment Until Bills Reduced</h2>
                            <p className="details-description display-5">
                                Experience cost-saving convenience with our straightforward pricing model. We share the
                                savings we generate for you, eliminating upfront costs and driving our dedication to
                                maximizing your financial benefits.
                            </p>

                            <h2 className="display-5">50% Of Your New Savings</h2>
                            <ul>
                                <li>
                                    <span className="startIcon">{check}</span>Zero Upfront Costs
                                </li>
                                <li>
                                    <span className="startIcon">{check}</span>No Hidden Charges
                                </li>
                                <li>
                                    <span className="startIcon">{check}</span>Risk-Free Assurance
                                </li>
                            </ul>
                        </div>

                        <div className="responsive-image">
                            <img src={consultants5} alt="" />
                        </div>
                    </div>
                </section>

                <section className="showcase">
                    <div className="container-sm">
                        <div
                            className={`showcase-image responsive-image ${consultants2InView ? "lazy-animate" : ""}`}
                            ref={consultants2Ref}
                            data-lazy="fade"
                        >
                            <div className="responsive-image-content">
                                <Link to="/" className="responsive-image-logo">
                                    <img src={whiteLogo} alt="" />
                                </Link>
                                <br />
                                <br />
                                <h3 className="responsive-image-text">cost reduction consultants</h3>
                            </div>
                            <img src={consultants2} alt="" />
                        </div>

                        <p className="description-text">
                            The Artax Consulting stands out as a frontrunner in the cost reduction domain. Our primary
                            objective is to assist your company in identifying concealed overcharges within your
                            invoices and exploring all conceivable avenues to minimize your business costs. Our clients
                            enjoy the advantages derived from our unmatched expertise, insider insights, and
                            well-established history of success.
                        </p>

                        <h3 className="display-4">The Benefits of Engaging a Cost Reduction Consultant</h3>

                        <p className="description-text">
                            While some business owners consider competitive bidding as a viable cost reduction strategy,
                            there exist more precise, intensive, and comprehensive methods to effectively minimize
                            operational expenses. Engaging a professional cost reduction consultant offers a range of
                            targeted options specifically tailored to your business, ensuring optimal suitability and
                            effectiveness
                            <br />
                            <br />
                            Cost-cutting initiatives typically involve complex processes that necessitate careful
                            evaluation of suppliers. Achieving a balance between cost of ownership, reliability, and
                            quality becomes crucial when striving to reduce operational expenses. It's important to
                            recognize that the least expensive supplier might lack reliability and quality, validating
                            the adage "you get what you pay for" in the business context. Conversely, suppliers offering
                            the highest levels of reliability and quality often come with a significant premium for
                            their exceptional service. Cost reduction experts excel at identifying alternative options
                            that maintain a comparable level of reliability and quality while offering a competitive
                            cost of ownership.
                            <br />
                            <br />
                            Experts in cost reduction excel at renegotiating with your current suppliers. Whether you
                            seek changes or limitations due to cash-flow constraints, your dedicated team of consultants
                            can handle the renegotiation process. They ensure that your business interests are
                            safeguarded while maintaining a strong, mutually beneficial relationship with your
                            suppliers.
                            <br />
                            <br />A cost reduction consultant not only offers customized cost-saving recommendations
                            based on your business's unique categories but also ensures swift implementation. With their
                            expertise, measures are put into action quickly, leading to noticeable improvements in cash
                            flow sooner than expected.
                            <br />
                            <br />
                            The majority of cost reduction consulting firms operate on a performance-based pricing
                            model, charging based on the amount of savings they identify for your company. While some
                            business owners may initially hesitate to explore such services, it's essential to recognize
                            the reliability and significant cost-savings potential they bring. By engaging these
                            services, your business can thrive and prosper rapidly, unlocking enhanced profitability and
                            operational efficiency.
                        </p>

                        <h3 className="display-4">Cost-savings rapidly transform business operations</h3>

                        <div
                            className={`showcase-image responsive-image ${consultants3InView ? "lazy-animate" : ""}`}
                            ref={consultants3Ref}
                            data-lazy="fade"
                        >
                            <div className="responsive-image-content">
                                <h3 className="responsive-image-text">Swift and substantial outlay.</h3>
                                <br />
                                <h3 className="responsive-image-text">Savings drive success..</h3>
                                <br />
                                <h3 className="responsive-image-text">The functioning of operations</h3>
                            </div>
                            <img src={consultants3} alt="" />
                        </div>

                        <p className="description-text">
                            For small businesses with limited overhead margins, each dollar saved is equivalent to ten
                            dollars earned. Identifying $1000 in cost savings during a cost reduction consultation
                            translates to the need to increase sales by $10,000 to achieve the same impact on the bottom
                            line.
                            <br />
                            <br />
                            By leveraging the expertise of a reliable cost reduction consultancy, you can unlock
                            substantial annual savings. Skilled professionals thoroughly analyze every aspect of your
                            business to develop a comprehensive expense reduction analysis. They provide valuable
                            insights and recommendations on where to make targeted adjustments for cost-effective
                            reductions. Importantly, their compensation is based on the actual amount of savings
                            achieved, ensuring alignment with your financial goals and incentivizing their commitment to
                            your success.
                        </p>

                        <h3 className="display-4">The Process of Streamlining Costs for Small Businesses</h3>

                        <div
                            className={`showcase-image responsive-image ${consultants4InView ? "lazy-animate" : ""}`}
                            ref={consultants4Ref}
                            data-lazy="fade"
                        >
                            <img src={consultants4} alt="" />
                        </div>

                        <p className="description-text">
                            Every business employs unique processes when it comes to analyzing and reducing costs.
                            However, it typically commences with compiling all expense statements of the business. A
                            cost reduction consultant gathers information and examines the operating expenses, enabling
                            them to develop a comprehensive and tailored cost-reduction analysis for your business.
                            <br />
                            <br />
                            Subsequently, most cost reduction consulting firms proceed with analyzing the business's
                            operating expenses. To optimize savings, consultants scrutinize various aspects of overhead
                            costs, including office machinery expenses, human resources administration costs, finance
                            and accounting expenses, marketing and advertising expenditures, telecommunication costs,
                            insurance expenses, and more.
                            <br />
                            <br />
                            Once these expenses are thoroughly assessed, cost-reduction consultants formulate
                            recommendations for cost savings and expense reduction measures. They complete their
                            analysis and schedule a meeting with you to discuss their findings, present recommendations,
                            and jointly plan the implementation process.
                            <br />
                            <br />
                            The final step undertaken by cost reduction business services is to assist clients in
                            implementing the recommendations. These experts won't leave you on your own. They provide
                            guidance as you pursue the cost-saving opportunities outlined in their recommendations. In
                            cases where you may be uncomfortable executing certain steps, the firm can provide a
                            specialist to implement these cost-saving measures on your behalf.
                        </p>

                        <h3 className="display-4">Effective Strategies to Reduce Costs in Your Business</h3>

                        <p className="description-text">
                            When it comes to cost reduction strategies for businesses, there are numerous approaches
                            that extend beyond competitive bidding processes. By engaging the right firm to assist you
                            in cutting costs within your business operations, you can uncover additional opportunities
                            to explore. Cost reduction experts often identify simple yet impactful expense-saving
                            methods, such as leveraging technological advancements, implementing behavioral
                            modifications, rectifying billing errors, negotiating supplier rates, exploring alternative
                            providers, eliminating unnecessary services, and more.
                            <br />
                            <br />
                            While these strategies may seem straightforward, implementing a few tweaks and changes can
                            significantly improve efficiency and streamline processes. Correcting errors and eliminating
                            unnecessary services can lead to substantial cost reductions without sacrificing essential
                            functions. Furthermore, by utilizing expense reduction consulting services, you can discover
                            more competitive suppliers, providing you with choices that offer the same level of quality,
                            reliability, and cost reduction.
                            <br />
                            <br />
                            By employing these cost-reduction strategies, you can achieve a more efficient and
                            cost-effective business operation, ultimately leading to increased savings for your company.
                        </p>

                        <h3 className="display-4">Save Time and Money: Hire Expense Reduction Experts</h3>
                        <p className="description-text">
                            Small businesses often struggle to meet cash flow targets. Hiring expense reduction experts
                            can save you time, energy, and money. By optimizing costs and focusing on revenue, you'll
                            have extra cash for growth. Experts identify savings and help you thrive. Cut costs, boost
                            your business!
                        </p>
                        <br />
                        <br />
                        <br />
                        <ControlledAccordion
                            items={[
                                {
                                    buttonName: "Bill Analysis",
                                    variant: "text",
                                    color: "dark",
                                    content: (
                                        <p className="description description-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    ),
                                },
                                {
                                    buttonName: "Expense Recovery",
                                    variant: "text",
                                    color: "dark",
                                    content: (
                                        <p className="description description-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    ),
                                },
                                {
                                    buttonName: "Rate Verification",
                                    variant: "text",
                                    color: "dark",
                                    content: (
                                        <p className="description description-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    ),
                                },
                                {
                                    buttonName: "Cost Management",
                                    variant: "text",
                                    color: "dark",
                                    content: (
                                        <p className="description description-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    ),
                                },
                            ]}
                        />
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
