
import Carded from '../../../components/UI/Carded';
import pic5 from "../../../Images/postImages/pic5.jpg";
import "./style.css";


/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
  return(
    <div style={{width:"70%"}}>
    <Carded>
      <div className="postImage">
         <img src={pic5} alt="pic" />
    </div>
    <div style={{textAlign:"center"}}> 
    <span> Featured</span>
     <h2>Fashion is Awesome</h2>
    <span>posted onFebruary 26,2021 byAysegul Demir</span>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
     <button>Read More</button>
      </div>
     </Carded>
     </div>
   )

 }

export default RecentPost