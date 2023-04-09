import React from 'react'
import styles from './AddRoomModal.module.css';
import TextInput from '../shared/TextInput/TextInput';
import { useState } from 'react';
import {createRoom as create} from '../../http';
import { useHistory } from 'react-router-dom';

const AddRoomModel = ({onClose}) => {
    const history = useHistory();

    const [roomType, setRoomType] = useState('Public');
    const [topic, setTopic] = useState('');

    async function createRoom() {
        //server call
        try{
            if(!topic) return;
            
            const {data} = await create({topic, roomType});
            history.push(`/room/${data.id}`);
            // console.log(data);

        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className={styles.modalMask}>
           <div className={styles.modalBody}>
                <button onClick={onClose} className={styles.closeButton}>
                    <img src="/images/close.png" alt="close"/>
                </button>
                <div className={styles.modalHeader}>
                    <h3 className={styles.heading}>Enter Topic & Type of Room</h3>
                    <TextInput fullwidth="true" value={topic} onChange={(e) => setTopic(e.target.value)}/>
                    <h2 className={styles.subHeading}>Room Types</h2>
                    <div className={styles.roomTypes}>
                        <div 
                            onClick={() => setRoomType('Public')}
                            className={`${styles.typeBox} ${
                                roomType === 'Public' ? styles.active : ''
                            }`}
                        >  
                            <img src="/images/globe.png" alt="globe"/>
                            <span>Public</span>
                        </div>
                        <div 
                            onClick={() => setRoomType('Private')}
                            className={`${styles.typeBox} ${
                                roomType === 'Private' ? styles.active : ''
                            }`}
                        >  
                            <img src="/images/lock.png" alt="lock"/>
                            <span>Private</span>
                        </div>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <h2>Start a Room</h2>
                    <button onClick={createRoom} className={styles.footerButton}>
                        <span>Let's Go</span>
                        <img src="/images/add-room-icon.png" alt="go"/>
                    </button>
                </div>
           </div> 
        </div>
    )
}

export default AddRoomModel;