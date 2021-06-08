import React, {useState} from 'react';
import Button from '../../../shared/components/FormComponents/Button'
import './PlaceItem.css';
import Card from '../../../shared/components/UIElements/Card';
import Modal from '../../../shared/components/UIElements/Modal';

const PlaceItem = ({ image, title, address, description, id }) => {
  const [showMap, setShowMap] = useState(false);

  const openMaphandler = () => setShowMap(true);

  const closeMaphandler = () => setShowMap(false);

  return (
    <>
    <Modal 
      show={showMap} 
      onCancel={closeMaphandler}
      header={address} 
      contentClass="place-item__modal-content"
      footerClass="place-item__modal-actions"
      footer={<Button onClick={closeMaphandler}>CLOSE</Button>}
    >
      <div className="map-container">
        <h2>The map! </h2>
      </div>
      </Modal>
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse onClick={openMaphandler}>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
    </>
  )
}

export default PlaceItem
