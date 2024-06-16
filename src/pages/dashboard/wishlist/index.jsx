import { useSelector } from "react-redux";
import WishlistItem from "../../../components/WishlistItem";
import EmptyView from "../../../components/EmptyView";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlistData.wishlist);

  return (
    <>
      <div className="col-lg-9">
        <div className="page-content my-account__wishlist">
          <div
            className="products-grid row row-cols-2 row-cols-lg-3"
            id="products-grid"
          >
            {wishlist.length > 0 ? (
              wishlist.map((product, index) => {
                return <WishlistItem key={index} product={product} />;
              })
            ) : (
              <EmptyView text={'Wishlist'} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
