import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SearchedUser = ({ user }) => {
  console.log(user)
  return (
    <>
      {user?.map((user) => (
        <div>
        <LazyLoadImage
          effect="blur"
          src={user.image}
          className="w-full h-52 object-cover duration-300"
          alt=""
        />
        <p className="flex items-center justify-between font-bold">NAME:<span>{user.firstName}</span></p>
        <p className="flex items-center justify-between font-bold">E-MAIL:<span>{user.email}</span></p>
        <p className="flex items-center justify-between font-bold">GENDER:<span>{user.gender}</span></p>
        <p className="flex items-center justify-between font-bold">USER-AGENT:<span>{user.email}</span></p>
    </div>
      ))}
    </>
  );
};

export default SearchedUser;
