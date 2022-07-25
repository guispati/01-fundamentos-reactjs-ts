import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ua2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50' />
            
            <div className={styles.profile}>
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFwrCe9PXQcPA/profile-displayphoto-shrink_200_200/0/1621562513772?e=1663200000&v=beta&t=mBkmX45lEFeN67JypLMezWvgKn9Fp2sqGQOg0qOyvIQ" />
                <strong>Guilherme Spati</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}