import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function UsersImage({ list }) {
    return (
        <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 md:p-10 p-2" >
            {list?.users.map((item, index) => {
                return (
                    <div key={index}>
                        <LazyLoadImage
                            effect="blur"
                            src={item.image}
                            className="w-full h-52 object-cover duration-300"
                            alt=""
                        />
                        <p className="flex items-center justify-between font-semibold text-sm">NAME:<span>{item.firstName}</span></p>
                        <p className="flex items-center justify-between font-semibold text-sm">E-MAIL:<span>{item.email}</span></p>
                        <p className="flex items-center justify-between font-semibold text-sm">GENDER:<span>{item.gender}</span></p>
                        <p className="flex items-center justify-between font-semibold text-sm">USER-AGENT:<span>{item.email}</span></p>
                    </div>
                )
            })}
        </div>
    )
}

export default UsersImage;