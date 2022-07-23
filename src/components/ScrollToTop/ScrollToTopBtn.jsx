import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Link } from "react-scroll";

function ScrollTop(props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#home',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 15, right: 20 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

const ScrollToTopBtn = (props) => {
    return ( 
        <>
            <ScrollTop {...props}>
              <Link to="home" spy={true} smooth={true} duration={500} offset={-70}>
                <Fab size="small" aria-label="scroll back to top" style={{cursor: "none", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: '#ffbdb6'}}>
                    <KeyboardArrowUpIcon style={{color: "var(--primary)"}} />
                </Fab>
              </Link>
            </ScrollTop>
        </>
     );
}
 
export default ScrollToTopBtn;