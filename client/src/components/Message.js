import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Message = ({ message }) => {
    const { sendMessage } = useContext(GlobalContext);
}