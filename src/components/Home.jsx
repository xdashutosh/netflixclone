import {React ,useEffect,useState} from 'react';
import "./Home.scss";
import Row from "./Row";
import axios from 'axios';

export default function Home() {
 const apikey="1123b482252bfa1ba7041f03e64e2cec";
 const url="https://api.themoviedb.org/3/movie";
 const popular="popular";
 const upcoming="upcoming";
 const TopRated="top_rated";
 const NowPlaying="now_playing";

 const[populararray,setpopulararray]=useState([]);
 const[upcomingarray,setupcomingarray]=useState([]);
 const[Topratedarray,setTopratedarray]=useState([]);
 const[nowplayingarray,setnowplayingarray]=useState([]);

 useEffect(() => {
 const fetchpopular = async() =>{
const {data:{results}}= await axios.get(`${url}/${popular}?api_key=${apikey}`)
setpopulararray(results);
 }

 const fetchupcoming = async() =>{
    const {data:{results}}= await axios.get(`${url}/${upcoming}?api_key=${apikey}`)
    setupcomingarray(results);
     }

     const fetchtoprated = async() =>{
        const {data:{results}}= await axios.get(`${url}/${TopRated}?api_key=${apikey}`)
        setTopratedarray(results);
         }
     
         const fetchnowplaying = async() =>{
            const {data:{results}}= await axios.get(`${url}/${NowPlaying}?api_key=${apikey}`)
            setnowplayingarray(results);
             }

 fetchpopular();
 fetchupcoming();
 fetchtoprated();
 fetchnowplaying();
 }, [])


  return (
    <section className="home">
        <div className="banner"></div>
        <Row title={popular} imgarr={populararray}/>
        <Row title={upcoming} imgarr={upcomingarray}/>
        <Row title={TopRated} imgarr={Topratedarray}/>
        <Row title={NowPlaying} imgarr={nowplayingarray}/>
    </section>
  )
}
