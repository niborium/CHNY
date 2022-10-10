import background from '../../Media/background.jpg';

//CSS för page-layout.jsx
export const PageLayout = {
  containerDesktop: {
    display: 'flex',
    backgroundColor: '#2B2B2B',
    width: '100%',
    height: '100%',
    bottom: '0',
  },
  containerTablet: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2B2B2B',
    width: '100%',
    height: '100%',
    bottom: '0',
  },
  containerMobile: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2B2B2B',
    width: '100%',
    height: '100%',
    bottom: '0',
  },
};

//CSS för start-page.jsx
export const startPage = {
  cardContainerDesktop: {
    display: 'flex',
    padding: '2rem 3rem 2rem 3rem',
    backgroundColor: '#2B2B2B',
  },
  cardContainerTablet: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 3rem 2rem 3rem',
    backgroundColor: '#2B2B2B',
  },
  cardContainerMobile: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 3rem 2rem 3rem',
    backgroundColor: '#2B2B2B',
  },
  startPageContainerDesktop: {
    position: 'fixed',
    bottom: '0',
    top: '0',
    left: '16rem',
    width: '100%',
    height: '100%',
    paddingRight: '15rem',
  },
  startPageContainerTabletAndMobile: {
    position: 'absolute',
    bottom: '0',
    top: '8rem',
    width: '100%',
    height: '100%',
  },
};

//CSS för logout-btn.jsx
export const logoutBtn = {
  button: {
    backgroundColor: '#E90539',
    borderRadius: '5px',
    color: '#FFFFFF',
    fontSize: '18px',
    width: '100px',
    height: '50px',
  },
  buttonDesktop: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonTablet: {
    marginLeft: '1rem',
  },
  buttonContainerDesktop: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
    width: '16rem',
    height: 'auto',
    padding: '1rem',
    position: 'absolute',
    bottom: '0',
  },
  buttonContainerTablet: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    width: '100%',
  },
  buttonContainerMobile: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    width: '100%',
    alignItems: 'center',
  },
  accountCircle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '2.5rem',
    height: 'auto',
  },
  userContainerDesktop: {
    padding: '0rem 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userContainerTablet: {
    padding: '0rem 1rem 0rem 1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userContainerMobile: {
    padding: '0rem 1rem 0rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  accountEmail: {
    color: '#E5B782',
    marginLeft: '.6rem',
  },
};

//CSS för header.jsx
export const Header = {
  logocontainer: {
    padding: '1.5rem',
    backgroundColor: '#F7F7F7',
  },
  image: {
    display: 'block',
    height: 'auto',
    width: '200px',
  },
  logocontainerdesktopLoggedOut: {
    position: 'absolute',
    width: '100%',
  },
  logocontainerdesktopLoggedIn: {
    position: 'fixed',
    top: '0',
    width: '16rem',
    height: '250em',
  },
  logocontainertablet: {
    display: 'flex',
    justifyContent: 'center',
    height: '8rem',
    width: '100%',
  },
  logocontainertabletLoggedIn: {
    display: 'flex',
    justifyContent: 'left',
    height: '8rem',
    width: '100%',
  },
  logocontainermobile: {
    display: 'flex',
    justifyContent: 'center',
    height: '8rem',
    width: '100%',
  },
};

//CSS för sensor-cards.jsx
export const Sensorcards = {
  rowDesktop: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '2rem',
  },
  rowTablet: {
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '8rem',
    position: 'absolute',
    paddingBottom: '10rem',
  },
  rowMobile: {
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '8rem',
    position: 'absolute',
    paddingBottom: '10rem',
    marginTop: '7rem',
  },
  imgcontainer: {
    height: '12rem',
    width: '5rem',
    position: 'absolute',
    top: '.4rem',
    left: '17rem',
    textAlign: 'right',
  },
  cardstyle: {
    width: '22rem',
    height: '12rem',
    bottom: '-10',
    background: '#F7B5B5',
  },
  noalarmcardstyle: {
    width: '22rem',
    height: '12rem',
    bottom: '-10',
    background: '#D9D9D9',
  },
  adjustedwidth: {
    width: 'auto',
    overflowWrap: 'break-word',
  },
  warningstyle: {
    width: '65px',
    height: '65px',
    position: 'absolute',
    top: '6px',
    right: '25px',
  },
  restorestyle: {
    width: '65px',
    height: '65px',
    cursor: 'pointer',
  },
  sensorValueAlarmContainer: {
    marginBottom: '.6rem',
  },
  sensorValueAlarm: {
    color: 'red',
    fontWeight: 'bold',
  },
  timeStamp: {
    fontStyle: 'italic',
  },
  sensorValue: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  value: {
    padding: '0rem 0.5rem 0rem 0.5rem',
    display: 'inline-block',
    fontWeight: 'normal',
  },
};
//CSS för restore.jsx
export const RestoreCSS = {
  restoreBtnContainer: {
    position: 'absolute',
    bottom: '1.3rem',
    right: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};
//CSS för landingpage.jsx
export const Landingpage = {
  bgimg: {
    backgroundImage: `url(${background})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgimgdesktop: {
    height: '58.80rem',
  },
  bgimgtablet: {
    height: '77.4rem',
  },
  bgimgmobile: {
    height: '50rem',
  },
  button: {
    backgroundColor: '#E90539',
    borderRadius: '5px',
    color: '#FFFFFF',
    fontSize: '18px',
    position: 'fixed',
    width: '100px',
    height: '50px',
    opacity: '0.8',
    marginTop: '1.2rem',
  },
  buttondesktop: {
    top: '18px',
    right: '40px',
  },
  buttontablet: {
    justifyContent: 'center',
    top: '45em',
  },
  buttonmobile: {
    justifyContent: 'center',
    bottom: '5em',
  },
};

export const ErrorUI = {
  positioning: {
    marginTop: '150px',
    display: 'flex',
    justifyContent: ' center',
  },
  fallbackUi: {
    borderRadius: '8px',
    color: '#FFFFFF',
    backgroundColor: '#D9D9D9',
    width: '600px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: '50px',
    padding: '4px 8px',
    borderRadius: '5px',
    backgroundColor: '#E90539',
    color: '#FFFFFF',
    fontSize: '18px',
    position: 'fixed',
    width: '100px',
    height: '50px',
    opacity: '0.8',
  },
};
//Styling för filtering.jsx & sorting.jsx
export const Filterandsort = {
  filterdesktop: {
    position: 'absolute',
    top: '150px',
    left: '-230px',
  },
  sortdesktop: {
    position: 'absolute',
    top: '200px',
    left: '-230px',
  },
  filtertablet: {
    position: 'absolute',
    top: '-100px',
    right: '50px',
  },
  sorttablet: {
    position: 'absolute',
    top: '-50px',
    right: '50px',
  },
  filtermobile: {
    position: 'absolute',
    top: '30px',
    justifyContent: 'center',
  },
  sortmobile: {
    position: 'absolute',
    top: '80px',
    justifyContent: 'center',
  },
};
