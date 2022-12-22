import './Content.css';
import axios from 'axios';

export default function Content() {
    const getMovies = ()=> {
        axios.get("https://api.themoviedb.org/3/movie/top_rated" , {
            params: {
                api_key : "e9924ba50e0d3833c3a1a48040fb7846"
            }
        })
    }
    return <div className='content-wrapper'>Content</div>;
}
