const newDriverValidation = (req, res, next) => {
  const { name, surname, image, nationality, dateOfBirth, description, teams } =
    req.body;

  const missingFields = []; //lleno segun que campo falta

  if (!name) missingFields.push("NAME");

  if (!surname) missingFields.push("SURNAME");

  // if (!image) missingFields.push("IMAGE");

  if (!nationality) missingFields.push("NATIONALITY");

  if (!dateOfBirth) missingFields.push("DATE OF BIRTH");

  if (!description) missingFields.push("DESCRIPTION");

  if (!teams) missingFields.push("TEAMS");

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `The following field(s) are required: ${missingFields.join(", ")}`,
    });
  }

  next();
};

const newDriverValidation2 = (req, res, next) => {
  const { name, surname, image, nationality, dateOfBirth, description, teams } =
    req.body;

  if (typeof name !== "string")
    return res.status(400).json({ error: "Name must be an STRING" });
  if (typeof surname !== "string")
    return res.status(400).json({ error: "Surname must be an STRING" });
  // if (typeof image !== "string")
  //   return res.status(400).json({ error: "Image must be an STRING" })
  if (typeof nationality !== "string")
    return res.status(400).json({ error: "Nationality must be an STRING" });
  // if (typeof dateOfBirth !== "string")
  //   return res.status(400).json({ error: "Date of Birth must be an STRING" })
  // if (typeof description !== "string")
  //   return res.status(400).json({ error: "Description must be an STRING" })
  // if (typeof teams !== "string")
  //   return res.status(400).json({ error: "Teams must be an STRING" })
  next();
};

module.exports = {
  newDriverValidation,
  newDriverValidation2,
};
