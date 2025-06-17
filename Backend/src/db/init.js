import contactModel from "../model/Contact/index.js";
import ProjectModel from "../model/ProjectDetails/index.js";


const dataBaseInIt = async () => {

    await contactModel.sync({ alter: true, force: false });
    try {
        await ProjectModel.sync({ force: true });

        await ProjectModel.create({
            name: 'FlexiFly',
            images: ['../../uploads/1750167178219-F1.png',  '../../uploads/1750167205095-F2.png', '../../uploads/1750167242618-F5.png',  '../../uploads/1750167229988-F4.png', '../../uploads/1750167299265-F8.png',  '../../uploads/1750167313022-F9.png',  ],
            description: 'FlexiFly is a comprehensive private aircraft booking platform designed to streamline and simplify flight management for both administrators and end users. This powerful dashboard solution empowers aviation service providers to efficiently manage bookings, pilots, users, and essential flight-related documentation, all from a single intuitive interface. \n\nCustomer Dashboard Credentials:\nEmail: customer@gmail.com\nPassword: Hcl*123456.',
            features: [
                'Add & Manage Bookings',
                'Pilot Management with License Upload',
                'User Account Creation & Onboarding',
                'Custom Quotes via Email',
                'TrustFlight Maintenance Data Integration',
                'Flight Details (Upcoming/Past)',
                'Xero Invoice Viewing',
                'PandaDoc Legal Document Signing',
                'Maintenance Transparency for Clients'
            ],
            tools: [
                'React',
                'TailwindCSS',
                'Node.js',
                'Express.js',
                'PostgreSQL',
                'Mailjet',
                'PandaDoc Integration',
                'Xero Invoice Integration',
                'TrustFlight Times Integration'
            ],
            visitcode: 'https://flexifly.splendidmark.com',
            sourceCode: ''
        });
        
        await ProjectModel.create({

            name: 'Travelix',
            images: ['../../uploads/1721120593500-Travelix1.png', '../../uploads/1721120617187-Travelix2.png', '../../uploads/1721120637151-Travelix3.png', '../../uploads/1721121939223-Travelix4.png', '../../uploads/1721121972330-Travelix5.png'],
            description: 'Travel Agency Website Front End',
            features: [
                'User can Book Travel Destination',
                'User can Book Transport',
                'User can Book Guides',
                'Responsive Design'
            ],
            tools: [
                'React',
                'HTML5',
                'CSS3',
                'Bootstrap'
            ],
            visitcode: 'https://traveliiix.netlify.app/',
           
        });

        await ProjectModel.create({
            name: 'Netflix',
            images: ['../../uploads/1721048888628-Netflix.png', '../../uploads/1721050976888-Netflix2.png', '../../uploads/1721051138485-Netflix3.png', '../../uploads/1721054463108-Netflix4.png', '../../uploads/1721054633074-Netflix5.png'],
            description: 'Netflix Ui Clone',
            features: [
                'Netflix Ui Clone',
                'Home Page',
                'Responsive Design'
            ],
            tools: [
                'React',
                'HTML5',
                'CSS3',
                'Bootstrap'
            ],
            visitcode: 'https://clonesite-ten.vercel.app/',
          
        });

        await ProjectModel.create({
            name: 'Estate Explorer',
            images: ['../../uploads/1721122725252-Es1.png', '../../uploads/1721122743745-Es2.png', '../../uploads/1721122774258-Es3.png', '../../uploads/1721122797278-Es5.png', '../../uploads/1721122821759-Es6.png', '../../uploads/1721122840331-Es7.png'],
            description: 'Real Estate Website for Listing Property for Rent and Sell',
            features: [
                'Authentication',
                'CRUD APIs',
                'User can Create Profile',
                'User can list Property',
                'User can interact with customer for making deal'
            ],
            tools: [,
                'Reactjs',
                'Nodejs',
                'Expressjs',
                'PostgreSQL',
                'HTML5',
                'CSS3',
            ],
            visitcode: '',
           
        });
        await ProjectModel.create({
            name: 'Apollo-Frontend',
            images: ['../../uploads/1721643950012-AP1.png', '../../uploads/1721643969759-Ap2.png', '../../uploads/1721644000928-Ap3.png', '../../uploads/1721644050458-Ap4.png'],
            description: 'Apollo  Website Frontend Design',
            features: [
                'DashBoard',
                'Routes',
                'Filters'
            ],
            tools: [,
                'Reactjs',
                'Nodejs',
                'Expressjs',
                'MongoDB',
                'HTML5',
                'TailwindCSS',
            ],
            visitcode: 'https://apollo-puce.vercel.app',
        });

        console.log('Initial data added successfully.');
    } catch (error) {
        console.error('Error adding initial data:', error);
    }
};

export default dataBaseInIt;
