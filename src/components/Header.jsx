import "../styles/Header.css"
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';



export default function Header(){

    return (
        <div className="header">
            <Icon path={mdiMenu} size={1} />
            <h2>test</h2>
        </div>
    );
}

