import './card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <div className='div_container'>{description.map((el, index) => (
          <div key={index} className={el+'_color'}>{el}</div>
        ))}</div>
      </div>
    </div>
  );
}

export default Card;
