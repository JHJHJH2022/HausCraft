const API_URL = "http://localhost:5000/savedSessions";

export const getAllDesignSessions = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getDesignSession = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data.objects;
  } catch (err) {
    console.error(err);
  }
};

export const createDesignSession = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "POST",
  });
  console.log(response.status);
  return response.json;
};

export const updateDesignSession = async (id, sessionObjects) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessionObjects),
    });
    console.log(response.status);
    return response.status;
  } catch (err) {
    console.error(err);
  }
};

// updateDesignSession("myThirdDesign", {
//   objects: [
//     {
//       id: "hahahid6",
//       position: [0, 0, 0],
//       rotation: [0, 0, 0],
//       typology: "cluster1",
//       levels: 1,
//     },
//     {
//       id: "hahahid3",
//       position: [0, 0, 0],
//       rotation: [0, 0, 0],
//       typology: "tree",
//       levels: 1,
//     },
//   ],
// });

export const deleteDesignSession = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    console.log(response.status);
    return response.status;
  } catch (err) {
    console.error(err);
  }
};
