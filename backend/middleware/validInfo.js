
// creating validInfo middleware for checking correct field inputs

module.exports = (req,res,next) => {

  //destructure req.body

  const {first_name,last_name, email, password} = req.body;
  
  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if(req.path === "/register") {
    if(![email,first_name,last_name, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if(!validEmail(email)) {
      return res.status(401).json("Invalid Email");
    }
  }

  else if(req.path === "/login") {
    if(![email,password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if(!validEmail(email)) {
      return res.status(401).json("Invalid Email");

  }
  
}
next()
}