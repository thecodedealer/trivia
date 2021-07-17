import React from 'react';
import {Link, Typography} from "@material-ui/core";

export const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/thecodedealer">
            CODE.DEALER
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

