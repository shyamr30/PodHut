import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  const signInLinkStyle = {
    color:'#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
  };
  
  const history = useHistory();
  function startRegister(){
    history.push('/authenticate');
  }

  return (
  <div className={styles.cardWrapper}>
    <Card title="Welcome to PodHut" icon="logo">
    <p className={styles.text}>
      PodHut is a podacast application, where people can interact with each other and can talk about; be it sports, politics or academics.
      Not able find topic you want to discuss, feel free to create your own Room and start conversation.
      Like to host a private session where only invited people can join, than start a "Close Room".
    </p>
    <div>
        <Button onClick={startRegister} text="Let's Go"/>
    </div>

    </Card>
  
  </div>
  
  );
};

export default Home;
