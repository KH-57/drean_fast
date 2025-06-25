
import ServiceCard from './BanifitsCard';

// Import images from assets folder
import TrackingImg from '../../assets/banifits/Group 4 (1).png';
import DeliveryImg from '../../assets/banifits/Group 4.png'
import SupportImg from '../../assets/banifits/Illustration.png';
import BanifitsCard from './BanifitsCard';

const Banifits = () => {
  const serviceList = [
    {
      imgSrc: TrackingImg,
      title: 'Live Parcel Tracking',
      description:
        'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.',
    },
    {
      imgSrc: DeliveryImg,
      title: '100% Safe Delivery',
      description:
        'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    },
    {
      imgSrc: SupportImg,
      title: '24/7 Call Center Support',
      description:
        'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    },
  ];

  return (
    <div className="space-y-6 bg-gray-100 py-10 px-4 md:px-20">
      {serviceList.map((service, idx) => (
        <BanifitsCard key={idx} {...service} />
      ))}
    </div>
  );
};

export default Banifits;
