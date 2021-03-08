import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import RecentPost from "./RecentPost";
import blogData from "../../data/blog.json";
import Layout from "../../components/Layout";

const Home = props=>{
   
const gallaryHeight=450;
const gallaryStyle={
    height:gallaryHeight+"px",
    overflow:"hidden"
}
const sideImageHeight=gallaryHeight / 3;
const imgArry=blogData.data.map(post =>post.blogImage)

    return (
        <div>
            <Card>
             <div className="gallaryPost" style={gallaryStyle} >
                <section style={{width:"70%"}}>
                <div className="mainImage">
                    <img src={"/blogpostImg/" + imgArry[0]}  alt="fashionpic" />
                </div>
                </section>
                 <section className="sideImageWrapper" style={{width:"30%"}}>
                 <div style={{height:sideImageHeight}}>
                 <img src={"/blogpostImg/" + imgArry[1]}  alt="fashionpic" />
                </div>
                <div style={{height:sideImageHeight}}>
                <img src={"/blogpostImg/" + imgArry[0]}  alt="fashionpic" />
                </div>
                <div style={{height:sideImageHeight}}>
                <img src={"/blogpostImg/" + imgArry[2]}  alt="fashionpic" />
                </div>                  
                </section>
                </div>
                </Card>
                    <Layout>
                     <RecentPost />
                     </Layout>                       
        </div>
        
    )
}

export default Home;