import { 
    ArticleFour, 
    ArticleOne, 
    ArticleThree, 
    ArticleTwo, 
    ClientEight, 
    ClientFive, 
    ClientFour, 
    ClientOne, 
    ClientSeven, 
    ClientSix, 
    ClientThree, 
    ClientTwo, 
    CommercialImg, 
    OffsetImg,  
    PropertyImg, 
    MemberOne,
    MemberTwo,
    MemberThree,
    MemberFour,
    MemberFive,
    MemberSix,
    MemberSeven,
} from "@assets/images"
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { PiCarBatteryLight } from "react-icons/pi";
import { GiBamboo } from "react-icons/gi";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { PiFolders } from "react-icons/pi";
import { PiBaseballHelmet } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { SlSupport } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { GrServices } from "react-icons/gr";

export const subNav = ['Services', 'Projects', 'More']

export const businessData = [
    {
        property: 'Residential',
        content: 'Mi elit accumsan malesuada suspendisse consectetur maecenas gravida conubia et quis aliquet',
        thumbnail: PropertyImg
    },
    {
        property: 'Commercial',
        content: 'Mi elit accumsan malesuada suspendisse consectetur maecenas gravida conubia et quis aliquet',
        thumbnail: CommercialImg
    },
    {
        property: 'Carbon Offset',
        content: 'Mi elit accumsan malesuada suspendisse consectetur maecenas gravida conubia et quis aliquet',
        thumbnail: OffsetImg
    },
]

export const servicesData = [
    {
        service: 'Solar Panel Installation',
        description: 'Professional setup of solar panels on residential, commercial, or industrial properties to harness solar energy for electricity.',
        icon: LiaToolsSolid
    },
    {
        service: 'Hybrid Back-up System',
        description: 'Integration of a backup power system combining solar energy with traditional power sources to ensure continuous electricity supply during outages.',
        icon: PiCarBatteryLight
    },
    {
        service: '30Kva Victron Solar Hybrid System',
        description: 'A robust 30-kilovolt-ampere (kVA) hybrid energy solution by Victron, combining solar power, batteries, and possibly other power sources for efficient energy management.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        service: 'Project Development',
        description: 'Comprehensive planning and coordination of projects from initial concept through to completion, ensuring all phases are executed effectively.',
        icon: PiFolders
    },
    {
        service: 'Engineering, Procurement & Construction',
        description: 'End-to-end services covering the engineering design, procurement of materials and equipment, and the construction and commissioning of projects.',
        icon: PiBaseballHelmet
    },
    {
        service: 'Operation & Maintenance',
        description: 'Ongoing services to ensure optimal performance and longevity of systems, including regular inspections, repairs, and updates as needed.',
        icon: IoSettingsOutline
    },
]

export const benefits = [
    {
        benefit: '100% renewable content from wind or solar energy.'
    },
    {
        benefit: 'Free electricity during nights or weekends.'
    },
    {
        benefit: 'Access to local solar energy without the need to install rooftop panels.'
    },
    {
        benefit: 'Resources to green up your life, including Tree Free Billing, carbon offsets and weekly summary emails.'
    },
]

export const qualifications = [
    {
        title: 'Reliability and Affordability',
        description: 'Our solution ensures uninterrupted power and cost-effective solar energy, making clean energy accessible and reducing costs.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Local Manufacturing',
        description: 'Our services promote job creation and economic development, ensuring faster delivery and reduced logistical costs.',
        icon: SlBadge
    },
    {
        title: 'Partnerships for Large-scale Projects',
        description: 'We collaborate with various entities to implement large-scale solar projects, addressing energy poverty and fostering community development.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Customization',
        description: 'LPV Technologies offers tailored solar solutions for hybrid, off-grid, and grid-tied systems, ensuring optimal performance.',
        icon: SlSupport
    },
]

export const articles = [
    {
        thumbnail: ArticleOne,
        title: '24 Years of Renewable Energy, 24 Hours of Sustainability',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
    {
        thumbnail: ArticleTwo,
        title: 'Why Choose a Renewable Energy Plan?',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
    {
        thumbnail: ArticleThree,
        title: 'Get Closer to Carbon Neutral with Carbon Offsets',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
    {
        thumbnail: ArticleFour,
        title: '5 Sustainable Activities for the Whole Family',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
]

export const footer_support = [
    {
        link: 'Contact Us',
        path: '/contact'
    },
    {
        link: 'FAQs',
        path: '/faq'
    },
    {
        link: 'Email Us',
        path: 'mailto:support@lpvtechnologies.com'
    }
]

export const footer_banner_items = [
    {
        link: 'Terms of Service',
        path: '/terms'
    },
    {
        link: 'Privacy Policy',
        path: '/policy'
    },
]

export const clients = [
    {
        img: ClientOne
    },
    {
        img: ClientTwo
    },
    {
        img: ClientThree
    },
    {
        img: ClientFour
    },
    {
        img: ClientFive
    },
    {
        img: ClientSix
    },
    {
        img: ClientSeven
    },
    {
        img: ClientEight
    },
]

export const services = [
    {
        icon: IoSettingsOutline,
        title: 'Built to Scale',
        description: '200MW capacity with 100MW active production, driving local energy independence'
    },
    {
        icon: IoSettingsOutline,
        title: 'Smart & Semi-Automated',
        description: 'Equipped with a European automated solar manufacturing  line for precision and speed.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Homegrown Expertise',
        description: 'Our trained Nigerian team ensures top-quality production and testing every step of the way.'
    },
    {
        icon: IoSettingsOutline,
        title: 'More Than a Plant',
        description: 'With a showroom, service center, and solar training hub, we’re a full-fledged solar innovation center.'
    },
]

export const offer = [
    {
        icon: GrServices,
        title: 'Higher Efficiency Solar Panels',
        description: 'Our Grade A panels convert more sunlight into electricity—perfect for tight spaces and demanding energy needs. More power, less space, better returns'
    },
    {
        icon: GrServices,
        title: 'Built to Last',
        description: 'With a lifespan of 25+ years, our panels are a solid long-term investment. Durable, dependable, and designed to withstand Africa’s toughest weather conditions.'
    },
    {
        icon: GrServices,
        title: 'Green Impact',
        description: 'Our high-efficiency panels reduce carbon emissions over their lifetime—delivering more clean energy while minimizing environmental impact.'
    },
]

export const solutions = [
    {
        icon: IoDiamondOutline,
        title: 'Built for Africa, Backed by Technology',
        description: 'Our panels are crafted to withstand tough conditions and deliver premium performance.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Locally Manufactured, Powered by Excellence',
        description: 'Assembled locally in our 100MW facility with top European tech, ensuring world-class quality and precision.'
    },
    {
        icon: GiBamboo,
        title: 'We offer Power and Peace of Mind',
        description: 'High uptime, reliable support, and flexible payment models tailored to your needs.'
    },
]


export const members = [
    {
        img: MemberOne,
        name: 'Jojo Ogbe',
        // title: 'Founder'
    },
    {
        img: MemberTwo,
        name: 'Adebisi Adeniyi',
        // title: 'Co-Founder'
    },
    {
        img: MemberThree,
        name: 'Yinka Adelodun',
        // title: 'Marketing Manager'
    },
    {
        img: MemberFour,
        name: 'Mohammed Idachaba',
        // title: 'Operational Manager'
    },
    {
        img: MemberFive,
        name: 'Juwon Solarin',
        // title: 'Founder'
    },
    {
        img: MemberSix,
        name: 'Aniefiok Usoro',
        // title: 'Founder'
    },
    {
        img: MemberSeven,
        name: 'Success Bassey',
        // title: 'Founder'
    },
    // {
    //     img: MemberEight,
    //     name: 'Oscar Andrews',
    //     title: 'Founder'
    // },
]

export const teams_value = [
    {
        title: 'Collective Expertise',
        description: 'We have a team of experts who are dedicated to providing the best services to our clients. Our team has years of experience in the renewable energy industry and is committed to helping our clients achieve their goals.'
    },
    {
        title: 'Efficient Resource Utilization',
        description: 'We ensure that our resources are used efficiently to provide the best services to our clients. Our team is dedicated to providing the best services to our clients and is committed to helping them achieve their goals.'
    },
    {
        title: 'Collaborative Synergy',
        description: 'We believe in the power of collaboration and work together to achieve our goals. Our team is committed to providing the best services to our clients and is dedicated to helping them achieve their goals.'
    },
]

export const aboutList = [
    {
        title: 'Outright Purchase',
        description: 'This option allows businesses/clients to capitalize on long-term savings and take advantage of immediate asset ownership.'
    },
    {
        title: 'Lease-to-Own Model',
        description: 'Excellent choice for businesses looking to spread energy cost over time while eventually taking full ownership of the system.'
    },
    {
        title: 'Energy as a Service (EaaS)',
        description: 'We provide clients with continuous power through long term contracts. A subscription fee is paid for power consumption with zero upfront cost.'
    },
    {
        title: 'Solar as a Service (SaaS)',
        description: 'This model allows clients to pay only for consumed solar energy, eliminating upfront costs and maintenance concerns. We manage solar power generation, enabling clients to focus on their core business.'
    },
]

export const contactList = [
    {
        icon: SlLocationPin,
        title: 'Head Office',
        headingOne: '19B, Ilabere Avenue, Off Oyinkan Abayomi Street, Ikoyi',
        headingTwo: 'Lagos Nigeria',
    },
    {
        icon: SlLocationPin,
        title: 'Factory Address',
        headingOne: 'Plot 1-5 Isolo Road, Ikotun Egbe',
        headingTwo: 'Lagos, Nigeria',
    },
    {
        icon: SlLocationPin,
        title: 'Abuja Office',
        headingOne: '9, Thaba Tseka Street, Off Adetokunbo Ademola, Wuse 2',
        headingTwo: 'FCT, Nigeria',
    },
    {
        icon: MdOutlineEmail,
        title: 'Email',
        headingOne: 'hello@lpvtechnolgies.com'
    },
    {
        icon: FiPhone,
        title: 'Telephone',
        headingOne: '+2347074913776',
        headingTwo: '+2347074913775',
    },
]

// export const sliders = [
//     '/images/solar-panel-park-field.jpg',
//     '/images/construction-worker-wearing-hardhat.jpg',
//     '/images/engineers-discussing-about-solar.jpg',
//     '/images/solar-energy-photovoltaic-panels.jpg',
//     '/images/creating-sustainable-energy-using-solar.jpg'
// ]