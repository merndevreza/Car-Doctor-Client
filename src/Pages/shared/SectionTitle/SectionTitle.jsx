import PropTypes from "prop-types";
const SectionTitle = ({ title, largeTitle, subTitle }) => {
  return (
    <div className="text-center">
      <h3 className="text-[#FF3811] text-2xl font-bold">{title}</h3>
      <h2 className="text-[#151515] text-5xl font-bold my-5">{largeTitle}</h2>
      <p className="text-[#737373] text-lg capitalize max-w-2xl mx-auto">{subTitle}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  largeTitle: PropTypes.string,
  subTitle: PropTypes.string,
};
export default SectionTitle;
