function handleCredentialResponse(response) {
  console.log("Google Login Successful!", response);

  // Send ID token to the backend for verification
  fetch("/api/auth/google", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: response.credential }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem("username", data.user.name);
        window.location.href = "/pages/chatPage.html";
      } else {
        console.error("Authentication failed:", data.error);
      }
    })
    .catch((err) => console.error("Error:", err));
}
