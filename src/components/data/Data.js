import ImageOne from '../images/Hero-Images/slider1.jpg';
import ImageTwo from '../images/Hero-Images/slider2.jpg';
import ImageThree from '../images/Hero-Images/slider3.jpg';
import ServiceImage1 from '../images/ServicesImages/services-1.png';
import ServiceImage2 from '../images/ServicesImages/services-2.png';
import ServiceImage3 from '../images/ServicesImages/services-3.png';
import ServiceImage4 from '../images/ServicesImages/services-4.png';
import ServiceImage5 from '../images/ServicesImages/services-5.png';
import ServiceImage6 from '../images/ServicesImages/services-6.png';




export const SliderData = [
    {
        title: 'Investing to extend and Drive the oil industry forward',
        subtitle: 'Committed to being a driver of the oil and gas industry where investing in the future is a top priority.',
        path: '/services',
        label: 'Read More',
        image: ImageTwo,
        kenBurnsAnimation: false,
        alt: 'Oil Refinery'
    },
    {
        title: 'Our passion & mission serve as our guides and incentives',
        subtitle: 'Our Philosophy serves as the core of our corporate culture, which has helped us in continuous growth over the years.',
        path: '/about',
        label: 'About Us',
        image: ImageOne,
        kenBurnsAnimation: true,
        alt: 'Oil Engineer'
    },
    {
        title: 'Providing Customers With High-Quality Goods & Services',
        subtitle: 'Our dedication and customer-centric approach has established us as a quality company that provide premium products and services to our clients.',
        path: '/contact',
        label: 'Enquire',
        image: ImageThree,
        kenBurnsAnimation: false,
        alt: 'Oil Engineer'
    },
]

export const footer = [
    {
        title: 'Company',
        text: [
            {
                list: 'Home',
                path: '/',
            },
            {
                list: 'About Us',
                path: '/about',
            },
            {
                list: 'Services',
                path: '/services',
            },
            {
                list: 'Discover',
                path: '/discover',
            },
            {
                list: 'Contact',
                path: '/contact',
            },
        ]
    }
]

export const AboutContent = {
    subtitle: "About Saida",
    title: "Our Company Story",
    description: "Saida Petroleum Mills Ltd (SPML) is a company incorporated in Ghana under the Companies Code 1963(Act 179).",
    description2: "Operating as a fully integrated entity across the Ghanaian oil and gas industry.As a start- up entity we deal in the construction of oil refineries including the marketing of Petroleum Products both refined and unrefined.",
    img: require("../images/About/company-logo.png"),
    alt: "Company-Logo",
    width: "500",
    height: "500",
}

export const MissionContent = {
    title: "Our Mission",
    description: "SPML's mission is to provide Total Customer Satisfaction(TCS) to all of its domestic, continental and international clients, including oil and gas investors, venture capital investors, corporate investors and the international consumer public.",
    img: require('../images/About/mission.jpg'),
    alt: "Black Corporate Meeting",
    width: "550",
    height: "400",
};

export const VisionContent = {
    title: "Our Vision",
    description: "The company's vision is to become a leader in offering the best products and services via first-rate distribution channels, primarily towards the oil and gas industries. Furthermore we aspire to provide consistently relevant, excellent, and timely services that delight our customers, employees, partners, and society at large.",
    img: require('../images/About/vision.jpg'),
    alt: "Handshake",
    width: "550",
    height: "450",
};

export const PhilosophyContent = {
    title: "Our Corporate Values",
    description: "The creation of an organizational structure that is anticipated to be effective and efficient is foremost among the suggested highlights. After they are finished, the TQM of these facilities will successfully compensate and supplement the overall efforts of all operations. ",
    description2: "Our core corporate values include the idea of offering goods and services to consumers while utilizing Total Quality Management(TQM) with the constant pursuit of Continuous Quality Improvement(CQI).",
    img: require('../images/About/corporate.jpg'),
    alt: "Corporate Women",
    width: "550",
    height: "400",
};

export const ServicesData = [
    {
        aos: "fade-right",
        image: ServiceImage1,
        alt: "Oil Tanker at Oil Depot",
        title: "Trading of Crude & Refined Oil Products",
        serviceDescription: "A leading company that operates in the trading of crude, refined and petrochemical oils products. The company operates worldwide and has offices in all the major oil producing regions in the country. We have a diverse portfolio of products. The company prides itself on being able to offer its customers quality products at competitive prices. ",
    },
    {
        aos: "fade-left",
        image: ServiceImage2,
        alt: "Oil Pipeline construction",
        title: "Construction & Operation of Oil Refineries",
        serviceDescription: "We've got the resources to assist you with the construction, repair and operation of an oil refinery. We can also help you find qualified workers and engineers to build, repair or operate your facility. We can provide you with a list of companies that are qualified to handle your needs in this area. We'll help you with everything from designing and building your refinery, to running it day to day, ensuring it's always at peak performance.",
    },
    {
        aos: "fade-right",
        image: ServiceImage3,
        alt: "Oil Technology",
        title: "Investment in the Oil, Gas & Petrochemical Industry",
        serviceDescription: "Providing investors with a platform that delivers a high return on their investments. We believe that our mission is to provide investors with a platform that delivers a high return on their investments. We are committed to providing the best possible platform for our users.",
    },
    {
        aos: "fade-left",
        image: ServiceImage4,
        alt: "Oil Rig",
        title: "Development of Oil & Gas Technology",
        serviceDescription: "Expertise in the development and implementation of technologies used by the Oil, Gas And Petrochemical Industries. Our core objective is to provide our clients with equipment and technologies that will give them a competitive edge in the industry today and in the future. We have a high level of technical knowledge on the most recent technologies and market trends, our focus is on reducing the time-to-market. We can provide you with the right solution for your project, identifying and implementing new business models, optimizing existing concepts and developing new ones.",
    },
    {
        aos: "fade-right",
        image: ServiceImage5,
        alt: "Fuel Station",
        title: "Construction & Operation of Petrol Filling Stations",
        serviceDescription: "Involved in the construction and operation of Petrol Filling Stations across the country. The construction and operation of a petrol filling station is a complex process that involves many different stakeholders. It is not only about building the stations, but also about their operation. ",
    },
    {
        aos: "fade-left",
        image: ServiceImage6,
        alt: "Offshore Oil Rig",
        title: "Exploration and Production of Oil & Gas",
        serviceDescription: "Exploring cleaner services of energy and also focusing on developing the country's natural oil and gas fields. Oil and gas exploration and production are the two most important steps in the oil and gas industry. hey are also both risky endeavors with high costs, which is why they must be done in tandem to reduce risk. ",
    },
]

