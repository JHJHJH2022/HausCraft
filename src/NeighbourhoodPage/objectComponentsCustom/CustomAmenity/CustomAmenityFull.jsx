import CustomAmenityModules from "./CustomAmenityModules";

export default function CustomAmenityFull({ children, adult, elderly, shape }) {
  return (
    <CustomAmenityModules
      children={children}
      adult={adult}
      elderly={elderly}
      shape={shape}
    />
  );
}
