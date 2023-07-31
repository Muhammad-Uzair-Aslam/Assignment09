
function MainCard(props) {
    return (
        
            <div className="col-lg-4 col-sm-12 col-md-6  crd" style={{width:"350px"}}>
                <img src={props.Img} alt="" />
                <h3 className=" mb-2 mt-3 text-color">{props.title}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eligendi officiis molestiae, Lorem ipsum dolor sit amet. quod dolores perspiciatis earum architecto eaque vitae corrupti.</p>

            </div>
        
    )
}
export default MainCard;