import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useSelector } from "react-redux";

export const ImageGallery = ({}) => {
  const { imageUrls } = useSelector((state) => state.journal.activeNote);
  return (
    <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
      {imageUrls.map((item, index) => (
        <ImageListItem key={index}>
          <img src={item} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
