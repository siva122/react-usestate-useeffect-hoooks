import { CDN_URL } from '../utils/constants';
const RestaurantCard = (props) => {
  console.log('props', props);
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    deliveryTime,
  } = resData?.info;
  return (
    <div className='res-card'>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt='reslogo'
        className='res-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
