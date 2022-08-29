import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from './App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/guispati.png',
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
            avatarUrl: 'https://github.com/guispati.png',
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
