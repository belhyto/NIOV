// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function NiovLogo({ size }) {
  return (
    // ... existing code ...
    <img
      src={require('../../assets/images/logo.png')} // Update the path as necessary
      width={size}
      height={size}
      alt="Niov Logo"
    />
    // ... existing code ...
  );
}
// Setting default values for the props of NiovLogo
NiovLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the NiovLogo
NiovLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default NiovLogo;