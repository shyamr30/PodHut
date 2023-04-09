import React, {useState} from 'react';
import Button from '../../../components/shared/Button/Button';
import styles from './StepOtp.module.css';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

const StepOtp = () => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const {phone, hash} = useSelector((state) => state.auth.otp);
  
  async function submit(){
    if(!otp || !phone || !hash) return;
    try{
     const {data} = await verifyOtp({otp, phone, hash});
     console.log(data);
     dispatch(setAuth(data));
   
    } catch(e){
      console.log(e);
    }
    
  }
    return (
        <>
          <div className={styles.cardWrapper}>
            <Card  
              title="Enter the OTP!"
              icon="lock-emoji"
            > 
              <TextInput  
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className={styles.actionButtonWrap}>
                <Button onClick={submit} text="Next" />
              </div>
              <p className={styles.bottomParagraph}>
                Enter the 4 digit code that was sent to you.

              </p>

              
            </Card>
          </div>
          
        </>
      
    );
};

export default StepOtp;
