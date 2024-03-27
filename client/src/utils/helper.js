import axios from "axios";

// Set up the base URL for all axios requests
axios.defaults.baseURL = "http://localhost:3000";

// API request functions
// Authenticate function
export async function authenticate(username) {
  try {
    const response = await axios.post("/api/authenticate", { username });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Username doesn't exist.");
  }
}

// Get user details
export async function getUser(username) {
  try {
    const response = await axios.get(`/api/user/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Password doesn't match.");
  }
}

// Register user
export async function registerUser(credentials) {
  try {
    const response = await axios.post("/api/register", credentials);
    if (response.status === 201) {
      const { username, email, password } = credentials;
      const msg = response.data.msg;
      await sendRegisterMail(username, email, msg);
      console.log(msg);
      return msg;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error registering user.");
  }
}

// Helper function to send registration email
async function sendRegisterMail(username, email, msg) {
  try {
    await axios.post("/api/registerMail", {
      username,
      userEmail: email,
      text: msg,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error sending registration email.");
  }
}

// Login user
export async function loginUser(credentials) {
  try {
    const response = await axios.post("/api/login", credentials);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Password doesn't match.");
  }
}

// Update user
export async function updateUser(response) {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.put("/api/updateuser", response, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't update profile.");
  }
}

// Generate OTP
export async function generateOTP(username) {
  try {
    const response = await axios.get("/api/generateOTP", {
      params: { username },
    });
    if (response.status === 201) {
      const code = response.data.code;
      const user = await getUser(username);
      const text = `Your password recovery OTP is ${code}. Verify and recover your password.`;
      await sendRegisterMail(username, user.email, text, "Password Recovery");
      return code;
    }
  } catch (error) {
    console.error(error);
    throw new Error("User not found.");
  }
}

// Verify OTP
export async function verifyOTP(username, code) {
  try {
    const response = await axios.get("/api/verifyOTP", {
      params: { username, code },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Enter valid OTP.");
  }
}

// Reset password
export async function resetPassword(credentials) {
  try {
    const response = await axios.post("/api/resetpassword", credentials);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Password not updated.");
  }
}
