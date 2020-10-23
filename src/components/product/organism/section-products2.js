import React,{useState} from "react"
import styled from "styled-components"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import ProductCard from "../molecule/div-product-card2" 

const SSectionProducts=styled.div`
.cards{
    padding:100px 0;
    display:flex;
    flex-wrap:wrap;
    grid-gap:50px;
    justify-content:center;
}
`

const SectionProducts=({products})=>{
    const [photoIndex,setPhotoIndex]=useState(0);
    const [isOpen,setIsOpen]=useState(false);

    const handleChange=(i)=>{
        setPhotoIndex(i)
        setIsOpen(true)
        console.log(products[photoIndex].img)
    }
    return (
        <SSectionProducts>
            <div className="container">
                <div className="cards">
                    {products.map(({img,title},i)=><ProductCard img={img} index={i} handleChange={handleChange} title={title}/>)}
                 </div>   
                {isOpen && (
                    <Lightbox
                    mainSrc={products[photoIndex].img}
                    nextSrc={products[(photoIndex + 1) % products.length].img}
                    prevSrc={products[(photoIndex + products.length - 1) % products.length].img}
                    onCloseRequest={() =>setIsOpen(false)}
                    onMovePrevRequest={() =>
                            setPhotoIndex( (photoIndex + products.length - 1) % products.length )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex( (photoIndex + 1) % products.length )
                    }
                    imageTitle={products[photoIndex].title}
                    />
                )}
            </div>    
        </SSectionProducts>
      );
}

export default SectionProducts