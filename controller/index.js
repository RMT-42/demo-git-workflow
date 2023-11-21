class Controller {
  static async login(req, res) {
    try {
      console.log("Login lah pokoe");
      res.status(200).json({ token: "ajib" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "ISE",
      });
    }
  }
}

module.exports = Controller;
