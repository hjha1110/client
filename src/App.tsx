// import React, { BaseSyntheticEvent, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import { User } from "./types/User";

// function App() {
//   const [user, setUser] = useState<User>({
//     Name: "",
//     Email: "",
//     Age: undefined,
//     City: "",
//     Gender: "Male",
//   });

//   const handleInputChange = (event: BaseSyntheticEvent) => {
//     const element = event.target.name;
//     const value = event.target.value;
//     setUser({ ...user, [element]: value });
//   };

//   const handleSubmit = (event: BaseSyntheticEvent) => {
//     event.preventDefault();
//     axios
//       .post("https://localhost:4000/user", user)
//       .then((res) => alert("User created successfully!!"))
//       .catch((error) => alert(error));
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="Name"
//           value={user.Name}
//           onChange={handleInputChange}
//         />
//         <br />
//         <br />
//         <label htmlFor="name">Email</label>
//         <input
//           type="email"
//           name="Email"
//           value={user.Email}
//           onChange={handleInputChange}
//         />
//         <br />
//         <br />
//         <label htmlFor="name">Age</label>
//         <input
//           type="number"
//           name="Age"
//           value={user.Age}
//           onChange={handleInputChange}
//         />
//         <br />
//         <br />
//         <label htmlFor="name">City</label>
//         <select name="City" value={user.City} onChange={handleInputChange}>
//           <option value="">Select</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Koklata">Koklata</option>
//           <option value="Bangalore">Bangalore</option>
//           <option value="Chennai">Chennai</option>
//         </select>
//         <br />
//         <br />
//         <label htmlFor="name">Gender</label>&nbsp;&nbsp;
//         <label htmlFor="Male">Male</label>
//         <input
//           type="radio"
//           name="Gender"
//           value="Male"
//           checked={user.Gender === "Male"}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="Male">Female</label>
//         <input
//           type="radio"
//           name="Gender"
//           value="Female"
//           checked={user.Gender === "Female"}
//           onChange={handleInputChange}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// MarkdownEditor.js
import React, { useState } from "react";

const MarkdownEditor = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [htmlOutput, setHtmlOutput] = useState("");

  const handleConvert = async () => {
    try {
      const response = await fetch("http://localhost:3000/convertToHtml", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: markdownContent,
      });

      if (response.ok) {
        const data = await response.text();
        setHtmlOutput(data);
      } else {
        console.error("Failed to convert Markdown to HTML");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <textarea
        value={markdownContent}
        onChange={(e) => setMarkdownContent(e.target.value)}
        rows={10}
        cols={50}
      />
      <button onClick={handleConvert}>Convert to HTML</button>
      <div dangerouslySetInnerHTML={{ __html: htmlOutput }} />
    </div>
  );
};

export default MarkdownEditor;
