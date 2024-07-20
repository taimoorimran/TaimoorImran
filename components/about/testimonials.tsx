import { developerMeta } from "@/lib/constants";
import { TestimonialItemProps } from "@/lib/interfaces";
import Image from "next/image";
// import { IoCloseCircleOutline } from "react-icons/io5";

// const TestimonialModal = () => {
//   return (
//     <div className="modal-container">
//       <div className="overlay"></div>
//       <section className="testimonials-modal">
//         <button className="modal-close-btn">
//           <IoCloseCircleOutline className="size-5" />
//         </button>
//         <div className="modal-img-wrapper">
//           <figure className="modal-avatar-box">
//             <Image
//               src="/images/stock/avatar-1.png"
//               alt="Daniel lewis"
//               width="80"
//               height="80"
//             />
//           </figure>
//           <Image
//             src="/images/stock/icon-quote.svg"
//             alt="quote icon"
//             width={300}
//             height={300}
//           />
//         </div>
//         <div className="modal-content">
//           <h4 className="h3 modal-title">Daniel lewis</h4>
//           <time defaultValue="2021-06-14">14 June, 2021</time>
//           <div>
//             <p>
//               Richard was hired to create a corporate identity. We were very
//               pleased with the work done. She has a lot of experience and is
//               very concerned about the needs of client. Lorem ipsum dolor sit
//               amet, ullamcous cididt consectetur adipiscing elit, seds do et
//               eiusmod tempor incididunt ut laborels dolore magnarels alia.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

const TestimonialItem = ({
  name,
  description,
  imgSrc,
}: TestimonialItemProps) => {
  return (
    <li className="testimonials-item">
      <div className="content-card">
        <figure className="testimonials-avatar-box">
          <Image
            src={imgSrc ? imgSrc : "/images/stock/avatar-1.png"}
            alt={name}
            width="60"
            height="80"
          />
        </figure>
        <h4 className="h4 testimonials-item-title">{name}</h4>
        <div className="testimonials-text">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

const Testimonials = () => {
  const testimonialItems: TestimonialItemProps[] = developerMeta.testimonials;
  return (
    testimonialItems.length > 0 &&
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialItems.map(
          ({ name, description, imgSrc }: TestimonialItemProps, key) => {
            return (
              <TestimonialItem
                key={`item_${name}_${key}`}
                name={name}
                description={description}
                imgSrc={imgSrc}
              />
            );
          },
        )}
      </ul>
    </section>
  );
};
export default Testimonials;
