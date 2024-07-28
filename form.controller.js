const FormData = require("./form.model");

exports.createFormData = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFormData = new FormData({ name, email, message });
    await newFormData.save();
    res
      .status(201)
      .json({ message: "Form data submitted successfully", data: newFormData });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form data", error });
  }
};

exports.getAllFormData = async (req, res) => {
  try {
    const formData = await FormData.find();
    res.status(200).json({ data: formData });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving form data", error });
  }
};
