import locationMerchant from '../../assets/location-merchant.png';

const BeMerchant = () => {
    return (
       <div data-aos="zoom-in-up" className="bg-no-repeat bg-[#03373D] bg-[url('assets/be-a-merchant-bg.png')] p-20 mb-20 mt-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={locationMerchant}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
       We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <button className="btn btn-primary rounded-full mr-20 text-black">Become a Merchant</button>
      <button className="btn  rounded-ful text-primary">Earn with Profast Courier</button>
    </div>
  </div>
</div>
    );
};

export default BeMerchant;