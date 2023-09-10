import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion, AnimatePresence } from "framer-motion"


const containerVariant = {
  initial: { opacity: 1 },
  final: {
    opacity: 1,
    transition:{
      type:"spring", delayChildren: 1, staggerChildren: 1,
    }
  },
}

const childVariant = {
  initial: { y: 20, opacity: 0 },
  final: {
    y: 0,
    opacity: 1
  },
  exit : {
    y: "80px",
    opacity: 0
  }
}

function List({ list }) {
  return (
    <motion.div variants={containerVariant} initial="initial" animate="final" className="grid md:grid-cols-4 grid-cols-1 gap-10 px-2 md:px-10">
      {list?.map((item, index) => {
        return (
          <>
            <AnimatePresence>
              <motion.div variants={childVariant} initial="initial" animate="final" exit="exit"
                key={item.id}
                className={`rounded-lg flex flex-col relative group`}
              >
                <div className={`relative w-full aspect-square`}>
                  <LazyLoadImage
                    effect="blur"
                    src={item.images[0]}
                    className={`w-full aspect-square object-center object-cover rounded-2xl`}
                    alt={item.title}
                  />
                </div>
                <div className="">
                  <p className="text-sm lg:text-md font-extrabold tracking-wide my-2 md:my-4">
                    {item.title}
                  </p>
                </div>
                <div className="text-sm font-bold flex items-center gap-4">
                  <p>
                    $
                    {item.price -
                      ((item.discountPercentage / 100) * item.price).toFixed(1)}
                  </p>
                  <p className="line-through text-slate-400">${item.price}</p>
                </div>
                <p className="bg-green-400 text-white font-bold rounded-xl md:px-3 md:py-1 px-2 py-2 text-sm md:text-sm absolute top-2 right-2 tracking-wide">
                  -{item.discountPercentage}% off
                </p>
                <Link size="small" to={`/products/${item.id}`} className="bg-green-400 rounded-md font-bold mt-2 px-3 py-2 inline w-fit">
                  more
                </Link>
              </motion.div>
            </AnimatePresence>
          </>
        );
      })}
    </motion.div>
  );
}

export default List;
