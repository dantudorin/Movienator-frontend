import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import HdIcon from '@material-ui/icons/Hd';
import './BackToTop.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {NavLink} from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));
function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,

    window: PropTypes.func,
};

const BackToTop = (props) => {
    const [checked, setChecked] = useState(false);

    const changeCheckboxState = () => {
        setChecked(!checked);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <div className="Logo">
                        <Typography variant="h6">Movienator</Typography>
                        <HdIcon fontSize="large" />
                    </div>
                    <div className="Menu">
                        <nav>
                            <input type="checkbox" id="check" checked={checked} onChange={changeCheckboxState}/>
                            <label htmlFor="check" className="CheckButton">
                                <ListIcon style={{fontSize : 50}}/>
                            </label>
                            <ul>
                                <li><NavLink to= "/home" onClick={changeCheckboxState}>HOME</NavLink></li>
                                <li><NavLink to= "lala" onClick={changeCheckboxState}>REGISTER</NavLink></li>
                                <li><NavLink to= "altceva" onClick={changeCheckboxState}>LOGIN</NavLink></li>
                                <li><NavLink to= "sss" onClick={changeCheckboxState}>WATCHLIST</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box my={2}>

                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}

export default BackToTop;