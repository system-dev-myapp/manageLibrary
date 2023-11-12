import Swal from "sweetalert2";

export default function handleValidateImage(file) {
    return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(file.name);
}
