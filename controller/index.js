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

  static async register(request, response) {
    try {
      console.log("pokoe register");
      response.status(201).json({ message: "mantap" });
    } catch (error) {
      response.status(500).json({
        message: "ISE",
      });
    }
  }
}

module.exports = {
  UserController: Controller,
};
