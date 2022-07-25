import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from './App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQFwrCe9PXQcPA/profile-displayphoto-shrink_200_200/0/1621562513772?e=1663200000&v=beta&t=mBkmX45lEFeN67JypLMezWvgKn9Fp2sqGQOg0qOyvIQ',
            name: 'Guilherme Spati',
            role: 'Web Developer',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare'},        
        ],
        publishedAt: new Date('2022-07-25 09:37:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQFwrCe9PXQcPA/profile-displayphoto-shrink_200_200/0/1621562513772?e=1663200000&v=beta&t=mBkmX45lEFeN67JypLMezWvgKn9Fp2sqGQOg0qOyvIQ',
            name: 'Guilherme Spati',
            role: 'Web Developer',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare'},        
        ],
        publishedAt: new Date('2022-07-15 09:37:00'),
    },
];

function App() {
    return (
        <div>
            <Header />
            
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

export default App
