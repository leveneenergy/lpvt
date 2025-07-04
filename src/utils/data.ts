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
        title: 'Mini-Grid Development',
        description: 'Protect your mini-grid solar projects from import delays and forex risk with solar panels built for local reliability and rapid deployment.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Industrial Installation',
        description: 'Access premium solar PV modules at predictable prices with local currency for commercial solar projects to achieve faster turnaround and supply certainty. .',
        icon: SlBadge
    },
    {
        title: 'Dealers and Installers',
        description: 'Boost profitability with high-efficiency solar panels manufactured locally to meet global standards and deliver superior performance. ',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Public Sector Projects',
        description: 'Meet procurement requirements with top-tier, locally produced solar panels backed by rigorous quality control and a 25-year linear performance warranty.',
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
        description: 'With a 200MW production capacity, we are driving energy independence across Africa.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Smart & Semi-Automated',
        description: 'Our precision-driven production line ensures world-class quality, speed, and consistency.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Homegrown Expertise',
        description: 'Led by a highly trained African team, every panel is built to perform and tested for excellence.'
    },
    {
        icon: IoSettingsOutline,
        title: 'A Solar Innovation Hub',
        description: 'We are building Africa energy future, from our showroom and service center to our solar training academy.'
    },
]

export const sub_services = [
    {
        title: 'Risks & Costs of Imports',
        description: 'Reduce your dependence on imported solar panel supply and eliminate excessive shipping costs, maritime delays, and cargo damages for solar panel installation services in Nigeria.'
    },
    {
        title: 'Critical After-Sales Support.',
        description: 'Avoid the expensive process of requesting overseas manufacturer support or returning defective solar panels. Our solar panel after sales support in Nigeria ensures fast, accessible, and transparent assistance.'
    },
    {
        title: 'Forex & Supply Volatility.',
        description: 'Reduce exposure to unstable exchange rates and unpredictable supply disruptions by choosing Naira payment solar panels with guaranteed availability and local support.'
    }
]

export const service_description = 'Backed by Levene Energy Holdings, LPVT operates a cutting-edge 200MW smart semi-automated solar panel manufacturing line in a 20,000 sqm Lagos facility. The plant integrates top-tier European equipment, advanced lamination techniques, and high-precision cell interconnection technology to ensure superior performance and seamless delivery of solar panels for large-scale projects.'

export const service_features = [
    'Precisely engineered to meet global benchmarks and standards for Grade A solar panels.',
    'Built with PERC and monocrystalline solar panel technologies, delivering up to 23.20% efficiency.',
    'Eliminate import lead times and reduce solar logistics costs for faster solar project execution.'
]

export const offer = [
    {
        icon: GrServices,
        title: 'Superior Technical Standards',
        description: 'Advanced PERC monocrystalline solar panel technology ensures high efficiency, minimal degradation, and optimal performance.'
        
    },
    {
        icon: GrServices,
        title: 'Rigorous Quality Assurance',
        description: 'Each panel undergoes multi-stage quality testing, guaranteeing zero-defect delivery and compliance with global standards.'
    },
    {
        icon: GrServices,
        title: 'Local Warranty & Support',
        description: 'Backed by a cutting-edge world-class solar factory, LPVT provides seamless warranty claims and responsive after-sales services.'
    },
]

export const solutions = [
    {
        icon: IoDiamondOutline,
        title: 'Built for Africa. Backed by Global Standards.',
        description: 'Engineered to perform in Africa’s demanding conditions without compromising on premium performance. '
    },
    {
        icon: IoSettingsOutline,
        title: 'Locally Manufactured. Powered by Precision.',
        description: 'Manufactured in our 200MW facility using European-standard technology for unmatched quality and durability.'
    },
    {
        icon: GiBamboo,
        title: 'Reliable for the Long Run. Flexible for You.',
        description: 'Enjoy high uptime, responsive local support, and flexible payment options tailored to your project needs. '
    },
]

export const solutions_services = [
    {
        icon: IoDiamondOutline,
        title: 'Solar & Mini-grid Developers',
        description: 'Our certified solar panels in Nigeria meet international standards and are ideal for industrial solar energy systems and mini-grid solar panels.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Solar Installers and Dealers',
        description: 'We provide high-efficiency solar panels in Nigeria with competitive pricing and fast delivery for professional solar installers in Nigeria.'
    },
    {
        icon: GiBamboo,
        title: 'Solar Distributors',
        description: 'Our bulk solar panel purchase in Nigeria can streamline your operations and reduce logistics complexity while improving profitability.    '
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
        headingOne:'+2349062014600',
       // headingTwo: '+2347074913775',
        headingThree: 'https://wa.me/2347074913776?text=Hello',
    },
]

// export const sliders = [
//     '/images/solar-panel-park-field.jpg',
//     '/images/construction-worker-wearing-hardhat.jpg',
//     '/images/engineers-discussing-about-solar.jpg',
//     '/images/solar-energy-photovoltaic-panels.jpg',
//     '/images/creating-sustainable-energy-using-solar.jpg'
// ]
