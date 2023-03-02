import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PostContext = createContext()
export const SelectedContext = createContext();
export const PostsContext = createContext();

export const PostProvider = (props) => {

    const [id, setId] = useState("");
    const [selected, setSelected] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://mern-cms-backend.adaptable.app/api/posts`)
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => console.log(err))

    }, [posts])
    return (
        <PostContext.Provider value={[id, setId]}>
            <SelectedContext.Provider value={[selected, setSelected]}>
                <PostsContext.Provider value={[posts, setPosts]}>
                    {props.children}

                </PostsContext.Provider>
            </SelectedContext.Provider>
        </PostContext.Provider>
    )
}