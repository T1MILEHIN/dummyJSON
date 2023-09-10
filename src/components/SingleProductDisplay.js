import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SingleProductDisplay = (props)=> {
    const [imgIndex, setImgIndex] = useState(0)
    const changeImg = (index)=> {
        setImgIndex(index)
    }
    return (
        <div className="relative">
            <div className="md:w-[500px] mx-auto">
                <AnimatePresence>
                    <motion.div key={imgIndex}>
                        <LazyLoadImage
                        src={props.images[imgIndex]}
                        effect="blur"
                        className="w-full aspect-square object-contain rounded-2xl"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="text-sm font-bold flex items-center gap-4">
                    <p>$
                    {props.price -
                        ((props.discountPercentage / 100) * props.price).toFixed(1)}
                    </p>
                    <p className="line-through text-slate-400">${props.price}</p>
                </div>
                <h2 className="text-sm md:text-2xl font-extrabold tracking-wide">{props.title}</h2>
                <p>{props.description}</p>
                <Link to={`/`} className="bg-blue-500 p-2 rounded-lg font-bold inline-block ">BACK</Link>
            </div>
            <div className="absolute top-5 md:left-5 left-2 flex flex-col gap-5">
                {props.images.map((img, index)=> <img key={index} src={img} onClick={()=> changeImg(index)} className="md:w-16 w-12 aspect-square object-cover border-2 border-black rounded-lg" alt="" />)}
            </div>
        </div>
    )
}

export default SingleProductDisplay