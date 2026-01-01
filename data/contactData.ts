import { ContactMethod, BusinessInfo } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  locations: [
    { name: "Chiyyaram", mapLink: "https://maps.app.goo.gl/AZmBs2fbArFto3749?g_st=ipc" },
    { name: "Vadookara", mapLink: "https://maps.app.goo.gl/TV7r412kcS3Zryqd7?g_st=ipc" }
  ],
  hours: "All Day: 05:00 AM — 08:00 PM",
  hoursLabel: "Operating Cycles"
};

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+91 62354 88392',
    link: 'https://wa.me/916235488392',
    color: 'bg-pop-green',
    textColor: 'text-white',
    description: 'Priority Table Booking & VIP Requests',
    action: 'Chat Now'
  },
  {
    id: 'email',
    label: 'Email',
    value: 'connect@habitateatery.co.in',
    link: 'mailto:connect@habitateatery.co.in',
    color: 'bg-pop-pink',
    textColor: 'text-black',
    description: 'Private Events & Press Inquiries',
    action: 'Send Mail'
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '9947109629 / 8606109629',
    link: 'tel:9947109629',
    color: 'bg-pop-yellow',
    textColor: 'text-black',
    description: 'Enquiry & Orders',
    action: 'Call Us'
  }
];