import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {selectModal} from "../../store/modules/main/plain/selectors";
import {closeModal, resetQuestionnaire} from "../../store/modules/main/plain/actions";

interface IProps {
}

export const Modal: FC<IProps> = () => {

    const dispatch = useDispatch()

    const {open, title, content} = useSelector(selectModal)

    const handleReset = () => {
        dispatch(resetQuestionnaire())
        dispatch(closeModal())
    }

    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReset} color="primary">
                        Reset
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
