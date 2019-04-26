const URL = "https://www.mortenfeldtstudent.dk/jwtbackend";
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

class ApiFacade {
  setToken = token => {
    localStorage.setItem("jwtToken", token);
  };
  getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  };
  logout = () => {
    localStorage.removeItem("jwtToken");
  };
  login = async (user, pass) => {
    try {
      const options = this.makeOptions("POST", true, {
        username: user,
        password: pass
      });
      const res = await fetch(URL + "/api/login", options);
      const res_1 = await handleHttpErrors(res);
      this.setToken(res_1.token);
    } catch (e) {
      throw e;
    }
  };
  makeOptions(method, addToken, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (addToken && this.loggedIn()) {
      opts.headers["x-access-token"] = this.getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  //Code from Stackoverflow about get information from storage JWT token
  //https://stackoverflow.com/questions/54036341/how-to-get-user-information-from-jwt-cookie-in-nextjs-reactjs
  //--------------------------
  parseJwt = token => {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };
  //--------------------------
}

const facade = new ApiFacade();
export default facade;
