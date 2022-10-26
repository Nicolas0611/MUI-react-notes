export const fileUpload = async (file) => {
  if (!file) throw new Error("None files imported");
  const cloudUrl = "https://api.cloudinary.com/v1_1/archikola/image/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal2");
  formData.append("file", file);

  try {
    const res = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("No se pudo subir imagen");

    const cloudRes = await res.json();
    console.log(cloudRes);
    return cloudRes.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
