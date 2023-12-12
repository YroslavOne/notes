function TagColor(props){
    let arrayDataTag = [];
    let objDataTag


    let tagColor = () => {
      props.tag.map((tagObj, index) => {
      objDataTag = {
        color: filterDataTeg(tagObj),
        height: 0,
      };
      arrayDataTag.push(objDataTag)});
      arrayDataTag.forEach((ElemDataTag)=>{
        ElemDataTag.height=100/arrayDataTag.length+"%"
      })
      return arrayDataTag;
    };
  
    function filterDataTeg(ElemTagObj) {
      const paramDataTag = props.dataTag.filter((tag) => tag.name === ElemTagObj);
      const colorDataTag = paramDataTag[0].color;
      return colorDataTag;
    }

    return(
        <div className="line-tags">
        {tagColor().map((elementColorTag, index) => (
            <div key={index} style={{ background: elementColorTag.color, height: elementColorTag.height}}></div>
          ))}
        </div>
    )
}
export default TagColor